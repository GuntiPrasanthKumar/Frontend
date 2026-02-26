import React from 'react';

export default function ProductionDeploymentDemo() {
  return (
    <div className="module-card">
      <h3>🚀 Topic 45: Production Build & Deployment</h3>
      <div className="demo-box">
        <h4>Vite Production Build Checklist:</h4>
        <ul className="checklist">
          <li>✅ Tree-shaking enabled with Rollup bundler</li>
          <li>✅ Environment variables safely secured via <code>.env.production</code></li>
          <li>✅ Optimized assets minification and CSS code splitting</li>
          <li>✅ Production bundle verified with <code>npm run build</code></li>
        </ul>
      </div>
    </div>
  );
}