'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswersSchema = new Schema({
  context: String,
  user_answer: String,
  user_translation: String,
  correct_answer: String,
  correct_translation: String
});

module.exports = mongoose.model('Answers', AnswersSchema);
