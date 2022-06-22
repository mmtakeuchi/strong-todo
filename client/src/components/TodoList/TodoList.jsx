import React, { useContext } from 'react';
import { TodoContext } from '../../todoContext';
import Todo from '../Todo/Todo';
import './TodoList.scss';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  todos.sort((a, b) => b.completed - a.completed);

  return (
    <div className="list-container">
      {todos.length ? (
        <ul className="todo-list">
          {todos?.map((todo, i) => (
            <Todo todo={todo} key={i} />
          ))}
        </ul>
      ) : (
        <div className="todo-empty">No tasks</div>
      )}
    </div>
  );
};

export default TodoList;
