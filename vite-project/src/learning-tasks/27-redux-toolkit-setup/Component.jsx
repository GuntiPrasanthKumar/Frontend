import React, { useState } from 'react';

// Simulated Redux Store state and actions
export default function ReduxToolkitDemo() {
  const [storeState, setStoreState] = useState({
    user: { name: 'Prashanth', role: 'Full Stack Architect' },
    notifications: 4,
    theme: 'dark'
  });

  const dispatch = (action) => {
    switch (action.type) {
      case 'notifications/increment':
        setStoreState(s => ({ ...s, notifications: s.notifications + 1 }));
        break;
      case 'notifications/clear':
        setStoreState(s => ({ ...s, notifications: 0 }));
        break;
      case 'theme/toggle':
        setStoreState(s => ({ ...s, theme: s.theme === 'dark' ? 'light' : 'dark' }));
        break;
    }
  };

  return (
    <div className="module-card">
      <h3>⚛️ Topic 27: Redux Toolkit (Store & Slices)</h3>
      <p>Predictable centralized state container pattern with slice reducers.</p>

      <div className="demo-box">
        <div className="state-viewer">
          <h4>Global Redux State Snapshot:</h4>
          <pre>{JSON.stringify(storeState, null, 2)}</pre>
        </div>

        <div className="btn-group">
          <button onClick={() => dispatch({ type: 'notifications/increment' })} className="btn-secondary">
            Dispatch notifications/increment (+1)
          </button>
          <button onClick={() => dispatch({ type: 'notifications/clear' })} className="btn-outline">
            Dispatch notifications/clear
          </button>
          <button onClick={() => dispatch({ type: 'theme/toggle' })} className="btn-primary">
            Dispatch theme/toggle
          </button>
        </div>
      </div>
    </div>
  );
}