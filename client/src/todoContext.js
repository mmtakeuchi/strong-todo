import React, { createContext, useState } from 'react';
import { fetchTodos, postTodo, deleteTodo } from './utils';

export const TodoContext = createContext({
  todos: [],
  getTodos: () => {},
  addTodo: () => {},
  removeTodo: () => {},
});

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState({});

  const getTodos = async () => {
    const todos = await fetchTodos('/api/todos');
    setTodos(todos);
  };

  const addTodo = async (newTodo) => {
    const addedTodo = await postTodo('/api/todos', newTodo);
    const newTodos = [...todos, addedTodo];
    setTodos(newTodos);
  };

  const removeTodo = async (todoId) => {
    const deletedTodo = await deleteTodo(`/api/todos/${todoId}`);
    const remainingTodos = todos.filer((todo) => todo.id !== todoId);
    setTodos(remainingTodos);
  };

  return (
    <TodoContext.Provider value={(todos, setTodos, addTodo, removeTodo)}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
