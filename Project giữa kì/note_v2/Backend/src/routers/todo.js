const express = require('express');
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get('/', todoController.getAllTodo);
router.post('/', todoController.postAllTodo);
router.put('/', todoController.putAllTodo);
router.delete('/', todoController.deleteAllTodo);



module.exports = router;
