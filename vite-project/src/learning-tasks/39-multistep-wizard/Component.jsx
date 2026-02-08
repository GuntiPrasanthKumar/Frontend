import React, { useState } from 'react';

export default function MultiStepWizardDemo() {
  const [step, setStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    name: '',
    role: 'Frontend',
    repoUrl: '',
    agreed: false
  });

  return (
    <div className="module-card">
      <h3>🧙‍♂️ Topic 39: Multi-Step Form Wizard</h3>
      
      <div className="wizard-stepper">
        <span className={step >= 1 ? 'step-bubble active' : 'step-bubble'}>1. Account</span>
        <span className={step >= 2 ? 'step-bubble active' : 'step-bubble'}>2. Project</span>
        <span className={step >= 3 ? 'step-bubble active' : 'step-bubble'}>3. Confirm</span>
      </div>

      <div className="wizard-body mt-2">
        {step === 1 && (
          <div>
            <label>Developer Name:</label>
            <input 
              type="text" 
              value={wizardData.name} 
              onChange={(e) => setWizardData({ ...wizardData, name: e.target.value })}
              className="input-field"
              placeholder="Your full name"
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <label>GitHub Repository URL:</label>
            <input 
              type="url" 
              value={wizardData.repoUrl} 
              onChange={(e) => setWizardData({ ...wizardData, repoUrl: e.target.value })}
              className="input-field"
              placeholder="https://github.com/..."
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <h4>Review & Confirm:</h4>
            <p><strong>Name:</strong> {wizardData.name || 'Prashanth'}</p>
            <p><strong>Repo:</strong> {wizardData.repoUrl || 'https://github.com/GuntiPrasanthKumar/Frontend.git'}</p>
          </div>
        )}

        <div className="btn-group mt-3">
          <button disabled={step === 1} onClick={() => setStep(s => s - 1)} className="btn-outline">Back</button>
          <button 
            onClick={() => {
              if (step < 3) setStep(s => s + 1);
              else alert('Wizard Completed Successfully! 🎉');
            }} 
            className="btn-primary"
          >
            {step === 3 ? 'Finish & Submit' : 'Continue ▶'}
          </button>
        </div>
      </div>
    </div>
  );
}