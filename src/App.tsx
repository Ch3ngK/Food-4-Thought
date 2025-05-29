import React, { useState } from 'react';
import Home from './Home';
import './App.css';
import logo from './pictures/Food4Thought.png';
import userIcon from './pictures/user-icon.png';
import passIcon from './pictures/password-icon.png';
import chef from './pictures/chef.png';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="background-img"></div>
        <div className="text-box">
          <img id="Chef" src={chef} alt="Chef Image" />
          <div className="Welcome">Welcome to</div>
          <br />
          <img id="Logo" src={logo} alt="Food 4 Thought Logo" />
          <div className="Login-text">Login</div>
          <br />
          <br />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true); // Instead of redirect, show <Home />
            }}
          >
            <div>
              <input
                className="Username"
                name="username"
                type="text"
                placeholder="Username"
                required
              />
              <img id="UserIcon" src={userIcon} alt="User Icon" />
            </div>
            <div>
              <input
                className="Password"
                name="password"
                type="password"
                placeholder="Password"
                required
              />
              <img id="PassIcon" src={passIcon} alt="Password Icon" />
            </div>
            <button type="submit" className="Login-button">Login</button>
          </form>
          <br /><br />
          <div className="Checkbox-container">
            <input type="checkbox" className="Checkbox" />
            <label htmlFor="Remember-me">Remember me</label>
          </div>
          <br /><br />
          <div className="Forgot-password">
            <a href="/forgot-password" className="Forgot-password">Forgot password?</a>
          </div>
          <div className="Sign-up">
            <a href="/sign-up" className="Sign-up">Sign up</a>
          </div>
          <br /><br />
        </div>
      </header>
    </div>
  );
}

export default App;