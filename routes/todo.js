const { Router } = require('express');
const router = Router();
const todoController = require('../controller/todoController');

router.get('/', todoController.getTodos);
router.post('/', todoController.addTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
