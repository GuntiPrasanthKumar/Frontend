import React, { useState, useMemo, useCallback } from 'react';

// Slow factorial computation simulation
function computeFactorial(n) {
  if (n <= 0) return 1;
  let res = 1;
  for (let i = 1; i <= n; i++) res *= i;
  return res;
}

export default function PerformanceHooksDemo() {
  const [number, setNumber] = useState(5);
  const [themeDark, setThemeDark] = useState(false);

  // useMemo caches expensive computation
  const factorial = useMemo(() => {
    return computeFactorial(number);
  }, [number]);

  // useCallback prevents re-instantiating function on every parent render
  const logDetails = useCallback(() => {
    console.log(`Calculated factorial for: ${number}`);
  }, [number]);

  return (
    <div className={`module-card ${themeDark ? 'dark-mode' : ''}`}>
      <h3>⚡ Topic 12: useMemo & useCallback Optimization</h3>
      <p>Avoid expensive recalculations and unnecessary component renders.</p>

      <div className="demo-box">
        <label>Factorial input (1-20): </label>
        <input 
          type="number" 
          value={number} 
          min="1" 
          max="20"
          onChange={(e) => setNumber(Math.min(20, Math.max(1, Number(e.target.value))))}
          className="input-field-sm"
        />

        <p className="highlight-text">
          {number}! = <strong>{factorial.toLocaleString()}</strong>
        </p>

        <div className="btn-group">
          <button onClick={() => setThemeDark(!themeDark)} className="btn-secondary">
            Toggle Theme (Does NOT recalculate factorial)
          </button>
          <button onClick={logDetails} className="btn-outline">
            Call Memoized Callback
          </button>
        </div>
      </div>
    </div>
  );
}