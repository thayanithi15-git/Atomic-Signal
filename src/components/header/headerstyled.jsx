import zIndex from "@mui/material/styles/zIndex";
import { color } from "highcharts";

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
      position: "relative",
        alignItems: "center",
        // height: "10px",
        overflow: "hidden",
        display: "flex",
        alignSelf: "center",
        
    },
    input: {
      border: "1px solid #CACACA",
      borderRadius: "4px",
      // backgroundColor: "red",
      // paddingLeft: "25px",
      //  marginleft: "50px",
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
        paddingLeft: "25px"
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
      cursor: "pointer",
        backgroundColor: "#49C792",
        color: "white",
        height: "40px",
        width: "48px",
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
      
      fontFamily: "Poppins, sans-serif",
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
        fontSize: "22px",
    },
    addmember: {
      
      fontFamily: "Poppins, sans-serif",
        fontSize: "14px",
        height: "40px",
        display: "flex",
        alignSelf: "center",
        backgroundColor: "#49C792",
        color: "#FFFFFF",
        textTransform: "none",
        width: "136px"
    },
    dialog: {
      
      display: "flex",
      flexDirection: "column",
      fontFamily: "Poppins, sans-serif",
      "& .MuiPaper-root": {
        width: "400px",
        marginLeft: "auto"
        // height: "900px"
        // height: "",
        // overflow: "hidden",
      }
    },
    adddialog: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      
      height: "100%"
    },
    addmembertitlecon: {
      height: "60px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#353448",
      fontSize: "16px",
      fontWeight: "600",
      borderBottom : "1px solid #EBEBEB"
    },
    allinput: {
      width: "85%",
      justifyContent: "space-evenly",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    },
    addmembertitle: {
      width: "85%",
      display: "flex",
    },
    nameasterisk: {
      display: "flex",
      gap: "1%",
      color: "#484759",
      fontSize: "12px",
    },
    asterisk: {
      color: "red"
    },
    nameinputs: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "7px"
    },
    bottomdialogbuttons: {
      marginTop: "3%",
      display: "flex",
      justifyContent: "space-between",
    },
    addmemberconfirm: {
      fontFamily: "Poppins, sans-serif",
        fontSize: "14px",
        height: "40px",
        display: "flex",
        alignSelf: "center",
        backgroundColor: "#49C792",
        color: "#FFFFFF",
        textTransform: "none",
        width: "45%"
    },
    cancelconfirm: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "14px",
      height: "40px",
      display: "flex",
      alignSelf: "center",
      border: "1px solid #49C792",
      backgroundColor: "white",
      color: "#49C792",
      textTransform: "none",
      width: "45%"
    },
    inputs: {
      width: "100%",
      "&::placeholder": {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 100,
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
    dialoground: {
      cursor: "pointer",
      position: "absolute",
      right: 430, 
      top: 8,
      backgroundColor: "white",
      zIndex: 1301,
      padding: "10px",
      fontSize: "25px",
      borderRadius: "50px"
    },
    bottomdialogbuttonsfilter: {
      display: "flex",
      justifyContent: "space-between",
    },
    allinputfilter: {
      width: "85%",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
      height: "88%"
    },
    overallperform: {
      fontSize: "12px",
      color: "#484759",
      marginTop: "5%"
    },
    performancetypes: {
      display: "flex",
      flexDirection: "column",
      gap: "13px",
    },
    eachperform: {
      gap: "13px",
      display: "flex"
    },
    perform: {
      border: "1px solid #EBEBEB",
      backgroundColor: "#FFFFFF",
      fontSize: "14px",
      color: "#353448",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
      // padding: "1%"
    },
    performclick: {
      border: "1px solid #49C792",
      backgroundColor: "#EEFBF6",
      fontSize: "14px",
      color: "#353448",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
    },
    filtermain : {
      height: "100%",
      // backgroundColor: "red",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "space-evenly"
      gap: "20px"
    },
    roletitle: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    },
    toaster: {
        // position: "absolute",
        // display: "none"
    },
    searchicon: {
      position: "absolute",
    left: "10px",
    // top: "50%",
    // transform: "translateY(-50%)",
    width: "20px",
    height: "20px",
    color: "#888888",
    },
    inputsvaluefonts: {
      fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
    },
    inputsselect: {
      height: "40px",
              fontSize: "14px",
              fontFamily: "Poppins, sans-serif",
              // padding: "0px 14px",
              // lineHeight: "1.5",
              // borderRadius: "8px",
              color: "black",
              // backgroundColor: "#F5F7FA",
              ".MuiSvgIcon-root": {
                color: "#091B29",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #E4E8EE",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #E4E8EE",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #E4E8EE",
              },
    },
    items: {
      fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
    },
    placeholder: {
      fontFamily: "Poppins, sans-serif",
      color: "#A2A2A2",
      fontWeight: "300",
      fontStyle: "normal"
    }
    
}