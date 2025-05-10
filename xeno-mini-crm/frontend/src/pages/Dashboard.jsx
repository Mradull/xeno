// src/pages/Dashboard.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const location = useLocation();

  // Check if the query parameter 'loginSuccess' is present in the URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const loginSuccess = params.get('loginSuccess');

    if (loginSuccess === 'true') {
      // Show an alert when the login is successful
      alert("Login successful!");
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h2>Welcome to Xeno Mini CRM</h2>
        <div className="dashboard-links">
          <Link to="/campaigns/new" className="card">➕ Create New Campaign</Link>
          <Link to="/campaigns/history" className="card">📜 View Campaign History</Link>
        </div>
      </div>
    </>
  );
}
