const model = require('../models/ToDoModel');

const create = async (data) => {
  const task = await model.create(data);
  return task;
};

const getTasks = async () => await model.getTasks();

const updateTask = async (id, data) => await model.updateTask(id, data);

const deleteTask = async (id) => await model.deleteTask(id);

module.exports = { create, getTasks, updateTask, deleteTask };