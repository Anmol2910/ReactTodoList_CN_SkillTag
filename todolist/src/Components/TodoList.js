// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

  // JSX for rendering the list of todos
const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
