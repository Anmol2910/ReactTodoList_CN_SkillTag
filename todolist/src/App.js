// App.js
// Importing files, Hooks & Axios
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList';
import todoReducer from './Reducer/TodoReducer';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

//  Setting Initail State
const initialState = {
  todos: [],
};

// Use reducer to manage state changes
const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

   // Fetch todos from the API on component mount
  useEffect(() => {
    axios.get(API_URL)
      .then(response => dispatch({ type: 'FETCH_TODOS', payload: response.data }))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    axios.post(API_URL, { userId: 1, title: newTodo, completed: newTodo.completed })
      .then(response => dispatch({ type: 'ADD_TODO', payload: response.data }))
      .catch(error => console.error('Error adding todo:', error));
  };

 // Function to update a todo
  const updateTodo = (id, completed) => {
    axios.put(`${API_URL}/${id}`, { completed })
      .then(() => dispatch({ type: 'UPDATE_TODO', payload: { id, completed } }))
      .catch(error => console.error('Error updating todo:', error));
  };

// Function to delete a todo
  const deleteTodo = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => dispatch({ type: 'DELETE_TODO', payload: id }))
      .catch(error => console.error('Error deleting todo:', error));
  };

   // JSX for rendering the main application
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={state.todos} 
      updateTodo={updateTodo} 
      deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
