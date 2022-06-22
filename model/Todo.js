const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  todo: { type: String },
  completed: { type: Boolean },
  date: { type: Date, default: Date.now },
});

module.exports = Todo = mongoose.model('todo', TodoSchema);
