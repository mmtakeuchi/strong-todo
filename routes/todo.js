const { Router } = require('express');
const router = Router();
const todoController = require('../controller/todoController');

router.get('/todos', todoController.getTodos);
router.post('/todos', todoController.addTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
