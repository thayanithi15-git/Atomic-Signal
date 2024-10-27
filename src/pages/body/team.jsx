import { Box } from "@mui/material";
import React from "react";
import { TeamStyled } from "./teamstyled";
import Header from "../../components/header/header";
import TeamTable from "../../components/tables/table";

export default function Team() {
  return (
    <Box sx={TeamStyled.main}>
      <Box sx={TeamStyled.header}>
        <Header />
      </Box>
      <Box sx={TeamStyled.body}>
        <TeamTable />
      </Box>
    </Box>
  );
}
