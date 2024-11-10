const db = require('../config/database');

const query = 'UPDATE notes SET title = ?, content = ?, due_date = ?, created_at = ?, rate_prosess = ?, status = ? WHERE id = ?';
const todo = {
    putAll: (title, content, due_date, created_at, rate_prosess, status, id, callback) => {
        const value = [title, content, due_date, created_at, rate_prosess, status, id]
        db.query(query, value, callback);
    }
};

module.exports = todo;

