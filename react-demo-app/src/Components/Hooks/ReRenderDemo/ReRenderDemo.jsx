import { useState } from 'react';
import './ReRenderDemo.css';

const ReRenderDemo = () => {
  let localCount = 0; // regular variable
  const [stateCount, setStateCount] = useState(0); // state variable

  const handleLocalClick = () => {
    localCount += 1;
    console.log('Local Count (won’t re-render):', localCount);
    alert(`Local count is now: ${localCount}`);
  };

  const handleStateClick = () => {
    setStateCount(stateCount + 1); // triggers re-render
  };

  return (
    <div className="re-render-wrapper">
      <h2>Re-render Demo: Local vs State</h2>

      <div className="section">
        <h4>Local Variable</h4>
        <button onClick={handleLocalClick}>Increment Local Count</button>
        <p>This value won't update in UI! local Count is {localCount} </p>
      </div>

      <hr />

      <div className="section">
        <h4>useState Variable</h4>
        <button onClick={handleStateClick}>Increment State Count</button>
        <p>Count in UI: <strong>{stateCount}</strong></p>
      </div>
    </div>
  );
};

export default ReRenderDemo;
