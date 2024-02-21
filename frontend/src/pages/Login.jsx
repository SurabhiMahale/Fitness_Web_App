import React from 'react';
import { TextField, Button, Container, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import yourImage from '../assets/trainer.svg'; // Adjust the path as needed

const Login= () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/signup');
  };

  return (
    <div className="h-screen flex">
      {/* Left side with image (hidden on small devices) */}
      <div className="w-1/2 h-full overflow-hidden hidden sm:block">
        <div className="h-full flex justify-center items-center bg-gray-200">
          {/* Your image here */}
          <img src={yourImage} alt="Image" className="h-full w-full object-cover" />
        </div>
      </div>
      {/* Right side with login form */}
      <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
        <Container maxWidth="sm">
          <form className="flex flex-col justify-center items-center bg-white shadow-lg rounded px-8 py-8 h-full border-2 border-gray-300">
            <h2 className="mb-4 text-2xl font-bold">Login</h2>
            <TextField
              variant="outlined"
              label="Name"
              fullWidth
              required
              className="mb-4"
            />
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              type="email"
              required
              className="mb-4"
            />
            <TextField
              variant="outlined"
              label="Password"
              fullWidth
              type="password"
              required
              className="mb-4"
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
            <Link onClick={handleNavigation} variant="body2">
              Don't have an account? Click here
            </Link>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
