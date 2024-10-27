import { border, borderRadius, color, display, fontSize, fontWeight, height, textAlign, textTransform, width } from "@mui/system";

export const HeaderStyled = {
    header: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Poppins, sans-serif",
    },
    teammembers: {
        color: "#353448",
        fontSize: "20px",
        
      fontStyle: "normal",
      fontWeight: "600"
    },
    rightoptions: {
        display: "flex",
        gap: "1rem"
    },
    checkboxname: {
        width: "27%",
        display: "flex",
        alignItems: "center"
    },
    show: {
        color: "#353448",
        fontSize: "14px"
    },
    checkbox: {
        "&.Mui-checked": {
      color: "#49C792", 
    },
    "&.MuiCheckbox-root": {
      color: "#49C792", 
    },
    "&.Mui-checked:hover": {
      backgroundColor: "rgba(73, 199, 146, 0.08)",
    },
    },
    inputcontainer : {
        alignItems: "center",
        // height: "10px",
        overflow: "hidden",
        display: "flex",
        alignSelf: "center"
    },
    input: {
         "&::placeholder": {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        color: "#C2C1C7",
        fontSize: "14px",
      },
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
    filter: {
        backgroundColor: "#49C792",
        color: "white",
        height: "40px",
        width: "45px",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    hr : {
        backgroundColor: "#CACACA",
        alignItems: "center",
        display: "flex",
        height: "24px",
        width: "1px",
        alignSelf: "center"
    },
    import: {
        border: "1.5px solid #49C792",
        color: "#49C792",
        textTransform: "none",
        gap: "0.3rem",
        fontSize: "14px",
        height: "40px",
        display: "flex",
        alignSelf: "center"
    },
    importicon: {
        fontSize: "23px",
    },
    addmember: {
        fontSize: "14px",
        height: "40px",
        display: "flex",
        alignSelf: "center",
        backgroundColor: "#49C792",
        color: "#FFFFFF",
        textTransform: "none",
        width: "136px"
    }
}