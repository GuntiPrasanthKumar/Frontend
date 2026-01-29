import React, { useState } from 'react';

const USERS = [
  { id: 1, name: 'Prashanth Gunti', role: 'Full Stack Engineer', status: 'Active', commits: 142 },
  { id: 2, name: 'Elena Rostova', role: 'UI/UX Designer', status: 'Active', commits: 98 },
  { id: 3, name: 'Marcus Brody', role: 'DevOps Lead', status: 'Inactive', commits: 45 }
];

export default function AdminDashboard() {
  const [users, setUsers] = useState(USERS);
  const [filterText, setFilterText] = useState('');

  const toggleStatus = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u));
  };

  const filtered = users.filter(u => u.name.toLowerCase().includes(filterText.toLowerCase()));

  return (
    <div className="module-card">
      <h3>🏆 Milestone Task 3: Full Analytics Admin Dashboard</h3>
      
      <div className="stats-row">
        <div className="stat-card"><h3>1,420</h3><p>Total Study Hours</p></div>
        <div className="stat-card"><h3>46</h3><p>Curriculum Modules</p></div>
        <div className="stat-card"><h3>100%</h3><p>Frontend Mastery</p></div>
      </div>

      <div className="mt-3">
        <input 
          type="text" 
          placeholder="Search team member..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="input-field"
        />
      </div>

      <table className="admin-table mt-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Commits</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(u => (
            <tr key={u.id}>
              <td><strong>{u.name}</strong></td>
              <td>{u.role}</td>
              <td>{u.commits}</td>
              <td>
                <span className={u.status === 'Active' ? 'badge-success' : 'badge-danger'}>
                  {u.status}
                </span>
              </td>
              <td>
                <button onClick={() => toggleStatus(u.id)} className="btn-small">Toggle</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}