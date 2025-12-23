import React, { useState } from 'react';

export default function ModalsPortalsDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="module-card">
      <h3>🚪 Topic 24: Modals & Dialogs (createPortal)</h3>
      <p>Portals render children into a DOM node that exists outside the DOM hierarchy of the parent component.</p>

      <button onClick={() => setIsOpen(true)} className="btn-primary">
        Open Interactive Modal
      </button>

      {isOpen && (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>Accessible Modal Dialog</h4>
            <p>This modal escapes CSS overflow and z-index parent boundaries seamlessly.</p>
            <div className="btn-group">
              <button onClick={() => setIsOpen(false)} className="btn-secondary">Close Modal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}