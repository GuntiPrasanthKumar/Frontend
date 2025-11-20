import React, { useState } from 'react';

// Memoized pure child
const ExpensiveChild = React.memo(({ label, count }) => {
  return (
    <div className="sub-card">
      <h4>{label}</h4>
      <p>Rendered Counter Prop: <strong>{count}</strong></p>
      <small>🌱 Pure component: Only re-renders when `count` or `label` changes!</small>
    </div>
  );
});

export default function ReactMemoDemo() {
  const [childCount, setChildCount] = useState(0);
  const [parentCount, setParentCount] = useState(0);

  return (
    <div className="module-card">
      <h3>🛡️ Topic 13: Pure Components with React.memo</h3>
      
      <div className="btn-group">
        <button onClick={() => setParentCount(p => p + 1)} className="btn-primary">
          Update Parent Only ({parentCount})
        </button>
        <button onClick={() => setChildCount(c => c + 1)} className="btn-success">
          Update Child Prop ({childCount})
        </button>
      </div>

      <ExpensiveChild label="Memoized Child Component" count={childCount} />
    </div>
  );
}