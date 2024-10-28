import {
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { ResetPasswordStyled } from "./resetpasswordstyled";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { HeaderStyled } from "../header/headerstyled";

export default function ResetPassword({ onLogin }) {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleToggleNewPassword = () => {
    setShowNewPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleResetPassword = () => {
    onLogin();
  };

  return (
    <Box sx={ResetPasswordStyled.page}>
      <Box sx={ResetPasswordStyled.body}>
        <Box sx={ResetPasswordStyled.welcomeQuotes}>
          <Box sx={ResetPasswordStyled.welcome}>Reset Password</Box>
          <Box sx={ResetPasswordStyled.quotes}>
            Please provide a new password for your account
          </Box>
        </Box>

        <Box sx={ResetPasswordStyled.auth}>
          <Box sx={ResetPasswordStyled.emailPasscon}>
            <Box sx={ResetPasswordStyled.emailPass}>New password</Box>
            <Box sx={ResetPasswordStyled.emailPassstar}>*</Box>
          </Box>
          <TextField
            placeholder="Type your new password"
            type={showNewPassword ? "text" : "password"}
            sx={ResetPasswordStyled.inputs}
            InputProps={{
              style: { ...HeaderStyled.inputsvaluefonts },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleNewPassword} edge="end">
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={ResetPasswordStyled.auth}>
          <Box sx={ResetPasswordStyled.emailPasscon}>
            <Box sx={ResetPasswordStyled.emailPass}>Confirm new password</Box>
            <Box sx={ResetPasswordStyled.emailPassstar}>*</Box>
          </Box>
          <TextField
            placeholder="Type your password"
            type={showConfirmPassword ? "text" : "password"}
            sx={ResetPasswordStyled.inputs}
            InputProps={{
              style: { ...HeaderStyled.inputsvaluefonts },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleConfirmPassword} edge="end">
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Box sx={ResetPasswordStyled.footer}>
        <Button
          sx={ResetPasswordStyled.loginButton}
          onClick={handleResetPassword}>
          Reset password
        </Button>
      </Box>
    </Box>
  );
}
