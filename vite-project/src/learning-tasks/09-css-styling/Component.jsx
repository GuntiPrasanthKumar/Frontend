import React, { useState } from 'react';

export default function ComponentStylingDemo() {
  const [activeTheme, setActiveTheme] = useState('ocean');

  const themes = {
    ocean: { bg: 'linear-gradient(135deg, #1e3c72, #2a5298)', accent: '#00d2ff' },
    sunset: { bg: 'linear-gradient(135deg, #f12711, #f5af19)', accent: '#ffe259' },
    emerald: { bg: 'linear-gradient(135deg, #0ba360, #3cba92)', accent: '#a8ff78' }
  };

  return (
    <div className="module-card">
      <h3>🎨 Topic 09: Modern Component Styling & Themes</h3>
      <p>Dynamic CSS variables, glassmorphic surfaces, and curated color palettes.</p>

      <div className="theme-selector">
        {Object.keys(themes).map(t => (
          <button 
            key={t}
            onClick={() => setActiveTheme(t)}
            className={`btn-pill ${activeTheme === t ? 'active' : ''}`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div 
        className="glass-card-preview"
        style={{
          background: themes[activeTheme].bg,
          boxShadow: `0 10px 30px ${themes[activeTheme].accent}33`
        }}
      >
        <div className="glass-inner">
          <h4>Glassmorphism & Dynamic Token Demo</h4>
          <p>This container updates live with custom gradient tokens and dynamic backdrop filters.</p>
          <span className="accent-tag" style={{ color: themes[activeTheme].accent }}>
            Active Theme: {activeTheme}
          </span>
        </div>
      </div>
    </div>
  );
}