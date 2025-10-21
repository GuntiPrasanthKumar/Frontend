import React, { useState } from 'react';

export default function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  const handleUpdate = (delta) => {
    const nextVal = count + delta * step;
    setCount(nextVal);
    setHistory(prev => [nextVal, ...prev].slice(0, 5));
  };

  const handleReset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <div className="module-card">
      <h3>⚡ Topic 03: State with useState Hook</h3>
      <p>State allows React components to remember information and re-render on updates.</p>

      <div className="demo-box">
        <div className="counter-display">
          <span className="count-number">{count}</span>
          <span className="count-label">Current Value</span>
        </div>

        <div className="step-control">
          <label>Step Size: </label>
          <input 
            type="number" 
            value={step} 
            onChange={(e) => setStep(Math.max(1, Number(e.target.value)))}
            min="1"
            className="input-field-sm"
          />
        </div>

        <div className="btn-group">
          <button onClick={() => handleUpdate(-1)} className="btn-danger">- Decrement</button>
          <button onClick={() => handleUpdate(1)} className="btn-success">+ Increment</button>
          <button onClick={handleReset} className="btn-outline">Reset</button>
        </div>

        {history.length > 0 && (
          <div className="history-box">
            <small>Recent values: {history.join(' → ')}</small>
          </div>
        )}
      </div>
    </div>
  );
}