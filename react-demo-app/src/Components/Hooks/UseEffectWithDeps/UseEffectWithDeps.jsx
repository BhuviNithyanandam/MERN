import { useEffect, useState } from 'react';
import './UseEffectWithDeps.css';

const EffectWithDeps = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (name) {
      setMessage(`Welcome, ${name}!`);
    }
    else{
      setMessage('');
    }
  }, [name]); // Only runs when name changes

  return (
    <div className="effect-box">
      <h2>useEffect - With Dependency</h2>
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="highlight-box">
        <p>{message}</p>
        <small>Message updates only when name changes</small>
      </div>
    </div>
  );
};

export default EffectWithDeps;
