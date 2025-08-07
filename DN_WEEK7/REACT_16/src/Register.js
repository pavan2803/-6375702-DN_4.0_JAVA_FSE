import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (formData.name.length < 5) {
      errors.name = 'Name must be at least 5 characters long.';
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      errors.email = 'Email must include "@" and "."';
    }
    if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Registration Successful!');
      setFormData({ name: '', email: '', password: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        style={styles.input}
        placeholder="Enter your name"
      />
      {errors.name && <span style={styles.error}>{errors.name}</span>}

      <label style={styles.label}>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        style={styles.input}
        placeholder="Enter your email"
      />
      {errors.email && <span style={styles.error}>{errors.email}</span>}

      <label style={styles.label}>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        style={styles.input}
        placeholder="Enter your password"
      />
      {errors.password && <span style={styles.error}>{errors.password}</span>}

      <button type="submit" style={styles.button}>Register</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    gap: '15px',
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px'
  },
  label: {
    fontWeight: 'bold'
  },
  input: {
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    fontSize: '14px'
  }
};

export default Register;
