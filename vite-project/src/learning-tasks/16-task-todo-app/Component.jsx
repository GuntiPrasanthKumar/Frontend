import React, { useState, useEffect } from 'react';

export default function CategorizedTaskManager() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('fsd_learning_tasks');
    return saved ? JSON.parse(saved) : [
      { id: 1, text: 'Complete React Fundamentals', category: 'Study', completed: true },
      { id: 2, text: 'Build Custom Hooks Suite', category: 'Coding', completed: true },
      { id: 3, text: 'Master Context API & Routing', category: 'Project', completed: false }
    ];
  });

  const [input, setInput] = useState('');
  const [category, setCategory] = useState('Study');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('fsd_learning_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks(prev => [
      ...prev,
      { id: Date.now(), text: input.trim(), category, completed: false }
    ]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'Active') return !t.completed;
    if (filter === 'Completed') return t.completed;
    return true;
  });

  return (
    <div className="module-card">
      <h3>🏆 Milestone Task 1: Categorized Task Manager</h3>
      <form onSubmit={addTask} className="task-form">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="input-field"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field-sm">
          <option value="Study">Study</option>
          <option value="Coding">Coding</option>
          <option value="Project">Project</option>
        </select>
        <button type="submit" className="btn-primary">Add Task</button>
      </form>

      <div className="filter-bar">
        {['All', 'Active', 'Completed'].map(f => (
          <button 
            key={f} 
            className={`btn-filter ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="task-list">
        {filteredTasks.map(t => (
          <div key={t.id} className={`task-row ${t.completed ? 'task-done' : ''}`}>
            <input 
              type="checkbox" 
              checked={t.completed} 
              onChange={() => toggleTask(t.id)} 
            />
            <span className="task-text">{t.text}</span>
            <span className="badge-category">{t.category}</span>
            <button onClick={() => deleteTask(t.id)} className="btn-del">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}