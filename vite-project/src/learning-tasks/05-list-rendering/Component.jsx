import React, { useState } from 'react';

const INITIAL_SKILLS = [
  { id: 1, name: 'HTML5 / CSS3', category: 'Foundation', level: '95%' },
  { id: 2, name: 'Modern JavaScript (ES6+)', category: 'Core', level: '90%' },
  { id: 3, name: 'React.js & Hooks', category: 'Core', level: '85%' },
  { id: 4, name: 'TypeScript', category: 'Advanced', level: '80%' },
  { id: 5, name: 'Tailwind CSS / Vanilla CSS', category: 'Styling', level: '90%' },
];

export default function ListRenderingDemo() {
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? skills : skills.filter(s => s.category === filter);

  const removeSkill = (id) => {
    setSkills(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="module-card">
      <h3>📋 Topic 05: List Rendering & Stable Keys</h3>
      <p>Render dynamic collections cleanly using JavaScript array methods like `.map()` and `.filter()`.</p>

      <div className="filter-bar">
        {['All', 'Foundation', 'Core', 'Advanced', 'Styling'].map(cat => (
          <button 
            key={cat} 
            className={filter === cat ? 'btn-filter active' : 'btn-filter'}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="skill-list">
        {filtered.map((skill) => (
          <li key={skill.id} className="skill-item">
            <div>
              <strong>{skill.name}</strong> <span className="tag">{skill.category}</span>
              <div className="progress-bg">
                <div className="progress-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
            <button onClick={() => removeSkill(skill.id)} className="btn-del" title="Delete">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}