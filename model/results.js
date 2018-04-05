'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  username: String,
  score: Integer
});

module.exports = mongoose.model('User', UsersSchema);
