import React, { useState } from 'react';

function BuggyComponent({ shouldCrash }) {
  if (shouldCrash) {
    throw new Error('Simulated runtime exception inside BuggyComponent!');
  }
  return <div className="sub-card">🟢 Component operating normally without errors.</div>;
}

export default function ErrorBoundaryDemo() {
  const [hasError, setHasError] = useState(false);
  const [triggerBug, setTriggerBug] = useState(false);

  const resetErrorBoundary = () => {
    setHasError(false);
    setTriggerBug(false);
  };

  return (
    <div className="module-card">
      <h3>💥 Topic 23: Error Boundaries & Graceful Fallbacks</h3>
      <p>Prevent an entire app crash by catching render errors in subtrees.</p>

      <div className="btn-group">
        <button onClick={() => { setTriggerBug(true); setHasError(true); }} className="btn-danger">
          Trigger Component Error
        </button>
        <button onClick={resetErrorBoundary} className="btn-outline">
          Reset Error State
        </button>
      </div>

      {hasError ? (
        <div className="error-box mt-2">
          <h4>⚠️ Error Caught by Boundary!</h4>
          <p>Something went wrong in the component tree. The rest of the app continues working.</p>
        </div>
      ) : (
        <div className="mt-2">
          <BuggyComponent shouldCrash={triggerBug} />
        </div>
      )}
    </div>
  );
}