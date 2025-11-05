import React, { useState, useEffect } from 'react';

export default function DataFetchingDemo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSampleData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetching mock users/posts from jsonplaceholder
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
      if (!res.ok) throw new Error('Failed to fetch resource');
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSampleData();
  }, []);

  return (
    <div className="module-card">
      <h3>🌐 Topic 08: API Data Fetching & Loading States</h3>
      <div className="header-action">
        <button onClick={fetchSampleData} disabled={loading} className="btn-secondary">
          {loading ? 'Refreshing...' : '🔄 Reload API Posts'}
        </button>
      </div>

      {loading && <div className="spinner">⏳ Loading posts from remote API...</div>}
      {error && <div className="error-box">⚠️ Error: {error}</div>}

      <div className="posts-grid">
        {!loading && posts.map(post => (
          <div key={post.id} className="post-card">
            <h4>#{post.id} {post.title.substring(0, 30)}...</h4>
            <p>{post.body.substring(0, 80)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}