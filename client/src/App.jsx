import React from 'react';
import { TodoContextProvider } from './todoContext';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoInput label="ADD NEW TODO" />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
};

export default App;
