const model = require('../models/ToDoModel');

const create = async (data) => {
  const task = await model.create(data);
  return task;
};

module.exports = { create };