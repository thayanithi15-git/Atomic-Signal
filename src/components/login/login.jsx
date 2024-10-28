import {
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { LoginStyled } from "./loginstyled";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { HeaderStyled } from "../header/headerstyled";
import { RxCross2 } from "react-icons/rx";

export default function Login({ onForgotPassword, success }) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [Popup, setPopup] = useState(success);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box sx={LoginStyled.page}>
      <Box sx={LoginStyled.body}>
        <Box sx={LoginStyled.welcomeQuotes}>
          <Box sx={LoginStyled.welcome}>Welcome!</Box>
          <Box sx={LoginStyled.quotes}>
            One positive feedback per day or week can make us grow exponentially
          </Box>
        </Box>
        <Box sx={LoginStyled.auth}>
          <Box sx={LoginStyled.emailPass}>Email</Box>
          <TextField
            placeholder="Type your email"
            sx={LoginStyled.inputs}
            inputProps={{
              style: { ...HeaderStyled.inputsvaluefonts },
            }}
          />
        </Box>
        <Box sx={LoginStyled.auth}>
          <Box sx={LoginStyled.emailPass}>Password</Box>
          <TextField
            placeholder="Type your password"
            type={showPassword ? "text" : "password"}
            sx={LoginStyled.inputs}
            InputProps={{
              style: { ...HeaderStyled.inputsvaluefonts },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={LoginStyled.forgotPass} onClick={() => onForgotPassword()}>
          Forgot Password?
        </Box>
      </Box>
      <Box sx={LoginStyled.footer}>
        <Button sx={LoginStyled.loginButton} onClick={() => navigate("/team")}>
          Log in
        </Button>
      </Box>
      {Popup ? (
        <Box sx={LoginStyled.popup}>
          <Box sx={LoginStyled.popupin}>
            <Box>Password reset successful</Box>
            <Divider orientation="vertical" sx={LoginStyled.hrtag} />
            <RxCross2
              style={LoginStyled.cross}
              onClick={() => setPopup(false)}
            />
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
