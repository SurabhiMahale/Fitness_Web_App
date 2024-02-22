import React, { useState, useRef } from "react";
import { TextField, Button, Container, Snackbar, Alert } from "@mui/material";
import yourImage from "../assets/trainer.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState('error');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URI}/api/auth/login`,
        { email, password }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setMessage(response.data.msg);
        setSeverity("success");
        setOpen(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      setMessage(error.response.data.msg);
      setOpen(true);
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left side with image (hidden on small devices) */}
      <div className="w-1/2 h-full overflow-hidden hidden sm:block">
        <div className="h-full flex justify-center items-center bg-gray-200">
          <img
            src={yourImage}
            alt="Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* Right side with login form */}
      <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
        <Container maxWidth="sm">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center bg-white shadow-lg rounded px-8 py-8 h-full border-2 border-gray-300"
          >
            <h2 className="mb-4 text-2xl font-bold">Login</h2>
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              type="email"
              required
              name="email"
              className="mb-4"
              inputRef={emailRef}
            />
            <TextField
              variant="outlined"
              label="Password"
              fullWidth
              type="password"
              required
              name="password"
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
              Login
            </Button>
            <div className="text-center">
              Not an existing user? <Link to="/signup">SignUp</Link>
            </div>
          </form>
        </Container>
      </div>
      
      {/* Snackbar for displaying error message */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={severity} variant="outlined">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
