// src/pages/CounterPage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

function CounterPage() {
  const count = useSelector((state) => state.counter.value); // Access state
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter Page</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())} style={{ margin: '10px' }}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} style={{ margin: '10px' }}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(5))} style={{ margin: '10px' }}>
        Increment by 5
      </button>
    </div>
  );
}

export default CounterPage;