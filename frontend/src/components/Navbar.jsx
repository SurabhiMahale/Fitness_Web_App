import React from "react";
import { Typography, Avatar, Link } from "@mui/material";
import avatar from "../assets/AvatarMale.png";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-blue-200 justify-between items-center p-2">
      {/* Brand logo */}
      <div className="flex-none flex items-center justify-center bg-slate-300 rounded-full pl-2 pr-2 shadow-md w-1/12">
        <Typography variant="h6" className="bebas-neue-regular">
          My Fitness
        </Typography>
      </div>

      {/* Middle part with links */}
      <div className="flex-grow flex justify-center">
        <Link
          component={RouterLink}
          to="/page1"
          underline="none"
          color="inherit"
          className="px-4 py-2"
        >
          Page1
        </Link>
        <Link
          component={RouterLink}
          to="/page2"
          underline="none"
          color="inherit"
          className="px-4 py-2"
        >
          Page2
        </Link>
        <Link
          component={RouterLink}
          to="/page3"
          underline="none"
          color="inherit"
          className="px-4 py-2"
        >
          Page3
        </Link>
      </div>

      {/* Profile logo */}
      <div className="flex-none  flex items-center justify-center w-1/12">
        <Avatar alt="Profile" src={avatar} className="bg-slate-200 shadow-md"/>
      </div>
    </div>
  );
};

export default Navbar;
