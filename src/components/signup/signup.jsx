import { Box, Button, Divider, TextField } from "@mui/material";
import React from "react";
import Google from "../../assets/Google.png";
import Microsoft from "../../assets/Microsoft.png";
import { SignupStyled } from "./signupstyled";
import { useNavigate } from "react-router-dom";
import { HeaderStyled } from "../header/headerstyled";

export default function Signup({ onLogin }) {

const navigate = useNavigate()

  return (
    <Box sx={SignupStyled.page}>
      <Box sx={SignupStyled.welcomeQuotes}>
        <Box sx={SignupStyled.welcome}>Sign up</Box>
        <Box sx={SignupStyled.quotes}>
          You're just a few details away to set up a culture of feedback and
          thriving environment
        </Box>
      </Box>
      <Box sx={SignupStyled.tags}>
        <Box sx={SignupStyled.googleSignup}>
          <Box sx={SignupStyled.iconContainer}>
            <img src={Google} alt="Google Icon" style={SignupStyled.icons} />
          </Box>
          <Box>Sign up with Google</Box>
        </Box>
        <Box sx={SignupStyled.microsoftSignup}>
          <Box sx={SignupStyled.iconContainer}>
            <img src={Microsoft} alt="Microsoft Icon" style={SignupStyled.icons} />
          </Box>
          <Box>Sign up with Outlook</Box>
        </Box>
        <Box sx={SignupStyled.orHrSignup}>
          <Divider sx={SignupStyled.hrSignup} />
          <Box>or</Box>
          <Divider sx={SignupStyled.hrSignup} />
        </Box>
      </Box>
      <Box sx={SignupStyled.bottom}>
        <Box sx={SignupStyled.workEmail}>
          <Box>Work Email</Box>
          <Box sx={{ color: "red" }}>*</Box>
        </Box>
        <TextField sx={SignupStyled.inputs} placeholder="Email" inputProps={{
              style: { ...HeaderStyled.inputsvaluefonts },
            }}/>
        <Button
          sx={SignupStyled.signupbuttons}
          onClick={() => navigate("/team")}
        >
          Sign up
        </Button>
        <Box sx={SignupStyled.alreadyLogin}>
          <Box>Already have an account?</Box>
          <Box onClick={() => onLogin()} sx={SignupStyled.loginLink}>
            Log in
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
