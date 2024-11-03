const gettodo = require('../models/get');
const posttodo = require('../models/post');
const puttodo = require('../models/put');
const deletetodo = require('../models/delete');

exports.getAllTodo = (req, res) => {
    gettodo.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(result);
    })
};

exports.postAllTodo = (req, res) => {
    const { title, description, due_date } = req.body;
    posttodo.postAll(title, description, due_date, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({"message": "Task created successfully"});
    })
};

exports.putAllTodo = (req, res) => {
    const { id } = req.query;
    const { title, description, due_date, completed } = req.body;
    puttodo.putAll(title, description, due_date, completed, id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({"message": "edit success"});
    })
};

exports.deleteAllTodo = (req, res) => {
    const { id } = req.query;
    deletetodo.deleteAll(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({"message": "delete success"});
    })
};
