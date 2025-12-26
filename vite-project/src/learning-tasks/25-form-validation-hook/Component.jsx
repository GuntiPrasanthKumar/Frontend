import React, { useState } from 'react';

export default function FormValidationEngineDemo() {
  const [values, setValues] = useState({ email: '', password: '', age: '' });
  const [touched, setTouched] = useState({});

  const errors = {
    email: !values.email.includes('@') ? 'Invalid email format' : null,
    password: values.password.length < 6 ? 'Password must be at least 6 characters' : null,
    age: (isNaN(values.age) || Number(values.age) < 18) ? 'Must be 18+' : null
  };

  const handleBlur = (field) => setTouched(prev => ({ ...prev, [field]: true }));

  return (
    <div className="module-card">
      <h3>🛡️ Topic 25: Custom Form Validation Engine</h3>
      <div className="form-layout">
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={values.email} 
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            onBlur={() => handleBlur('email')}
            className="input-field"
          />
          {touched.email && errors.email && <span className="err-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={values.password} 
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            onBlur={() => handleBlur('password')}
            className="input-field"
          />
          {touched.password && errors.password && <span className="err-text">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input 
            type="number" 
            value={values.age} 
            onChange={(e) => setValues({ ...values, age: e.target.value })}
            onBlur={() => handleBlur('age')}
            className="input-field"
          />
          {touched.age && errors.age && <span className="err-text">{errors.age}</span>}
        </div>
      </div>
    </div>
  );
}