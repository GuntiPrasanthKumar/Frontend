import React, { useState } from 'react';

export default function ControlledFormsDemo() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    experience: 'Beginner',
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.username.trim()) errs.username = 'Username is required';
    if (!formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.acceptTerms) errs.acceptTerms = 'You must accept the terms';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div className="module-card">
      <h3>📝 Topic 06: Controlled Form Inputs</h3>
      <form onSubmit={handleSubmit} className="form-layout">
        <div className="form-group">
          <label>Full Name:</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange}
            placeholder="John Doe"
            className="input-field"
          />
          {errors.username && <span className="err-text">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            placeholder="john@example.com"
            className="input-field"
          />
          {errors.email && <span className="err-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Experience Level:</label>
          <select name="experience" value={formData.experience} onChange={handleChange} className="input-field">
            <option value="Beginner">Beginner (0-1 yrs)</option>
            <option value="Intermediate">Intermediate (1-3 yrs)</option>
            <option value="Advanced">Advanced (3+ yrs)</option>
          </select>
        </div>

        <div className="form-group checkbox-row">
          <input 
            type="checkbox" 
            name="acceptTerms" 
            id="terms"
            checked={formData.acceptTerms} 
            onChange={handleChange} 
          />
          <label htmlFor="terms">I agree to terms & conditions</label>
        </div>
        {errors.acceptTerms && <span className="err-text">{errors.acceptTerms}</span>}

        <button type="submit" className="btn-primary">Register Learner</button>
      </form>

      {submitted && (
        <div className="success-banner">
          ✅ Form Submitted Successfully! Welcome, {formData.username}!
        </div>
      )}
    </div>
  );
}