import React, { useState } from 'react';

const FRAMEWORKS = ['React.js', 'Next.js', 'Redux Toolkit', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS', 'Vite', 'GraphQL', 'MongoDB', 'PostgreSQL'];

export default function LiveSearchDemo() {
  const [query, setQuery] = useState('');

  const matches = query.trim() === '' ? [] : FRAMEWORKS.filter(f => f.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="module-card">
      <h3>🔍 Topic 31: Real-time Live Search & Autocomplete</h3>
      
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search full stack frameworks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input-field"
        />

        {matches.length > 0 && (
          <div className="autocomplete-dropdown">
            {matches.map(m => (
              <div key={m} className="dropdown-item" onClick={() => setQuery(m)}>
                🎯 {m}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}