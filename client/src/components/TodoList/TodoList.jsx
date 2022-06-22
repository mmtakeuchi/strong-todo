import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../../todoContext';
import Todo from '../Todo/Todo';
import { getTodos } from '../../utils';
import './TodoList.scss';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <React.Fragment>
      {todos.length ? (
        <ul className="todo-list">
          {todos?.map((todo, i) => (
            <Todo todo={todo} key={i} />
          ))}
        </ul>
      ) : (
        <div className="todo-empty">No tasks</div>
      )}
    </React.Fragment>
  );
};

export default TodoList;
