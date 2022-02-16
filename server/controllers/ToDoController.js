const service = require('../services/ToDoService');

const create = async (req, res) => {

  const newTask = await service.create(req.body);

  return res.status(201).json(newTask);
};

const getTasks = async (req, res) => {
  const tasks = await service.getTasks();
  return res.status(200).json(tasks);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = await service.updateTask(id, req.body);
  return res.status(200).json(updatedTask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deletedTask = await service.updateTask(id);
  return res.status(200).json(deletedTask);
};

module.exports = { create, getTasks, updateTask, deleteTask };