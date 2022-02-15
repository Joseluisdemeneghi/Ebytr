const model = require('../models/ToDoModel');

const create = async (data) => {
  const task = await model.create(data);
  return task;
};

const getTasks = async () => await model.getTasks();

module.exports = { create, getTasks };