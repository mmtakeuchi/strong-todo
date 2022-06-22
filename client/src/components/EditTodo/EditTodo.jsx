import React, { useContext, useState } from 'react';
import { TodoContext } from '../../todoContext';
import './EditTodo.scss';

const EditTodo = ({ todo, toggleEdit }) => {
  const [input, setInput] = useState(todo.todo);
  const { updateTodo } = useContext(TodoContext);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.length === 0) {
      return;
    }

    updateTodo({ ...todo, todo: input });
    setInput('');
    toggleEdit();
  };

  return (
    <form className="edit-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter todo"
      />
      <button type="submit">update</button>
    </form>
  );
};

export default EditTodo;
