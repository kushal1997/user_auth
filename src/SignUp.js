// SignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleSignUp = async () => {
    // Send a POST request to your backend to register the user
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Handle the response, e.g., show success message or errors
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
      <button onClick={handleSignUp}>Sign Up</button>
      <Link to='/'> 
      <h1>Login Here</h1>
      </Link>
    </div>
  );
}

export default SignUp;
