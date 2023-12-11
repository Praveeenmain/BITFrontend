import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css';

const UserForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://signu.onrender.com/users/', formData);
      console.log('User created:', response.data);
      // Navigate to login page after successful user creation
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      console.error('Error creating user:', error);
      // Optionally handle error or display error message to the user
    }
  };

  return (
    <div className="user-form-container">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit} className="user-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-btn">Create User</button>
      </form>
    </div>
  );
};

export default UserForm;
