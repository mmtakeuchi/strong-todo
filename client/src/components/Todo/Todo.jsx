import React, { useState, useContext } from 'react';
import EditTodo from '../EditTodo/EditTodo';
import { TodoContext } from '../../todoContext';
import './Todo.scss';

const Todo = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { updateTodo, removeTodo } = useContext(TodoContext);

  const handleCheck = (event) => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  const handleDelete = (event) => {
    removeTodo(todo._id);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const editTodo = (event, input) => {
    setIsEditing(!isEditing);
    updateTodo(input);
  };

  return (
    <li className="todo">
      {isEditing === false ? (
        <React.Fragment>
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
              {todo.todo.charAt(0).toUpperCase() + todo.todo.slice(1)}
            </label>
          </div>
          <div className="todo-buttons">
            <button type="button" className="todo-edit" onClick={toggleEdit}>
              Edit
            </button>
            <button
              type="button"
              className="todo-delete"
              onClick={handleDelete}
            >
              x
            </button>
          </div>
        </React.Fragment>
      ) : (
        <EditTodo label="update" todo={todo} toggleEdit={toggleEdit} />
      )}
    </li>
  );
};

export default Todo;
