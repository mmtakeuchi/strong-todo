import React, { useContext } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TodoContext } from './todoContext';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import TodosCompleted from './components/TodosCompleted/TodosCompleted';
import './App.css';

const App = () => {
  const { addTodo } = useContext(TodoContext);

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <h1>Todo</h1>
        <TodoInput label="add todo" onSubmit={addTodo} />
        <TodoList />
        <TodosCompleted />
      </DndProvider>
    </div>
  );
};

export default App;
