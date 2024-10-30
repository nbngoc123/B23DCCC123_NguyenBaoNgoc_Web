const express = require('express');
const router = express.Router();

const db = require('../../config/database');

router.get('/', (req, res) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(results);
    })
  });

router.get('/method', (req, res) => {
    res.send('bạn đang dùng phương thức get');
});

module.exports = router;
