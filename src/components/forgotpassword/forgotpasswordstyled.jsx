import { display, fontSize, fontWeight, height } from "@mui/system";
import React from "react";

export const ForgotPasswordStyled = {
  page: {
    height: "85%",
    width: "90%",
    fontFamily: "Poppins, sans-serif",
    fontStyle: "normal",
    display: "flex",
    flexDirection: "column",
  },
  body: {
    height: "70%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
    // justifyContent: "space-evenly"
    // Uncomment and adjust background color if needed
    // backgroundColor: "aqua",
  },
  footer: {
    height: "30%",
    // backgroundColor: "aquamarine",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
    // justifyContent: "space-between"
  },
  welcomeQuotes: {
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  welcome: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#0E1824"
  },
  quotes: {
    fontSize: "14px",
    color: "#555",
    width: "80%"
  },
  auth: {
    // marginTop: "1rem",
    // marginBottom: "1rem",
    height: "45%",
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem"
  },
  emailPass: {
    // fontSize: "0.9rem",
    fontWeight: "500",
    // marginBottom: "0.5rem",
  },
  input: {
    width: "100%",
    fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      "& .MuiOutlinedInput-root": {
        height: "40px",
        width: "100%",
        borderRadius: "4px",
        overflow: "hidden",
        backgroundColor: "#fff",
        border: "1px solid #ebebeb",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#b0b0b0",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3f51b5",
      },
    },


  
  getlink: {
    fontSize: "14px",
    backgroundColor: "#49c792",
    color: "white",
    textTransform: "none",
    fontFamily: "Poppins, sans-serif",
  },
  alreadyLogin: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "1rem",
    color: "#333",
    fontSize: "14px",
    gap: "0.5rem"
  },
  signupLogin: {
    color: "#353448",
    cursor: "pointer",
    fontWeight: "600",
    // marginLeft: "0.5rem",
    textDecoration: "underline",
  },
};
