const db = require('../config/database');

const query = 'UPDATE tasks SET title = ?, description = ?, due_date = ?, completed = ? WHERE id = ?';
const todo = {
    putAll: (title, description, due_date, completed, id, callback) => {
        const value = [title, description, due_date, completed, id]
        db.query(query, value, callback);
    }
};

module.exports = todo;
