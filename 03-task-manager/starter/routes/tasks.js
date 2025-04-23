const express = require('express');
const router = express.Router();

const { getAllTasks, createTasks, getTask, updateTasks, delateTasks } = require('../controllers/tasks.js');

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTask).patch(updateTasks).delete(delateTasks)

module.exports = router
