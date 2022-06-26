import React, { useCallback, useContext } from 'react';
import { TodoContext } from '../../todoContext';
import Todo from '../Todo/Todo';
import './TodoList.scss';

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  console.log(todos);

  const moveTask = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = todos[dragIndex];
      const hoverItem = todos[hoverIndex];
      // Swap places of dragItem and hoverItem in the todos array
      setTodos((todos) => {
        const updatedTodos = [...todos];
        updatedTodos[dragIndex] = hoverItem;
        updatedTodos[hoverIndex] = dragItem;
        return updatedTodos;
      });
    },
    [setTodos, todos]
  );

  return (
    <div className="list-container">
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos?.map((todo, i) => (
            <Todo todo={todo} index={i} key={todo._id} moveTask={moveTask} />
          ))}
        </ul>
      ) : (
        <div className="todo-empty">No tasks</div>
      )}
    </div>
  );
};

export default TodoList;
