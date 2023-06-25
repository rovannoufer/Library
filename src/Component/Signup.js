import React, { useState } from 'react';
import './css/style.css';
import { useUserAuth } from '../Context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
     e.preventDefault();
     setError("");
     try{
        await signUp(email, password);
        navigate("/");
     }catch(err){
        setError(err.message);
     }
    };

  return (
    <div className="body">
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="container1">
        <form name="myform" onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center' }}>SIGNUP</h1> <br />
          <input type="text" placeholder="Name" name="name" required="" />
          <input type="text" placeholder="Username" name="username" required="" />
          <input type="email" placeholder="Email" name="email" required=""
           onChange={ (e) => setEmail(e.target.value)}/>
          <input type="tel" placeholder="Mobile number" name="mobileno" required="" />
          <input type="password" placeholder="Password" name="password" required="" 
          onChange={ (e) => setPassword(e.target.value)}/>
          <br />
          <div className="center">
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
