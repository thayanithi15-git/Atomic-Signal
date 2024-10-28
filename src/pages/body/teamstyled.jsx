import { borderRadius, display, height } from "@mui/system";

export const TeamStyled = {
    main: {
        backgroundColor: "#F0F0F0",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        height: "14%",
        width: "95%",
        display: "flex",
        alignItems: "center",
    },
    body: {
        height: "82%",
        width: "95%",
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden"
    }
}