import React, { useState } from 'react';

export default function ComponentTestingDemo() {
  const [testResults, setTestResults] = useState([
    { suite: 'CounterComponent', test: 'increments count on click', status: 'PASSED' },
    { suite: 'AuthGuard', test: 'redirects guest user to /login', status: 'PASSED' },
    { suite: 'CartContext', test: 'calculates total price accurately', status: 'PASSED' }
  ]);

  return (
    <div className="module-card">
      <h3>🧪 Topic 41: Component Testing & Quality Assurance</h3>
      <p>Vitest & React Testing Library automated test runner simulation.</p>

      <ul className="skill-list">
        {testResults.map((t, i) => (
          <li key={i} className="skill-item">
            <span><strong>{t.suite}</strong>: {t.test}</span>
            <span className="badge-success">✓ {t.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}