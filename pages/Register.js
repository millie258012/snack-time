import React, { useState } from 'react';
import htm from 'htm';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';

const html = htm.bind(React.createElement);

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:8001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const userData = await response.json();
        // Prepend server URL to local avatar paths
        if (userData.avatar_url && !userData.avatar_url.startsWith('http')) {
          userData.avatar_url = `http://localhost:8001${userData.avatar_url}`;
        }
        login(userData);
        navigate('/profile');
      } else {
        const data = await response.json();
        setError(data.detail || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return html`
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-light p-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-surface-light p-8 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-text-main">Create Account</h2>
          <p className="mt-2 text-text-muted">Join Snack Time today</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit=${handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-main">Username</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-xl border-none bg-primary/10 px-4 py-3 text-text-main focus:ring-2 focus:ring-primary outline-none"
                value=${username}
                onChange=${(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-main">Password</label>
              <input
                type="password"
                required
                className="mt-1 block w-full rounded-xl border-none bg-primary/10 px-4 py-3 text-text-main focus:ring-2 focus:ring-primary outline-none"
                value=${password}
                onChange=${(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          ${error && html`<p className="text-center text-sm text-red-500">${error}</p>`}

          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-4 text-lg font-bold text-white hover:bg-green-600 transition-colors"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-text-muted">
          Already have an account? <${Link} to="/login" className="font-bold text-primary">Login</${Link}>
        </p>
      </div>
    </div>
  `;
};

export default Register;
