import React from "react";
import { useNavigate } from "react-router-dom";
// import bgImage from "../../assets/grid.webp";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Navigate back to home page
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center gap-y-[50px]"
      style={{
        // backgroundImage: url(${bgImage}),
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
      <p className="text-xl text-white">Sorry, the page you are looking for does not exist.</p>
      <button
        onClick={handleBackToHome}
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Back to Home
      </button>
    </div>
  );
};

export default PageNotFound;