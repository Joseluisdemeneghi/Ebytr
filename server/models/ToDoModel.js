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

const getTasks = async () => {
  const tasks = await TASK.find();
  return tasks;
};

const updateTask = async (id, data) => {
  const task = await TASK.findOneAndUpdate({ _id: id }, data);
  return task;
}

module.exports = { create, getTasks, updateTask };