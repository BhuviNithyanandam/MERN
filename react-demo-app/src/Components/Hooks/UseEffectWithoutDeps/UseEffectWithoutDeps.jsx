import { useEffect, useState } from 'react';
import './UseEffectWithoutDeps.css';

const EffectWithoutDeps = () => {
  const [count, setCount] = useState(0);
  const [effectRuns, setEffectRuns] = useState(0);

  useEffect(() => {
    setEffectRuns((prev) => prev + 1); //This runs infinitely, to avoid give empty dependency array [] this will run only on mount.
  });

  return (
    <div className="effect-box">
      <h2>useEffect - No Dependencies</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <div className="highlight-box">
        <p>useEffect ran <strong>{effectRuns}</strong> times</p>
        <small>(Every render triggers useEffect)</small>
      </div>
    </div>
  );
};

export default EffectWithoutDeps;
