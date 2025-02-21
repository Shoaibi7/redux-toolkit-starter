// src/pages/Home.jsx
import React from "react";
import Hyperspeed from "../blocks/Backgrounds/Hyperspeed/Hyperspeed";
import Aurora from "../blocks/Backgrounds/Aurora/Aurora";
function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="bg-red-500 p-4">Welcome to the Redux Toolkit App!</h1>
      <p>This is the home page.</p>

      <Aurora />
    </div>
  );
}

export default Home;
