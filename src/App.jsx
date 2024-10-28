import React from "react";
import Routers from "./routers/routers";
import { Box } from "@mui/material";
import { TeamProvider } from "./components/usecontext/usecontext";

export default function App() {
  return (
    <TeamProvider>
      <Routers />
    </TeamProvider>
  );
}
