import React, { useState } from 'react';

export default function JSXBasics() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [unreadCount, setUnreadCount] = useState(3);
  const user = { name: 'Alex Johnson', role: 'Frontend Developer', level: 'Intermediate' };

  return (
    <div className="module-card">
      <h3>🚀 Topic 01: JSX Syntax & Conditional Rendering</h3>
      <p>JSX lets you write HTML-like markup inside JavaScript files.</p>
      
      <div className="demo-box">
        <h4>User Profile Card</h4>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Role:</strong> {user.role} ({user.level})</p>
        <p>
          <strong>Status:</strong>{' '}
          <span className={isLoggedIn ? 'badge-success' : 'badge-danger'}>
            {isLoggedIn ? '🟢 Online' : '🔴 Offline'}
          </span>
        </p>
        
        {isLoggedIn && (
          <div className="alert-box">
            📬 You have {unreadCount > 0 ? `${unreadCount} unread messages` : 'no new messages'}.
          </div>
        )}

        <div className="btn-group">
          <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="btn-primary">
            Toggle Status ({isLoggedIn ? 'Log Out' : 'Log In'})
          </button>
          <button onClick={() => setUnreadCount(prev => prev + 1)} className="btn-secondary">
            Simulate New Message (+1)
          </button>
          <button onClick={() => setUnreadCount(0)} className="btn-outline">
            Mark All Read
          </button>
        </div>
      </div>
    </div>
  );
}