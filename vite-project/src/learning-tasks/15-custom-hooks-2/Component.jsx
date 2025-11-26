import React, { useState, useEffect } from 'react';

// Custom Hook: useDebounce
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

export default function CustomHooks2Demo() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 600);

  return (
    <div className="module-card">
      <h3>🧪 Topic 15: Advanced Custom Hooks (useDebounce)</h3>
      <p>Debounce rapidly changing state to limit API calls and heavy operations.</p>

      <div className="demo-box">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type fast to see debouncing in action..."
          className="input-field"
        />

        <div className="metrics-box">
          <p>Instant State: <code>{searchTerm || '(empty)'}</code></p>
          <p>Debounced State (600ms): <strong>{debouncedSearch || '(waiting...)'}</strong></p>
        </div>
      </div>
    </div>
  );
}