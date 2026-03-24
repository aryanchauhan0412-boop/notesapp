import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import "../App.css"
import { signupUser } from '../api/notesApi';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false

  const navigate = useNavigate()
  
    const handleSignup = async (e) => {
      e.preventDefault();
  
      try{
        const res = await signupUser(name, email, password)
  
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
        <h1 class="text-xl sm:text-2xl font-semibold text-black text-center mb-3 sm:mb-4">Sign Up</h1>

        <form onSubmit={handleSignup}>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e)=>setName(e.target.value)}
          />

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
            Sign Up
          </button>

        </form>

        <p>
          Already have an account? 
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  )
}

export default Signup
