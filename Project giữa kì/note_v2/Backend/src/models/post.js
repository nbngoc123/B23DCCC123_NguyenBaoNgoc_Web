const db = require('../config/database');

const todo = {
    postAll: (title, content, due_date, created_at, rate_prosess, callback) => {
        const query = 'INSERT INTO notes (title, content, due_date, created_at, rate_prosess) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [title, content, due_date, created_at, rate_prosess], callback);
    },
};

module.exports = todo;
