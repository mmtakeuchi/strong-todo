import React, { useState, useContext, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import EditTodo from '../EditTodo/EditTodo';
import { TodoContext } from '../../todoContext';
import './Todo.scss';

const Todo = ({ todo, moveTask, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { updateTodo, removeTodo } = useContext(TodoContext);

  // useDrag - the list item is draggable
  const [{ isDragging }, dragRef] = useDrag({
    type: 'task',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // useDrop - the list item is also a drop area
  const [spec, dropRef] = useDrop({
    accept: 'task',
    hover: (task, monitor) => {
      const dragIndex = task.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveTask(dragIndex, hoverIndex);
      task.index = hoverIndex;
    },
  });

  // Join the 2 refs together into one (both draggable and can be dropped on)
  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  const handleCheck = (event) => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  const handleDelete = (event) => {
    removeTodo(todo._id);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li
      className="todo"
      ref={dragDropRef}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
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
              ref={dragRef}
            >
              {todo.todo.charAt(0).toUpperCase() + todo.todo.slice(1)}
            </label>
          </div>
          <div className="todo-buttons">
            <button
              type="button"
              className="todo-edit"
              onClick={toggleEdit}
              disabled={todo.completed}
            >
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
