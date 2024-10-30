const express = require('express');
const router = express.Router();

const db = require('../../config/database');

router.post('/', (req, res) => {
    const query = 'INSERT INTO tasks (title, description, due_date) VALUE (?, ?, ?)';
    const { title, description, due_date } = req.body;

    db.query(query, [title, description, due_date], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({id: results.insertId, title, description, due_date, completed: 0});
    })
  });

router.post('/method', (req, res) => {
    res.send('bạn đang dùng phương thức post');
});

module.exports = router;
