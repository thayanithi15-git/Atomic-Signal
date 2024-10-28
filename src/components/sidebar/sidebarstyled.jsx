import { Padding } from "@mui/icons-material";
import { borderRadius, color, display, fontSize, height, padding, width } from "@mui/system";

export const SidebarStyled = {
    main : {
        width: "70%",
        height: "100%",
        // backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Poppins, sans-serif",
    },
    top: {
        width: "100%",
        // backgroundColor: "yellow",
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    },
    bottom: {
        width: "100%",
        // backgroundColor: "blue",
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    },
    Logocon : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "90px",
        justifyContent: "center",
        width: "100%",
        gap: "0.5rem"
    },
    logoname : {
        width: "100%",
        color: "#EBEBEB",
        fontSize: "12px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    },
    hr: {
        width: "60%",
        backgroundColor: "#C2C2C2",

    },
    sidebars: {
        // backgroundColor: "red",
        padding: "50% 0% 0% 0%",
        // width: ""
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem"
    },
    iconcon: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.4rem",
        cursor: "pointer"
    },
    iconimgcontainer: {
        // width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#F5F5F5",
        backgroundColor: "#30287E",
        // padding: "25% 0% 25% 0%",
        width: "35px",
        height: "35px",
        borderRadius: "4px",
    },
    iconimgcontainerclicked: {
        // width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#F5F5F5",
        backgroundColor: "#49C792",
        // padding: "25% 0% 25% 0%",
        width: "35px",
        height: "35px",
        borderRadius: "4px",
    },
    iconimgsidebar: {
        fontSize: "20px",
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    sidename: {
        color: "#F5F5F5",
        fontSize: "12px"
    },
    options: {
        // backgroundColor: "red",
        padding: "50% 0% 40% 0%",
        // width: ""
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem"
    },
    iconimgsidebarlogout: {
        fontSize: "20px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: "#F44F5A"
    },
}