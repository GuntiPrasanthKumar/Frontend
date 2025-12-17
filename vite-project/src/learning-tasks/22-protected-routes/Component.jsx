import React, { useState } from 'react';

export default function ProtectedRoutesDemo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [attemptedSecret, setAttemptedSecret] = useState(false);

  return (
    <div className="module-card">
      <h3>🛡️ Topic 22: Protected Routes & Auth Guards</h3>
      
      <div className="demo-box">
        <div className="auth-status-bar">
          <span>Auth Status: <strong>{isAuthenticated ? 'Authenticated ✅' : 'Guest (Locked) 🔒'}</strong></span>
          <button onClick={() => setIsAuthenticated(!isAuthenticated)} className="btn-primary">
            {isAuthenticated ? 'Simulate Logout' : 'Simulate Login'}
          </button>
        </div>

        <button onClick={() => setAttemptedSecret(true)} className="btn-secondary mt-2">
          Access /admin/vip-dashboard
        </button>

        {attemptedSecret && (
          <div className="mt-2">
            {isAuthenticated ? (
              <div className="success-banner">
                🎉 Welcome to the Secret VIP Admin Dashboard! (Access Granted)
              </div>
            ) : (
              <div className="error-box">
                🚫 403 Access Denied: Redirecting to /login?from=/admin/vip-dashboard...
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}