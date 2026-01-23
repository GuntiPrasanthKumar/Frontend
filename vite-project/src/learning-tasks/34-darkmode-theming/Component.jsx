import React, { useState } from 'react';

export default function DarkModeThemingDemo() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="module-card">
      <h3>🌓 Topic 34: System Dark Mode & CSS Custom Properties</h3>
      
      <div className={`theme-demo-surface ${isDark ? 'dark-surface' : 'light-surface'}`}>
        <h4>{isDark ? '🌙 Dark Mode Active' : '☀️ Light Mode Active'}</h4>
        <p>Dynamic token switching using semantic CSS custom properties.</p>
        <button onClick={() => setIsDark(!isDark)} className="btn-primary">
          Switch to {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}