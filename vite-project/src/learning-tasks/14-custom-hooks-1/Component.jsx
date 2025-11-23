import React, { useState, useEffect } from 'react';

// Custom Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }, [key, value]);

  return [value, setValue];
}

// Custom Hook: useToggle
function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState(prev => !prev);
  return [state, toggle];
}

export default function CustomHooks1Demo() {
  const [savedName, setSavedName] = useLocalStorage('fsd_student_name', 'Student');
  const [showSecret, toggleSecret] = useToggle(false);

  return (
    <div className="module-card">
      <h3>🛠️ Topic 14: Custom Hooks (useLocalStorage & useToggle)</h3>
      <p>Custom hooks allow extracting and reusing component logic across your entire application.</p>

      <div className="demo-box">
        <label>Persistent Username (Stored in LocalStorage):</label>
        <input 
          type="text" 
          value={savedName} 
          onChange={(e) => setSavedName(e.target.value)}
          className="input-field"
        />

        <div className="mt-2">
          <button onClick={toggleSecret} className="btn-secondary">
            {showSecret ? 'Hide Secret Tip' : 'Show Secret Tip'}
          </button>
          {showSecret && (
            <div className="alert-box">
              💡 Pro Tip: Custom hooks always start with the word "use" and can call other hooks!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}