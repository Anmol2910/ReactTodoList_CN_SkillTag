import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      alert('Todo cannot be blank!');
      return;
    }
    addTodo(newTodo);
    setNewTodo('');
  };

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
