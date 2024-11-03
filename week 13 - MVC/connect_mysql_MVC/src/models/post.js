const db = require('../config/database');

const todo = {
    postAll: (title, description, due_date, callback) => {
        const query = 'INSERT INTO tasks (title, description, due_date) VALUES (?, ?, ?)';
        db.query(query, [title, description, due_date], callback);
    },
    // getAll: (callback) => {
    //     const query = 'SELECT * FROM tasks';
    //     db.query(query, callback);
    // }
};

module.exports = todo;
