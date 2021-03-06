import React, { useContext, useState } from 'react';
import { TodoContext } from '../../todoContext';
import './TodoInput.scss';

const TodoInput = () => {
  const { addTodo } = useContext(TodoContext);
  const [input, setInput] = useState('');

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
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter todo"
      />
      <button type="submit">add todo</button>
    </form>
  );
};

export default TodoInput;
