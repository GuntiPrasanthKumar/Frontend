import React, { useState } from 'react';

export default function AxiosInterceptorsDemo() {
  const [logs, setLogs] = useState([]);

  const simulateInterceptedRequest = (hasToken) => {
    const timestamp = new Date().toLocaleTimeString();
    if (hasToken) {
      setLogs(prev => [`[${timestamp}] [Request Interceptor] Attached Bearer eyJhbGciOi...`, ...prev]);
      setLogs(prev => [`[${timestamp}] [Response Interceptor] 200 OK received & payload unwrapped`, ...prev]);
    } else {
      setLogs(prev => [`[${timestamp}] [Request Interceptor] No Token found in storage`, ...prev]);
      setLogs(prev => [`[${timestamp}] [Response Interceptor] 401 Unauthorized -> Triggering refresh token flow`, ...prev]);
    }
  };

  return (
    <div className="module-card">
      <h3>📡 Topic 29: HTTP Client & Interceptor Architecture</h3>
      
      <div className="btn-group">
        <button onClick={() => simulateInterceptedRequest(true)} className="btn-success">
          Execute Authenticated Request
        </button>
        <button onClick={() => simulateInterceptedRequest(false)} className="btn-danger">
          Execute Expired Token Request
        </button>
      </div>

      <div className="action-log mt-2">
        <h5>Interceptor Execution Pipeline:</h5>
        <ul>
          {logs.slice(0, 5).map((l, i) => <li key={i}>{l}</li>)}
        </ul>
      </div>
    </div>
  );
}