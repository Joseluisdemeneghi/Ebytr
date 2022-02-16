const express = require('express');
const controller = require('../controllers/ToDoController');

const router = express.Router();
router.post('/', controller.create);
router.get('/', controller.getTasks);
router.put('/:id', controller.updateTask);

module.exports = router;