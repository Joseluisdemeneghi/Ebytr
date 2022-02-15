const service = require('../services/ToDoService');

const create = async (req, res) => {

  const newTask = await service.create(req.body);

  return res.status(201).json(newTask);
};

module.exports = { create };