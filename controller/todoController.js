const Todo = require('../model/Todo');

// GET TODO
module.exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ date: -1 });

    if (!todos) {
      res.send('Error getting todos.');
    }

    res.send(todos);
  } catch (error) {
    console.log(error);
    res.send('Error getting todos.');
  }
};

// POST TODO
module.exports.addTodo = async (req, res) => {
  try {
    const data = req.body;
    const newTodo = new Todo(data);

    await newTodo.save();
    res.send(newTodo);
  } catch (error) {
    console.log(error);
    res.send('Error adding new todo.');
  }
};

// DELETE TODO
module.exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodoId = req.params.id;
    await Todo.findByIdAndDelete(deletedTodoId).then((todo) =>
      res.send('Successfully deleted todo')
    );
  } catch (error) {
    console.log(error);
    res.send('Error deleting todo.');
  }
};
