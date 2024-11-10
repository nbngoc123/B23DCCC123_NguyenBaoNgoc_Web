const db = require('../config/database');

const query = 'DELETE FROM notes WHERE id = ?';
const todo = {
    deleteAll: (id, callback) => {
        db.query(query, [id], callback);
    }
};

module.exports = todo;
