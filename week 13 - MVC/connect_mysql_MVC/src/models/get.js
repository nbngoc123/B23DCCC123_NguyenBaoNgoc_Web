const db = require('../config/database');

const todo = {
    getAll: (callback) => {
        db.query('SELECT * FROM tasks', callback);
    }
};

module.exports = todo;
