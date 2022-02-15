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

const TASK = model("task", toDoSchema);

const create = async (data) => {
  const newTask = await new TASK(data).save();
  return newTask;
};

module.exports = { create };