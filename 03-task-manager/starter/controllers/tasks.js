const Task = require('../models/Task.js');

const getAllTasks = (req, res) => {
    res.send('all items from file');
}

const createTasks = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
}

const getTask = (req, res) => {
    res.send('get single task');
}

const updateTasks = (req, res) => {
    res.send('update task');
}

const delateTasks = (req, res) => {
    res.send('delete task');
}
module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    delateTasks
}