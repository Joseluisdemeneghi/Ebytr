const express = require('express');
const controller = require('../controllers/ToDoController');

const router = express.Router();
router.post('/', controller.create);

module.exports = router;