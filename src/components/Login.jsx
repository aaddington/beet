import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';
import Header from './header';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the signInWithEmailAndPassword method from Firebase Authentication
import {auth} from '../firebase.js'
import Footer from "./footer"; // Import your Firebase authentication instance

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed in
      const user = userCredential.user;
      console.log('User signed in:', user);
      // You can navigate or handle the sign-in success here
    } catch (error) {
      setError(error.message);
      console.error('Error signing in:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="login_bg">
      <div className="login_center_title">Log In</div>

      <div className="login_form">
        <form onSubmit={handleLogin} className="login_container">
          <div className="login_form_row">
            <label>
              Email address:
              <br />
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="login_form_row">
            <label>
              Password:
              <br />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div>
            <Link to="/ForgotPassword">Forgot your Password?</Link>
          </div>

          <div className="login_button_row">
            <button type="submit">Log In</button>
            <button type="button" className="cancel_login">
              Cancel
            </button>
          </div>

          <div>
            Don’t have an account? <Link to="/Signup">Sign up!</Link>
          </div>
        </form>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
