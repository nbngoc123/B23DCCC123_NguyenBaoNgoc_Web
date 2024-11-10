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
    const { title, content, due_date, created_at, rate_prosess } = req.body;
    posttodo.postAll(title, content, due_date, created_at, rate_prosess, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({"message": "Task created successfully"});
    })
};

exports.putAllTodo = (req, res) => {
    const { id } = req.query;
    const { title, content, due_date, created_at, rate_prosess, status } = req.body;
    puttodo.putAll(title, content, due_date, created_at, rate_prosess, status, id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({"message": "edit success"});
    })
};

exports.deleteAllTodo = (id, req, res) => {
    deletetodo.deleteAll(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({"message": "delete success"});
    })
};
