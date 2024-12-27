import React, { useState } from 'react';
import { registerUser } from '../services/api.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic password confirmation check
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const response = await registerUser(form);
      toast.success(response.message);
    } catch (error) {
      toast.error('Registration failed! Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Username"
          value={form.name}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
      <ToastContainer />
    </div>
  );
};

const styles = {
  container: { padding: '20px', maxWidth: '400px', margin: 'auto' },
  form: { display: 'flex', flexDirection: 'column' },
  input: { margin: '10px 0', padding: '10px', fontSize: '16px' },
  button: { padding: '10px', fontSize: '16px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }
};

export default RegistrationPage;
