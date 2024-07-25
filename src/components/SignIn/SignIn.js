'use client';
// src/components/SignIn.jsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const { token } = await res.json();
        // Store token (e.g., in local storage)
        localStorage.setItem('token', token);
        // Redirect to dashboard or home page
        router.push('/dashboard');
      } else {
        const { error } = await res.json();
        setError(error);
      }
    } catch (err) {
      console.error('Error signing in:', err);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
