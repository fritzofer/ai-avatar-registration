import React, { useState } from "react";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { registerUser } from './services/api.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./RegistrationPage.css";

const RegistrationPage = () => {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      // Call API function to register user
      const response = await registerUser(form);
      toast.success(response.message);
    } catch (error) {
      toast.error("Registration failed! Please try again.");
    }
  };

  return (
    <div className="registration-page">
      {/* Left Section */}
      <div className="left-section">
        <div className="back-color"></div>
        <img src="/assets/Logo.png" alt="Logo" className="logo" />
        <img src="/assets/Illustration.png" alt="Illustration" className="illustration" />
        <h1 className="welcome-text">Welcome aboard, my friend</h1>
        <p className="subtext">Just a couple of clicks and we start</p>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <form className="form-content" onSubmit={handleSubmit}>
          <h1 className="form-title">Register</h1>

          {/* Email Input */}
          <div className="input-group">
            <div className="input-icon">
              <FaEnvelope />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          {/* Username Input */}
          <div className="input-group">
            <div className="input-icon">
              <FaUser />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="input-group">
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          {/* Register Button */}
          <button type="submit" className="register-button">Register</button>

          <p className="form-footer">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default RegistrationPage;
