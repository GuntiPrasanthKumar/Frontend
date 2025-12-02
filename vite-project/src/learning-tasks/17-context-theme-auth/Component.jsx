import React, { createContext, useContext, useState } from 'react';

const DemoAuthContext = createContext(null);

function DemoAuthProvider({ children }) {
  const [user, setUser] = useState({ name: 'Prashanth', role: 'Full Stack Dev' });
  const login = () => setUser({ name: 'Prashanth', role: 'Full Stack Dev' });
  const logout = () => setUser(null);
  return (
    <DemoAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </DemoAuthContext.Provider>
  );
}

function UserGreeting() {
  const { user, login, logout } = useContext(DemoAuthContext);
  return (
    <div className="sub-card">
      {user ? (
        <div>
          <p>Logged in as: <strong>{user.name}</strong> ({user.role})</p>
          <button onClick={logout} className="btn-danger">Log Out</button>
        </div>
      ) : (
        <div>
          <p>Guest User</p>
          <button onClick={login} className="btn-primary">Log In as Prashanth</button>
        </div>
      )}
    </div>
  );
}

export default function ContextDemo() {
  return (
    <DemoAuthProvider>
      <div className="module-card">
        <h3>🌐 Topic 17: Global State with Context API</h3>
        <p>Avoid prop-drilling by providing data directly to deeply nested components.</p>
        <UserGreeting />
      </div>
    </DemoAuthProvider>
  );
}