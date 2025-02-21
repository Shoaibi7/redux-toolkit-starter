// src/pages/TodoPage.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../features/todo/todoSlice';

function TodoPage() {
  const [input, setInput] = useState(''); // Input field for new todo
  const todos = useSelector((state) => state.todo.todos); // Access todos from Redux state
  const dispatch = useDispatch(); // Dispatch actions

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input)); // Add new todo
      setInput(''); // Clear input field
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Todo List</h1>

      {/* Input field and button */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new todo"
          style={{ padding: '10px', fontSize: '16px', width: '300px' }}
        />
        <button onClick={handleAddTodo} style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px' }}>
          Add Todo
        </button>
      </div>

      {/* List of todos */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '10px 0',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                flexGrow: 1,
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ padding: '5px 10px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoPage;