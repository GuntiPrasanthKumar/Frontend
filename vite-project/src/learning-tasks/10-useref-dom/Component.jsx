import React, { useRef, useState } from 'react';

export default function UseRefDemo() {
  const inputRef = useRef(null);
  const renderCount = useRef(1);
  const [text, setText] = useState('');

  renderCount.current += 1;

  const focusInput = () => {
    inputRef.current?.focus();
    inputRef.current?.select();
  };

  return (
    <div className="module-card">
      <h3>🔍 Topic 10: DOM Access & Persistent Values (useRef)</h3>
      <p>useRef returns a mutable ref object whose .current property persists across re-renders without causing a re-render.</p>

      <div className="demo-box">
        <div className="input-group">
          <input 
            ref={inputRef}
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something here..."
            className="input-field"
          />
          <button onClick={focusInput} className="btn-primary">Focus & Select Input</button>
        </div>

        <div className="metrics-box">
          <p>Component Render Count: <strong>{renderCount.current}</strong></p>
          <small>Notice that changing `useRef.current` does NOT trigger a re-render!</small>
        </div>
      </div>
    </div>
  );
}