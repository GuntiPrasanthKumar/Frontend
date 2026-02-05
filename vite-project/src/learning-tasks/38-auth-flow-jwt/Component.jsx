import React, { useState } from 'react';

export default function AuthFlowDemo() {
  const [session, setSession] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSession({
      token: 'jwt_mock_header.payload.signature_xyz',
      email: email || 'user@example.com',
      loginTime: new Date().toLocaleTimeString()
    });
  };

  return (
    <div className="module-card">
      <h3>🔐 Topic 38: Authentication & Session Token Lifecycle</h3>
      
      {session ? (
        <div className="detail-box">
          <h4>✅ Authenticated Session Active</h4>
          <p><strong>User:</strong> {session.email}</p>
          <p><strong>JWT Token:</strong> <code>{session.token}</code></p>
          <p><strong>Signed in at:</strong> {session.loginTime}</p>
          <button onClick={() => setSession(null)} className="btn-danger mt-2">Sign Out</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-layout">
          <h4>{authMode === 'login' ? 'Sign In to Account' : 'Register New Account'}</h4>
          <input 
            type="email" 
            placeholder="Enter your email..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" className="btn-primary">
            {authMode === 'login' ? 'Login with JWT' : 'Create Account'}
          </button>
        </form>
      )}
    </div>
  );
}