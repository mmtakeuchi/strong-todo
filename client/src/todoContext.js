import React, { createContext, useEffect, useState } from 'react';
import { fetchTodos, postTodo, deleteTodo } from './utils';

export const TodoContext = createContext({
  todos: [],
  getTodos: () => {},
  addTodo: () => {},
  removeTodo: () => {},
});

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = async (newTodo) => {
    const newTask = { todo: newTodo, completed: false };
    const addedTodo = await postTodo('/api/todos', newTask);

    const newTodos = [...todos, addedTodo];
    setTodos(newTodos);
  };

  const removeTodo = async (todoId) => {
    await deleteTodo(`/api/todos/${todoId}`);
    const remainingTodos = todos.filer((todo) => todo.id !== todoId);
    setTodos(remainingTodos);
  };

  useEffect(() => {
    const getTodos = async () => {
      const todos = await fetchTodos('/api/todos');

      setTodos(todos);
    };
    getTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
