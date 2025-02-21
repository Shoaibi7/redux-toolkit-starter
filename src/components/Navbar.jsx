// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ textAlign: "center", marginBottom: "20px" }}>
      <Link
        to="/"
        style={{ margin: "10px", textDecoration: "none", fontSize: "20px" }}
      >
        Home
      </Link>
      <Link
        to="/counter"
        style={{ margin: "10px", textDecoration: "none", fontSize: "20px" }}
      >
        Counter
      </Link>
      <Link
        to="/about"
        style={{ margin: "10px", textDecoration: "none", fontSize: "20px" }}
      >
        About
      </Link>
      <Link
        to="/todo"
        style={{ margin: "10px", textDecoration: "none", fontSize: "20px" }}
      >
        Todo
      </Link>
    </nav>
  );
}

export default Navbar;
