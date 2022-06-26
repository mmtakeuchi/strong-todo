const Todo = require('../model/Todo');

// GET TODO
module.exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});

    if (!todos) {
      res.send('Error getting todos.');
    }

    res.json(todos);
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
    res.json(newTodo);
  } catch (error) {
    console.log(error);
    res.send('Error adding new todo.');
  }
};

// UPDATE TODO
module.exports.updateTodo = async (req, res) => {
  try {
    const updatedTodoId = req.params.id;
    const updatedData = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      { _id: updatedTodoId },
      updatedData
    );

    res.json(updatedTodo);
  } catch (error) {
    console.log(error);
    res.send('Error deleting todo.');
  }
};

// DELETE TODO
module.exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodoId = req.params.id;

    await Todo.findByIdAndDelete(deletedTodoId);
    res.send('Successfully deleted todo');
  } catch (error) {
    console.log(error);
    res.send('Error deleting todo.');
  }
};
