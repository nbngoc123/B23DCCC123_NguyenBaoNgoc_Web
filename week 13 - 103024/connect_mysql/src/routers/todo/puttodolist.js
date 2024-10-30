const express = require('express');
const router = express.Router();

const db = require('../../config/database');

router.put('/', (req, res) => {
    const { id } = req.query;
    const { title, description, due_date, completed } = req.body;
    const query = 'UPDATE tasks SET title = ?, description = ?, due_date = ?, completed = ? WHERE id = ?';
    const values = [title, description, due_date, completed, id];
    db.query(query, values, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ message: " add ok!"});
    })
  });

router.get('/method', (req, res) => {
    res.send('bạn đang dùng phương thức put');
});

module.exports = router;