// TodoItem.js
import React from 'react';

// JSX for rendering a single todo item
const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        style={{ cursor: 'pointer' }}
        onChange={() => updateTodo(todo.id, !todo.completed)}
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
