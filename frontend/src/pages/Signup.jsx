import React, { useState, useRef } from 'react';
import { TextField, Button, Container, Snackbar, Alert } from '@mui/material';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import yourImage from "../assets/trainer.svg"; // Adjust the path as needed

const Signup = () => {
  // State and Refs
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('error');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  // Event Handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URI}/api/auth/register`,
        { name, email, password }
      );
      setMessage(response.data.msg);
      setSeverity('success');
      setOpen(true);
      setTimeout(() => {
        navigate("/login");
      }, 1000); 
    } catch (error) {
      setMessage(error.response.data.msg);
      setSeverity('error');
      setOpen(true);
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left side with image */}
      <div className="w-1/2 h-full overflow-hidden hidden sm:block">
        <div className="h-full flex justify-center items-center bg-gray-200">
          <img src={yourImage} alt="workout image" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Right side with signup form */}
      <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 py-8 h-full border-2 border-gray-300">
            <h2 className="mb-4 text-2xl font-bold">Signup</h2>
            <TextField
              variant="outlined"
              label="Name"
              fullWidth
              required
              className="mb-4"
              inputRef={nameRef}
            />
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              type="email"
              required
              className="mb-4"
              inputRef={emailRef}
            />
            <TextField
              variant="outlined"
              label="Password"
              fullWidth
              type="password"
              required
              className="mb-4"
              inputRef={passwordRef}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              className="mb-4"
            >
              Signup
            </Button>

            {/* Link to navigate to login page */}
            <div className="text-center">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </form>
        </Container>
      </div>
      
      {/* Snackbar for displaying error message */}
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity={severity} variant="outlined">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
