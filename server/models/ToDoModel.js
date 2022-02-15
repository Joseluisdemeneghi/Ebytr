const { Schema, model } = require('mongoose');
const connection = require('./connection');

const toDoSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const task = model("task", toDoSchema);