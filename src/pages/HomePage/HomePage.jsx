import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      {/* Navbar should be placed at the top */}
      <Navbar />

      {/* Content of the HomePage */}
      <div className="p-3">
        <h1 className="text-2xl font-bold">Welcome to HomePage</h1>
      </div>
    </div>
  );
};

export default HomePage;
