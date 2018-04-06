'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  username: String,
  score: Number
});

module.exports = mongoose.model('User', UsersSchema);
