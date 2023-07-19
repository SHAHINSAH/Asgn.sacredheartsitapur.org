import React, { useState } from 'react';
import './SignUpp.css';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clear errors on input change
    setErrors((prevState) => ({
      ...prevState,
      [name]: ''
    }));

    // Update input values
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'rePassword':
        setRePassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    }

    if (!mobile.trim()) {
      validationErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(mobile)) {
      validationErrors.mobile = 'Mobile number should be a 10-digit integer';
    }

    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }

    if (!rePassword.trim()) {
      validationErrors.rePassword = 'Re-enter password';
    } else if (rePassword !== password) {
      validationErrors.rePassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic
    // ... submit the form data to your backend or perform further actions
    setSuccessMessage('All the validation is correct **Congratulation** ');
  };

  return (
    <div className='sam'>
      <h2>Sign Up</h2>
      {successMessage && <p className='wow'>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label> &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label> &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number:</label> &nbsp; &nbsp;
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={mobile}
            onChange={handleInputChange}
          />
          {errors.mobile && <span style={{ color: 'red' }}>{errors.mobile}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
        <div>
          <label htmlFor="rePassword">Re-enter Password:</label>
          <input
            type="password"
            id="rePassword"
            name="rePassword"
            value={rePassword}
            onChange={handleInputChange}
          />
          {errors.rePassword && (
            <span style={{ color: 'red' }}>{errors.rePassword}</span>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
