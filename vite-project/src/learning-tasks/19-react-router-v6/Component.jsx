import React, { useState } from 'react';

export default function ReactRouterBasicsDemo() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="module-card">
      <h3>🗺️ Topic 19: React Router v6 Basics & Navigation</h3>
      <p>Simulating client-side single page navigation without browser page reload.</p>

      <nav className="nav-demo-bar">
        <button 
          onClick={() => setActiveTab('home')}
          className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
        >
          🏠 /home
        </button>
        <button 
          onClick={() => setActiveTab('courses')}
          className={`nav-btn ${activeTab === 'courses' ? 'active' : ''}`}
        >
          📚 /courses
        </button>
        <button 
          onClick={() => setActiveTab('about')}
          className={`nav-btn ${activeTab === 'about' ? 'active' : ''}`}
        >
          ℹ️ /about
        </button>
      </nav>

      <div className="route-view">
        {activeTab === 'home' && <div><h4>Home View</h4><p>Welcome to the React Router v6 foundations module.</p></div>}
        {activeTab === 'courses' && <div><h4>Courses View</h4><p>Explore full stack modules and interactive labs.</p></div>}
        {activeTab === 'about' && <div><h4>About View</h4><p>Built with modern React and clean architecture.</p></div>}
      </div>
    </div>
  );
}