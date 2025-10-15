import React, { useState } from 'react';
import './LearningHub.css';
import modulesMeta from './modulesRegistry.json';

import Mod1 from './01-jsx-basics/Component.jsx';
import Mod2 from './02-props-components/Component.jsx';
import Mod3 from './03-usestate-hook/Component.jsx';
import Mod4 from './04-event-handling/Component.jsx';
import Mod5 from './05-list-rendering/Component.jsx';
import Mod6 from './06-controlled-forms/Component.jsx';
import Mod7 from './07-useeffect-lifecycle/Component.jsx';
import Mod8 from './08-data-fetching/Component.jsx';
import Mod9 from './09-css-styling/Component.jsx';
import Mod10 from './10-useref-dom/Component.jsx';
import Mod11 from './11-usereducer-hook/Component.jsx';
import Mod12 from './12-usememo-usecallback/Component.jsx';
import Mod13 from './13-react-memo/Component.jsx';
import Mod14 from './14-custom-hooks-1/Component.jsx';
import Mod15 from './15-custom-hooks-2/Component.jsx';
import Mod16 from './16-task-todo-app/Component.jsx';
import Mod17 from './17-context-theme-auth/Component.jsx';
import Mod18 from './18-context-cart/Component.jsx';
import Mod19 from './19-react-router-v6/Component.jsx';
import Mod20 from './20-dynamic-routing/Component.jsx';
import Mod21 from './21-nested-routes/Component.jsx';
import Mod22 from './22-protected-routes/Component.jsx';
import Mod23 from './23-error-boundaries/Component.jsx';
import Mod24 from './24-portals-modals/Component.jsx';
import Mod25 from './25-form-validation-hook/Component.jsx';
import Mod26 from './26-task-ecommerce-catalog/Component.jsx';
import Mod27 from './27-redux-toolkit-setup/Component.jsx';
import Mod28 from './28-redux-async-thunk/Component.jsx';
import Mod29 from './29-axios-interceptors/Component.jsx';
import Mod30 from './30-pagination-infinitescroll/Component.jsx';
import Mod31 from './31-search-debouncing/Component.jsx';
import Mod32 from './32-file-upload-preview/Component.jsx';
import Mod33 from './33-toast-notification-system/Component.jsx';
import Mod34 from './34-darkmode-theming/Component.jsx';
import Mod35 from './35-data-charts/Component.jsx';
import Mod36 from './36-task-admin-dashboard/Component.jsx';
import Mod37 from './37-crud-service-layer/Component.jsx';
import Mod38 from './38-auth-flow-jwt/Component.jsx';
import Mod39 from './39-multistep-wizard/Component.jsx';
import Mod40 from './40-drag-and-drop/Component.jsx';
import Mod41 from './41-component-testing/Component.jsx';
import Mod42 from './42-performance-optimization/Component.jsx';
import Mod43 from './43-task-realtime-chat-ui/Component.jsx';
import Mod44 from './44-task-recipe-planner/Component.jsx';
import Mod45 from './45-production-deployment/Component.jsx';
import Mod46 from './46-curriculum-showcase/Component.jsx';

const componentsMap = {
  '01-jsx-basics': Mod1,
  '02-props-components': Mod2,
  '03-usestate-hook': Mod3,
  '04-event-handling': Mod4,
  '05-list-rendering': Mod5,
  '06-controlled-forms': Mod6,
  '07-useeffect-lifecycle': Mod7,
  '08-data-fetching': Mod8,
  '09-css-styling': Mod9,
  '10-useref-dom': Mod10,
  '11-usereducer-hook': Mod11,
  '12-usememo-usecallback': Mod12,
  '13-react-memo': Mod13,
  '14-custom-hooks-1': Mod14,
  '15-custom-hooks-2': Mod15,
  '16-task-todo-app': Mod16,
  '17-context-theme-auth': Mod17,
  '18-context-cart': Mod18,
  '19-react-router-v6': Mod19,
  '20-dynamic-routing': Mod20,
  '21-nested-routes': Mod21,
  '22-protected-routes': Mod22,
  '23-error-boundaries': Mod23,
  '24-portals-modals': Mod24,
  '25-form-validation-hook': Mod25,
  '26-task-ecommerce-catalog': Mod26,
  '27-redux-toolkit-setup': Mod27,
  '28-redux-async-thunk': Mod28,
  '29-axios-interceptors': Mod29,
  '30-pagination-infinitescroll': Mod30,
  '31-search-debouncing': Mod31,
  '32-file-upload-preview': Mod32,
  '33-toast-notification-system': Mod33,
  '34-darkmode-theming': Mod34,
  '35-data-charts': Mod35,
  '36-task-admin-dashboard': Mod36,
  '37-crud-service-layer': Mod37,
  '38-auth-flow-jwt': Mod38,
  '39-multistep-wizard': Mod39,
  '40-drag-and-drop': Mod40,
  '41-component-testing': Mod41,
  '42-performance-optimization': Mod42,
  '43-task-realtime-chat-ui': Mod43,
  '44-task-recipe-planner': Mod44,
  '45-production-deployment': Mod45,
  '46-curriculum-showcase': Mod46,
};

export default function LearningHub() {
  const [selectedId, setSelectedId] = useState(modulesMeta[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModules = modulesMeta.filter(m => 
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeModule = modulesMeta.find(m => m.id === selectedId) || modulesMeta[0];
  const ActiveComponent = componentsMap[activeModule.id];

  return (
    <div className="learning-hub-container">
      <div className="hub-hero">
        <h1>🎓 Full Stack Frontend & React Learning Hub</h1>
        <p>Interactive Roadmap: 46 Hands-on Modules (October 2025 – February 2026)</p>
        <div className="hub-stats">
          <div className="hub-stat-item">
            <span className="stat-number">46</span>
            <span className="stat-label">Modules</span>
          </div>
          <div className="hub-stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Coverage</span>
          </div>
          <div className="hub-stat-item">
            <span className="stat-number">Oct '25 - Feb '26</span>
            <span className="stat-label">Timeline</span>
          </div>
        </div>
      </div>

      <div className="hub-controls">
        <input 
          type="text" 
          placeholder="🔍 Search across 46 learning topics..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="hub-search-input"
        />
        <span>Showing <strong>{filteredModules.length}</strong> of 46 Modules</span>
      </div>

      <div className="hub-grid">
        <aside className="hub-module-list">
          {filteredModules.map((m) => (
            <div 
              key={m.id}
              onClick={() => setSelectedId(m.id)}
              className={`module-nav-item ${m.id === selectedId ? 'active' : ''}`}
            >
              <span className="module-nav-title">{m.title}</span>
              <span className="module-nav-date">📅 {new Date(m.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>
          ))}
        </aside>

        <main className="hub-preview-panel">
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="badge-category" style={{ fontSize: '0.85rem' }}>Active Module: {activeModule.id}</span>
            <p style={{ color: '#475569', marginTop: '0.4rem' }}>{activeModule.summary}</p>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '1rem 0' }} />
          {ActiveComponent ? <ActiveComponent /> : <p>Select a module to view.</p>}
        </main>
      </div>
    </div>
  );
}
