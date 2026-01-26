import React from 'react';

const WEEKLY_HOURS = [
  { day: 'Mon', hours: 4.5 },
  { day: 'Tue', hours: 6.0 },
  { day: 'Wed', hours: 5.5 },
  { day: 'Thu', hours: 8.0 },
  { day: 'Fri', hours: 7.0 },
  { day: 'Sat', hours: 3.5 },
  { day: 'Sun', hours: 2.0 }
];

export default function DataChartsDemo() {
  const maxHours = Math.max(...WEEKLY_HOURS.map(w => w.hours));

  return (
    <div className="module-card">
      <h3>📊 Topic 35: Interactive Data & SVG Charts</h3>
      <p>Coding study hours breakdown across this week.</p>

      <div className="chart-bar-container">
        {WEEKLY_HOURS.map(item => (
          <div key={item.day} className="chart-col">
            <div 
              className="chart-bar" 
              style={{ height: `${(item.hours / maxHours) * 120}px` }}
              title={`${item.hours} hours on ${item.day}`}
            >
              <span className="bar-val">{item.hours}h</span>
            </div>
            <span className="chart-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}