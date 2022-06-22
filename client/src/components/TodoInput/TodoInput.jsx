import React, { useState, useContext } from 'react';
import { TodoContext } from '../../todoContext';
import './TodoInput.scss';

const TodoInput = ({ label }) => {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.length === 0) {
      return;
    }
    addTodo(input);
    setInput('');
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter todo"
      />
      <button type="submit" onClick={handleSubmit}>
        {label}
      </button>
    </form>
  );
};

export default TodoInput;
