import React, { useState, useContext } from 'react';
import { TodoContext } from '../../todoContext';
import './TodoInput.scss';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <form className="todo__form">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter todo"
        required
      />
      <button type="submit" onClick={handleSubmit}>
        ADD NEW TODO
      </button>
    </form>
  );
};

export default TodoInput;
