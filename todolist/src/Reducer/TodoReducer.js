// TodoReducer.js
const todoReducer = (state, action) => {
    // Reducer function to manage state changes for todos
    switch (action.type) {
      case 'FETCH_TODOS':
        return { ...state, todos: action.payload };
      case 'ADD_TODO':
        return { ...state, todos: [action.payload, ...state.todos] };
      case 'UPDATE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo
          ),
        };
      case 'DELETE_TODO':
        return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  