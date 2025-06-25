import { useState } from 'react';
import './UseStateDemo.css';

const UseStateDemo = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="state-wrapper">
      <h2>useState Demo</h2>
      <p>Current Count: <strong>{count}</strong></p>

      <div className="button-group">
        <button onClick={handleIncrement}>➕ Increment</button>
        <button onClick={handleDecrement}>➖ Decrement</button>
      </div>
    </div>
  );
};

export default UseStateDemo;
