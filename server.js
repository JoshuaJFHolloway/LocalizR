'use strict';
require('dotenv').config();

// first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Answer = require('./model/answers');

// and create our instances
var app = express();
var router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;
var connectionString = 'mongodb://' + process.env.USERNAME + ':' + process.env.PASSWORD + '@ds139219.mlab.com:39219/spanish1';
mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  // and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!' });
});

router.route('/scenario')
  .get(function(req, res) {
    console.log(connectionString);
      Answer.find( function(err, answer){
          if (err)
              res.send(err);
          res.json(answer)
      });
  })
  .delete(function(req, res) {
    Answer.remove({}, function(err, comment) {
      if(err)
        res.send(err);
      console.log('Database cleaned')
    })
  })

  .post(function(req, res) {
      var answer = new Answer();
      answer.user_answer = req.body.user_answer;
      answer.correct_answer = req.body.correct_answer;
      // user.password = req.body.password;

      answer.save(function(err) {
        if (err)
          res.send(err);
        res.json({message: "User successfully added"})
      })
  });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
