const express = require('express');
const router = express.Router();

const db = require('../../config/database');

router.delete('/', (req, res) => {
    const { id } = req.query;
    const { title, description, due_date, completed } = req.body;
    const query = 'DELETE FROM tasks WHERE id = ?';
    const values = [id];
    db.query(query, values, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json("delete ok!");
    })
  });

router.get('/method', (req, res) => {
    res.send('bạn đang dùng phương thức delete');
});

module.exports = router;