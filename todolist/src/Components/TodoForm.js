// TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  // State to manage the input value for a new todo
  const [newTodo, setNewTodo] = useState('');

   // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      alert('Todo cannot be blank!');
      return;
    }
     // Call the addTodo function passed as a prop with the new todo
    addTodo(newTodo);
    // Clear the input after adding a todo
    setNewTodo('');
  };

    // JSX for rendering the todo form
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New Todo"
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo();
          }
        }}
      />
      <button style={{ marginLeft: '10px' }} onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
