import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Login />} />
        <Route path="/resetpassword" element={<Login />} />
        <Route path="/team" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
