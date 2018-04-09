'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Spanish1Schema = new Schema({
  context: String,
  user_answer: String,
  user_translation: String,
  correct_answer: String,
  correct_translation: String
});

module.exports = mongoose.model('Spanish1', Spanish1Schema);
