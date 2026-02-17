import React from 'react';

export default function PerformanceAuditDemo() {
  const metrics = [
    { label: 'Performance', score: '99/100', color: '#0ba360' },
    { label: 'Accessibility', score: '100/100', color: '#0ba360' },
    { label: 'Best Practices', score: '100/100', color: '#0ba360' },
    { label: 'SEO', score: '100/100', color: '#0ba360' }
  ];

  return (
    <div className="module-card">
      <h3>🚀 Topic 42: Performance Profiling & Lighthouse Audits</h3>
      <div className="stats-row">
        {metrics.map(m => (
          <div key={m.label} className="stat-card" style={{ borderColor: m.color }}>
            <h3 style={{ color: m.color }}>{m.score}</h3>
            <p>{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}