import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/signup.css'; 
import Header from './header';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase'; 
import Home from './Home'; // Import your Home component

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [value, setValue] = useState(''); // Declare value and setValue

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []); // Add empty dependency array to run useEffect only once

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Signed up successfully
      const user = userCredential.user;
      console.log('User signed up:', user);
      // Clear form fields
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(error.message);
      console.error('Error signing up:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="signup_center_title">Sign Up</div>

      <div className="signup_form">
        <form onSubmit={handleSignUp} className="signup_container">
          <div className="signup_form_row">
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

          <div className="signup_form_row">
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

          <div className="signup_button_row">
            <button type="submit">Sign Up</button>
            <div>
              {
                value ? <Home /> :
                <button onClick={handleClick} type="button" class="login-with-google-btn" >Google</button>
              }
            </div>
            <button type="button" className="cancel_signup">
              Cancel
            </button>
          </div>

          <div>
            Already have an account? <Link to="/login">Log in!</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
