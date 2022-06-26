import React, { useContext } from 'react';
import { TodoContext } from '../../todoContext';
import './TodosCompleted.scss';

const TodosCompleted = () => {
  const { todos } = useContext(TodoContext);

  const isCompleted = todos?.filter((todo) => todo.completed).length;

  return <div className="todos-completed">Completed: {isCompleted ?? 0}</div>;
};

export default TodosCompleted;
