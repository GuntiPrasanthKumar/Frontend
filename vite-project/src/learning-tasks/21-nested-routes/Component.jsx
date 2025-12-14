import React, { useState } from 'react';

export default function NestedRoutesDemo() {
  const [subRoute, setSubRoute] = useState('profile');

  return (
    <div className="module-card">
      <h3>📂 Topic 21: Nested Layouts & Outlet Pattern</h3>
      
      <div className="layout-shell">
        <aside className="layout-sidebar">
          <h5>Dashboard Shell</h5>
          <button onClick={() => setSubRoute('profile')} className={subRoute === 'profile' ? 'active' : ''}>👤 Profile</button>
          <button onClick={() => setSubRoute('security')} className={subRoute === 'security' ? 'active' : ''}>🔒 Security</button>
          <button onClick={() => setSubRoute('billing')} className={subRoute === 'billing' ? 'active' : ''}>💳 Billing</button>
        </aside>

        <main className="layout-outlet">
          {subRoute === 'profile' && <div><h4>Profile Settings</h4><p>Manage user profile information and avatar.</p></div>}
          {subRoute === 'security' && <div><h4>Security & 2FA</h4><p>Configure password, sessions, and multi-factor auth.</p></div>}
          {subRoute === 'billing' && <div><h4>Subscription & Invoices</h4><p>View active tier and download PDF receipts.</p></div>}
        </main>
      </div>
    </div>
  );
}