import React, { createContext, useEffect, useState } from 'react';
import { getTodos, postTodo, putTodo, deleteTodo } from './utils';

export const TodoContext = createContext({
  todos: [],
  update: false,
  getTodos: () => {},
  addTodo: () => {},
  removeTodo: () => {},
});

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(false);

  const addTodo = async (newTodo) => {
    const newTask = { todo: newTodo, completed: false };
    const addedTodo = await postTodo(newTask);

    const newTodos = [...todos, addedTodo];
    setUpdate(!update);
    setTodos(newTodos);
  };

  const updateTodo = async (editedTodo) => {
    const updatedTodo = await putTodo(`${editedTodo._id}`, editedTodo);
    const updatedTodoList = [
      ...todos.filter((task) => task._id !== editedTodo._id),
      updatedTodo,
    ];
    setUpdate(!update);
    setTodos(updatedTodoList);
  };

  const removeTodo = async (todoId) => {
    await deleteTodo(`${todoId}`);

    const remainingTodos = todos.filter((todo) => todo._id !== todoId);
    setTodos(remainingTodos);
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();

      setTodos(todos);
    };

    fetchTodos();
  }, [update]);

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, addTodo, updateTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
