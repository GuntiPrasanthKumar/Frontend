import React, { useState } from 'react';

// Simulated API service abstraction
const ItemService = {
  items: [
    { id: 1, title: 'Learn Vite & React 18', completed: true },
    { id: 2, title: 'Understand Component Architecture', completed: true },
    { id: 3, title: 'Deploy on Cloud Infrastructure', completed: false }
  ],
  async getAll() { return [...this.items]; },
  async create(title) {
    const newItem = { id: Date.now(), title, completed: false };
    this.items.push(newItem);
    return newItem;
  }
};

export default function CrudServiceDemo() {
  const [items, setItems] = useState(ItemService.items);
  const [newTitle, setNewTitle] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const created = await ItemService.create(newTitle.trim());
    setItems([...items, created]);
    setNewTitle('');
  };

  return (
    <div className="module-card">
      <h3>🏛️ Topic 37: Clean Architecture (Service Layer)</h3>
      <form onSubmit={handleAdd} className="form-inline">
        <input 
          type="text" 
          value={newTitle} 
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New Item through Service Layer..."
          className="input-field"
        />
        <button type="submit" className="btn-primary">Create via API</button>
      </form>

      <ul className="skill-list mt-2">
        {items.map(it => (
          <li key={it.id} className="skill-item">
            <span>{it.title}</span>
            <span className={it.completed ? 'badge-success' : 'badge-info'}>
              {it.completed ? 'Completed' : 'Pending'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}