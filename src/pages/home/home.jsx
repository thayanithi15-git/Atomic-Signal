import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/sidebar/sidebar";
import Team from "../body/team";
import { HomeStyled } from "./homestyled";

export default function Home() {
  const [Page, setPage] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePage = (id) => setPage(id);
  const handleSearch = (query) => setSearchQuery(query);

  return (
    <Box sx={HomeStyled.page}>
      <Box sx={HomeStyled.sidebar}>
        <Sidebar onSidebar={handlePage} />
      </Box>
      <Box sx={HomeStyled.body}>
        {Page === 2 ? (
          <>
            <Team />
          </>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}
