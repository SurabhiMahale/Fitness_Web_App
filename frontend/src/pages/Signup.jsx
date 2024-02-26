import React, { useState, useRef } from "react";
import {
  TextField,
  Button,
  Container,
  Snackbar,
  Alert,
  Grid,
  CardMedia,
  Typography,
  Card,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import yourImage from "../assets/trainer.svg"; // Adjust the path as needed

const Signup = () => {
  // State and Refs
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("error");
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
      setSeverity("success");
      setOpen(true);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMessage(error.response.data.msg);
      setSeverity("error");
      setOpen(true);
    }
  };

  return (
    <Container
      maxWidth={false}
      className=" bg-sky-200 h-full w-full m-0 flex justify-center items-center"
    >
      <Grid className="bg-slate-200 flex h-3/4 w-3/4 justify-center shadow-2xl">
        <Grid item xs={6} className="flex justify-center items-center">
          <CardMedia
            component="img"
            image={yourImage}
            alt="trainer"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={6} className="flex justify-center items-center ">
          <Grid className="flex-row justify-center items-center h-3/4 w-3/4 ">
            <form onSubmit={handleSubmit}>
              <Typography
                variant="h5"
                component="h1"
                align="center"
                gutterBottom
              >
                SignUp
              </Typography>
              <TextField
                inputRef={nameRef}
                variant="outlined"
                label="Name"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                inputRef={emailRef}
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                inputRef={passwordRef}
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ margin: "8px 0" }}
              >
                SignUp
              </Button>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  style={{ margin: "8px 0" }}
                >
                  Login
                </Button>
              </Link>
            </form>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={() => setOpen(false)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert severity={severity} variant="outlined">
                {message}
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
