import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Pages
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import VerificationCode from "./pages/VerificationCode/VerificationCode";
import AccountCreated from "./pages/AccountCreated/AccountCreated";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Default route → Signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />

        {/* Auth Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/account-created" element={<AccountCreated />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 404 fallback → signup (NOT dashboard) */}
        <Route path="*" element={<Navigate to="/signup" replace />} />

      </Routes>
    </Router>
  );
}