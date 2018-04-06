'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  username: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', UsersSchema);
