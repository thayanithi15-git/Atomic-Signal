import { Box } from "@mui/material";
import React from "react";
import Signin from "../../components/signin/signin";
import { LoginStyledMain } from "./loginstyled";

export default function Login() {
  return (
    <Box sx={LoginStyledMain.loginmain}>
      <Signin />
    </Box>
  );
}
