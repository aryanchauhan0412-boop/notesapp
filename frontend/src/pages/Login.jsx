import React, { useState } from 'react';
import axios from "axios";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/notesApi';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      const res = await loginUser(email, password)

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/")
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="auth-container">
      <h1 className="app-title">Notes Manager</h1>
      <div className="auth-card">
        <h1 class="text-xl sm:text-2xl font-semibold text-black text-center mb-3 sm:mb-4">Login</h1>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account? 
          <Link to="/signup"> Signup</Link>
        </p>

      </div>

    </div>
  )
}

export default Login;
