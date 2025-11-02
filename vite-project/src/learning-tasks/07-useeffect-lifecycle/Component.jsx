import React, { useState, useEffect } from 'react';

export default function UseEffectDemo() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Timer effect with cleanup
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  // Window resize effect with listener cleanup
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="module-card">
      <h3>⏱️ Topic 07: Side Effects & Cleanups (useEffect)</h3>
      <p>Run code after rendering, manage timers, event listeners, and perform resource cleanups.</p>

      <div className="demo-box">
        <div className="timer-box">
          <h2>⏱️ {seconds}s</h2>
          <div className="btn-group">
            <button onClick={() => setIsActive(!isActive)} className="btn-primary">
              {isActive ? 'Pause Timer' : 'Start Timer'}
            </button>
            <button onClick={() => { setSeconds(0); setIsActive(false); }} className="btn-outline">
              Reset
            </button>
          </div>
        </div>

        <div className="info-badge">
          📐 Realtime Window Width: <strong>{windowWidth}px</strong>
        </div>
      </div>
    </div>
  );
}