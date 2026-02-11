import React, { useState } from 'react';

const INITIAL_COLUMNS = {
  todo: [{ id: 'k1', text: 'Build React UI' }, { id: 'k2', text: 'Set up Redux Toolkit' }],
  inProgress: [{ id: 'k3', text: 'Write Unit Tests' }],
  done: [{ id: 'k4', text: 'Configure Vite & Git Repository' }]
};

export default function KanbanBoardDemo() {
  const [columns, setColumns] = useState(INITIAL_COLUMNS);

  const moveTask = (taskId, targetCol) => {
    let movedItem = null;
    const nextCols = {};

    Object.keys(columns).forEach(col => {
      const match = columns[col].find(t => t.id === taskId);
      if (match) movedItem = match;
      nextCols[col] = columns[col].filter(t => t.id !== taskId);
    });

    if (movedItem) {
      nextCols[targetCol] = [...nextCols[targetCol], movedItem];
      setColumns(nextCols);
    }
  };

  return (
    <div className="module-card">
      <h3>📋 Topic 40: Interactive Kanban Board</h3>
      <div className="kanban-grid">
        {Object.entries(columns).map(([colName, list]) => (
          <div key={colName} className="kanban-col">
            <h4>{colName.toUpperCase()} ({list.length})</h4>
            {list.map(task => (
              <div key={task.id} className="kanban-card">
                <p>{task.text}</p>
                <div className="btn-group-sm">
                  {colName !== 'todo' && <button onClick={() => moveTask(task.id, 'todo')} className="btn-micro">◀ Todo</button>}
                  {colName !== 'inProgress' && <button onClick={() => moveTask(task.id, 'inProgress')} className="btn-micro">⚡ Prog</button>}
                  {colName !== 'done' && <button onClick={() => moveTask(task.id, 'done')} className="btn-micro">Done ▶</button>}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}