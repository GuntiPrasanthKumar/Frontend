import React, { useState } from 'react';

const COURSES = [
  { id: 'react-101', name: 'React Foundations', duration: '4 Weeks', level: 'Beginner' },
  { id: 'fullstack-201', name: 'FSD with Node & React', duration: '8 Weeks', level: 'Intermediate' },
  { id: 'cloud-301', name: 'Cloud & Production Deployment', duration: '6 Weeks', level: 'Advanced' }
];

export default function DynamicRoutingDemo() {
  const [selectedId, setSelectedId] = useState('react-101');
  const [queryFilter, setQueryFilter] = useState('');

  const course = COURSES.find(c => c.id === selectedId);
  const matching = COURSES.filter(c => c.name.toLowerCase().includes(queryFilter.toLowerCase()));

  return (
    <div className="module-card">
      <h3>🔗 Topic 20: Dynamic Route Params & Query Strings</h3>
      <p>Simulating <code>/courses/:courseId?search=query</code> routing logic.</p>

      <div className="demo-box">
        <input 
          type="text" 
          placeholder="Filter courses by query..."
          value={queryFilter}
          onChange={(e) => setQueryFilter(e.target.value)}
          className="input-field"
        />

        <div className="btn-group mt-2">
          {matching.map(c => (
            <button 
              key={c.id} 
              onClick={() => setSelectedId(c.id)}
              className={`btn-pill ${selectedId === c.id ? 'active' : ''}`}
            >
              /courses/{c.id}
            </button>
          ))}
        </div>

        {course && (
          <div className="detail-box">
            <h4>Course Details for: {course.id}</h4>
            <p><strong>Name:</strong> {course.name}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Level:</strong> {course.level}</p>
          </div>
        )}
      </div>
    </div>
  );
}