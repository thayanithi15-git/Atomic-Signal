import zIndex from "@mui/material/styles/zIndex";

export const TableStyled = {
  tablePaper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Poppins, sans-serif",
  },
  tableContainer: {
    flexGrow: 1,
    overflowX: "auto",
    "&::-webkit-scrollbar": { display: "none" },
  },

  tableheadsticky: {
    position: "sticky",
    right: "0",
    backgroundColor: "#fff",
    zIndex: "1",
  },
  tableHeadCell: {
    borderBottom: "2px solid #EDEDED",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 1,
    "&:first-of-type": {
      position: "sticky",
      left: 0,
    },
    "&:last-of-type": {
      position: "sticky",
      right: 0,
      borderLeft: "2px solid #EDEDED",
      backgroundColor: "#fff",
    },
  },
  tableBodyCell: (isSticky) => ({
    height: "100%",
    width: "100%",
    borderBottom: "none",
    backgroundColor: isSticky ? "#fff" : "inherit",
    zIndex: isSticky ? 1 : "auto",
    position: isSticky ? "sticky" : "static",
  }),
  actionsBorder: {
    borderLeft: "2px solid #EDEDED",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    height: "100vh",
    width: "100%",
  },
  tablePagination: {
    borderTop: "2px solid #EDEDED",
  },
  profilename: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  actions: {
    display: "flex",
    gap: "1.1rem",
    alignItems: "center",
    justifyContent: "center",
  },
  feedback: {
    backgroundColor: "#49C792",
    color: "white",
    padding: "3% 10%",
    borderRadius: "6px",
    textTransform: "none",
    cursor: "pointer",  
  },
  edit: {
    color: "#49C792",
    borderRadius: "50px",
    padding: "10px",
    // fontsize: "54px",
    backgroundColor: "EEFBF6",
    cursor: "pointer",
  },
  inputsvaluefonts: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "12px",
    cursor: "pointer"
  },
  speedometercon: {
    display: "flex",
    justifyContent: "center",
    marginTop: "-23px",
    cursor: "pointer"
  },
  speedometer: {
    
  }
};
