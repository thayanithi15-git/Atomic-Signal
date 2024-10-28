import { Box } from "@mui/material";
import React, { useState } from "react";
import { TeamStyled } from "./teamstyled";
import Header from "../../components/header/header";
import TeamTable from "../../components/tables/table";

export default function Team() {

  const [filterText, setFilterText] = useState("");

  return (
    <Box sx={TeamStyled.main}>
      <Box sx={TeamStyled.header}>
        <Header onSearch={setFilterText}/>
      </Box>
      <Box sx={TeamStyled.body}>
        <TeamTable filterText={filterText}/>
      </Box>
    </Box>
  );
}
