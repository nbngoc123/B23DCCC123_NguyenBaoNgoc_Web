const express = require('express');
const router = express.Router();
// init routers
const getTodo = require('./gettodolist');
const putTodo = require('./puttodolist');
const deleteTodo = require('./deletetodolist');
const postTodo = require('./posttodolist');



// use routers
router.use('/todo', getTodo);
router.use('/todo', putTodo);
router.use('/todo', deleteTodo);
router.use('/todo', postTodo);



module.exports = router;