import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/style.css'
import { useState } from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import GoogleIcon from '@mui/icons-material/Google';
import { Alert } from 'react-bootstrap';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
       await logIn(email, password);
       navigate("/header");
    }catch(err){
       setError(err.message);
    }
   };

   const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/");
    }catch(err){
     setError(err.message);
    }
  };

  return (
    <div>
      <div className="body">
      {error && <Alert variant="danger">{error}</Alert>} 
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>
              <div className="social-container">
              <GoogleIcon
                   onClick={ handleGoogleSignIn }
                   />
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" name="email" required="" 
              onChange={ (e) => setEmail(e.target.value)}/>
              <input type="password" placeholder="Password" name="password" required="" 
              onChange={ (e) => setPassword(e.target.value)}/>
              <a href="#">Forgot your password?</a>
              <button className="center">Login</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friends!</h1>
                <p>Enter your personal details and start your journey with us</p>
                  <button className="ghost" id="signUp"><Link to="/signup">Signup</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
