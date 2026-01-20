import React, { useState } from 'react';

export default function ToastSystemDemo() {
  const [toasts, setToasts] = useState([]);

  const addToast = (msg, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  return (
    <div className="module-card">
      <h3>🍞 Topic 33: Global Stackable Toast System</h3>
      
      <div className="btn-group">
        <button onClick={() => addToast('Task saved successfully! ✅', 'success')} className="btn-success">
          Trigger Success Toast
        </button>
        <button onClick={() => addToast('Network timeout detected! ⚠️', 'warning')} className="btn-danger">
          Trigger Warning Toast
        </button>
      </div>

      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast-bubble toast-${t.type}`}>
            <span>{t.msg}</span>
            <button onClick={() => setToasts(p => p.filter(x => x.id !== t.id))} className="btn-del">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}