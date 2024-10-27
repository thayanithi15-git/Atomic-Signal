import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { ForgotPasswordStyled } from "./forgotpasswordstyled";

export default function ForgotPassword({onLogin,onGetLink}) {
  return (
    <Box sx={ForgotPasswordStyled.page}>
      <Box sx={ForgotPasswordStyled.body}>
        <Box sx={ForgotPasswordStyled.welcomeQuotes}>
          <Box sx={ForgotPasswordStyled.welcome}>Forgot Password</Box>
          <Box sx={ForgotPasswordStyled.quotes}>
            Provide us the registered email to reset your password.
          </Box>
        </Box>
        <Box sx={ForgotPasswordStyled.auth}>
          <Box sx={ForgotPasswordStyled.emailPass}>Email</Box>
          <TextField
            placeholder="Type your email"
            sx={ForgotPasswordStyled.input}
          />
        </Box>
      </Box>
      <Box sx={ForgotPasswordStyled.footer}>
        <Button sx={ForgotPasswordStyled.getlink} onClick={() => onGetLink()}>Get Link</Button>
        <Box sx={ForgotPasswordStyled.alreadyLogin}>
          <Box>Remembered the password?</Box>
          <Box sx={ForgotPasswordStyled.signupLogin} onClick={() => onLogin()}>
            Log in
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
