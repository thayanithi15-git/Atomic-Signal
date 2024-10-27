export const LoginStyled = {
    page: {
      height: "85%",
      width: "90%",
    },
    atomicSignalImg: {
      width: "170px",
    },
    body: {
      height: "80%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    footer: {
      height: "20%",
      display: "flex",
      alignItems: "center",
    },
    loginButton: {
      textTransform: "none",
      backgroundColor: "#49c792",
      color: "#ffffff",
      borderRadius: "4px",
      width: "100%",
      height: "50%",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      textAlign: "center",
    },
    welcomeQuotes: {
      height: "25%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    welcome: {
      color: "#0e1824",
      fontSize: "20px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
    },
    quotes: {
      color: "#71707e",
      fontSize: "14px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
    },
    emailPass: {
      color: "#262c33",
      fontSize: "12px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
    },
    forgotPass: {
      cursor: "pointer",
      color: "#353448",
      fontSize: "14px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      textDecoration: "underline",
      marginLeft: "auto",
    },
    auth: {
      display: "flex",
      flexDirection: "column",
      height: "23%",
      justifyContent: "space-between",
    },
    inputs: {
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
  };
  