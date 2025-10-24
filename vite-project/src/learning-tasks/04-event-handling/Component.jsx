import React, { useState } from 'react';

export default function EventHandlingDemo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lastKey, setLastKey] = useState('None');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top)
    });
  };

  const handleKeyDown = (e) => {
    setLastKey(`${e.key} (Code: ${e.code})`);
  };

  return (
    <div className="module-card">
      <h3>🎯 Topic 04: Event Handling & Synthetic Events</h3>
      <p>React wraps native DOM events with a cross-browser SyntheticEvent.</p>

      <div 
        className={`interactive-pad ${isHovered ? 'pad-active' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        <p>🎮 <strong>Interactive Event Pad</strong> (Move mouse & press keys)</p>
        <div className="pad-metrics">
          <span>Coordinates: X: {mousePos.x}px | Y: {mousePos.y}px</span>
          <span>Last Key Pressed: <code>{lastKey}</code></span>
        </div>
      </div>
    </div>
  );
}