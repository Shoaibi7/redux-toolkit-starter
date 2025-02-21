// src/features/todo/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  todos: [], // Array of todo items
};

// Create a slice
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export actions
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;