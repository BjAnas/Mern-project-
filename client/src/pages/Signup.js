import React, { useState } from 'react';
//import axios from 'axios';
import './Signup.css';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {


    e.preventDefault();
    //console.log(username, password);
    await signup(username, email, password)
/*
    try {

      console.log(username, email, password);

      await axios.post('/signup', { username, email, password });

      setMessage('Signup successful!');
      console.log('MongoDB connected successfully');

    } catch (error) {
      setMessage('Signup failedddd');
    }*/
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button disabled={isLoading} type="submit">Signup</button>
        {error && <div className="error">{error}</div>}
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Signup;
