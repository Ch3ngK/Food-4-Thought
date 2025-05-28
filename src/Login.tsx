import React from 'react';
import './App.css';
import logo from './Food4Thought.png'; // Correct relative path
import userIcon from './user-icon.png'; // Correct relative path for user icon
import passIcon from './password-icon.png'; // Correct relative path for password icon
import chef from './chef.png'; // Correct relative path for chef image
import { useNavigate } from 'react-router-dom';

function Login() {
//  const navigate = useNavigate(); // ✅ navigation hook
//  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//    console.log('Login successful'); // ✅ log on successful login
//    navigate('/home'); // ✅ go to /home on login
//  }; 

  return (
    <div className="App">
      <header className="App-header">
        <div className="background-img"></div>
          <div className="text-box">
            <img id="Chef" src={chef} alt="Chef Image" />
            <div className="Welcome">Welcome to</div>
            <br></br>
            <img id="Logo" src={logo} alt="Food 4 Thought Logo" />
            <div className="Login-text">Login</div>
            <br></br>
            <br></br>
            <form>
              <div>
                <input 
                  className="Username" 
                  name="username"
                  type="text"
                  placeholder="Username" 
                  required>
                </input>
                <img id="UserIcon" src={userIcon} alt="User Icon" />
              </div>
              <div>
                <input 
                  className="Password" 
                  name="password"
                  type="password"
                  placeholder="Password" 
                  required>
                </input>
                <img id="PassIcon" src={passIcon} alt="Password Icon" />
              </div>
              <button type="submit" className="Login-button">Login</button>
            </form>
            <br></br><br></br>
            <div className="Checkbox-container">
              <input type="checkbox" className="Checkbox" />
              <label htmlFor="Remember-me">Remember me</label>  
            </div>
            <br></br><br></br>
            <div className="Forgot-password">
              <a href="/forgot-password" className="Forgot-password">Forgot password?</a>
            </div>
            <div className="Sign-up">
              <a href="/sign-up" className="Sign-up">Sign up</a>
            </div>
            <br></br><br></br>
          </div>
      </header>
    </div>
  );
}

export default Login;