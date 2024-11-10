const db = require('../config/database');

const todo = {
    getAll: (callback) => {
        db.query('SELECT * FROM notes', callback);
    }
};

module.exports = todo;
