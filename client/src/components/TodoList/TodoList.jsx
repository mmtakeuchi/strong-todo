import React, { useContext } from 'react';
import { TodoContext } from '../../todoContext';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {todos.length
        ? todos?.map((todo, i) => <Todo todo={todo} key={i} />)
        : 'No todos'}
    </div>
  );
};

export default TodoList;
