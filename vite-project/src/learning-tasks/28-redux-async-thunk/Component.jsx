import React, { useState } from 'react';

export default function ReduxAsyncThunkDemo() {
  const [status, setStatus] = useState('idle'); // idle | pending | fulfilled | rejected
  const [users, setUsers] = useState([]);

  const dispatchFetchUsers = async () => {
    setStatus('pending');
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
      const data = await res.json();
      setUsers(data);
      setStatus('fulfilled');
    } catch {
      setStatus('rejected');
    }
  };

  return (
    <div className="module-card">
      <h3>🔄 Topic 28: Async Thunk Action Lifecycles</h3>
      <p>Simulating <code>createAsyncThunk('users/fetchUsers')</code> with pending, fulfilled, rejected action states.</p>

      <button onClick={dispatchFetchUsers} disabled={status === 'pending'} className="btn-primary">
        {status === 'pending' ? 'Dispatching Thunk...' : 'Dispatch Fetch Users Thunk'}
      </button>

      <div className="mt-2">
        <span className={`badge-${status === 'fulfilled' ? 'success' : status === 'pending' ? 'warning' : 'info'}`}>
          Status: {status.toUpperCase()}
        </span>
      </div>

      {status === 'fulfilled' && (
        <div className="users-list mt-2">
          {users.map(u => (
            <div key={u.id} className="sub-card">
              <strong>{u.name}</strong> - <em>{u.email}</em> ({u.company?.name})
            </div>
          ))}
        </div>
      )}
    </div>
  );
}