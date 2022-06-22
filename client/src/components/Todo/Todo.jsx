import React from 'react';
import './Todo.scss';

const Todo = ({ todo }) => {
  const handleCheck = (event) => {
    console.log(event.target);
    console.log(todo);
  };

  return (
    <li className="todo">
      <div className="todo-checkbox">
        <input
          type="checkbox"
          id={`todoCheckbox-${todo._id}`}
          name={todo}
          // checked={todo.completed}
          value={todo}
          onChange={handleCheck}
        />
        <label htmlFor={`todoCheckbox-${todo._id}`}>{todo.todo}</label>
      </div>
      <button type="button" className="todo-delete">
        x
      </button>
    </li>
  );
};

export default Todo;
