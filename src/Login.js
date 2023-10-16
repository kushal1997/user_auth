// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    // Send a POST request to your backend to authenticate the user
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Handle the response, e.g., store user session or show errors
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>

      <Link to='/signup'> 
      <h1>Register Here</h1>
      </Link>
    </div>
  );
}

export default Login;
