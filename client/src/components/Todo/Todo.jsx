import React, { useState, useContext } from 'react';
import { TodoContext } from '../../todoContext';
import './Todo.scss';

const Todo = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { updateTodo, removeTodo } = useContext(TodoContext);

  const handleCheck = (event) => {
    console.log(todo);
    updateTodo({ ...todo, completed: !todo.completed });
  };

  const handleDelete = (event) => {
    removeTodo(todo._id);
  };

  const editTodo = (event) => {
    setIsEditing(!isEditing);
    console.log(isEditing);
  };

  return (
    <li className="todo">
      <div className="todo-checkbox">
        <input
          type="checkbox"
          id={`todoCheckbox-${todo._id}`}
          name={todo.todo}
          checked={todo.completed}
          value={todo.todo}
          onChange={handleCheck}
        />
        <label
          htmlFor={`todoCheckbox-${todo._id}`}
          className={todo.completed ? 'todo-completed' : ''}
        >
          {todo.todo}
        </label>
      </div>
      <div className="todo-buttons">
        <button type="button" className="todo-edit" onClick={editTodo}>
          Edit
        </button>
        <button type="button" className="todo-delete" onClick={handleDelete}>
          x
        </button>
      </div>
    </li>
  );
};

export default Todo;
