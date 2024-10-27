import { Box, Button, Checkbox, Divider, TextField } from "@mui/material";
import React from "react";
import { HeaderStyled } from "./headerstyled";
import { BiFilterAlt } from "react-icons/bi";
import { TbFileTypeXls } from "react-icons/tb";

export default function Header() {
  return (
    <Box sx={HeaderStyled.header}>
      <Box sx={HeaderStyled.teammembers}>Team members</Box>
      <Box sx={HeaderStyled.rightoptions}>
        <Box sx={HeaderStyled.checkboxname}>
          <Checkbox defaultChecked sx={HeaderStyled.checkbox} />
          <Box sx={HeaderStyled.show}>Show only my reportees</Box>
        </Box>
        <Box sx={HeaderStyled.inputcontainer}>
          <TextField
            sx={HeaderStyled.input}
            placeholder="Search by name, email"
          />
        </Box>
        <Box sx={HeaderStyled.filter}>
          <BiFilterAlt style={HeaderStyled.importicon}/>
        </Box>
        <Divider sx={HeaderStyled.hr}/>
        <Button sx={HeaderStyled.import}>
          <TbFileTypeXls style={HeaderStyled.importicon}/>
          <Box>Import</Box>
        </Button>
        <Button sx={HeaderStyled.addmember}>Add member</Button>
      </Box>
    </Box>
  );
}
