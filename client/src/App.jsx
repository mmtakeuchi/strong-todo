import React, { useContext } from 'react';
import { TodoContext } from './todoContext';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import TodosCompleted from './components/TodosCompleted/TodosCompleted';
import './App.css';

const App = () => {
  const { addTodo } = useContext(TodoContext);

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoInput label="add todo" onSubmit={addTodo} />
      <TodoList />
      <TodosCompleted />
    </div>
  );
};

export default App;
