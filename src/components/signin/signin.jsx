import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AtomicSignal from "../../assets/atomicsignallogo.png";
import Login from "../login/login";
import Signup from "../signup/signup";
import ForgotPassword from "../forgotpassword/forgotpassword";
import ResetPassword from "../resetpassword/resetpassword";
import { SigninStyled } from "./signinstyled";

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [success, setSuccess] = useState();
  const [signin, setSignin] = useState(location.pathname.slice(1) || "signup");

  useEffect(() => {
    setSignin(location.pathname.slice(1));
  }, [location]);

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLoginreset = () => {
    setSuccess(true);
    navigate("/login");
  };

  const handleGetLink = () => {
    navigate("/resetpassword");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <Box
      sx={{
        ...SigninStyled.page,
        height:
          signin === "signup"
            ? "68%"
            : signin === "login"
            ? "58%"
            : signin === "forgotpassword"
            ? "48%"
            : signin === "resetpassword"
            ? "56%"
            : "58%",
      }}>
      <Box sx={SigninStyled.header}>
        <img src={AtomicSignal} style={SigninStyled.atomicsignalimg} />
      </Box>
      {signin === "login" ? (
        <Login onForgotPassword={handleForgotPassword} success={success} />
      ) : signin === "signup" ? (
        <Signup onLogin={handleLogin} />
      ) : signin === "forgotpassword" ? (
        <ForgotPassword onLogin={handleLogin} onGetLink={handleGetLink} />
      ) : signin === "resetpassword" ? (
        <ResetPassword onLogin={handleLoginreset} success={success} />
      ) : null}
    </Box>
  );
}
