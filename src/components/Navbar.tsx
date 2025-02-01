import React from "react";

const Navbar = () => {
  const user = "Danish Belal"; // This could be dynamic, coming from props or context

  return (
    <nav className="navbar w-full h-20 flex items-center justify-between bg-black px-8 shadow-md">
      {/* Logo Section */}
      <div className="logo">
        <h1 className="text-blue text-2xl font-bold">ScoreBook</h1>
      </div>

      {/* Navigation Links */}
      <div className="nav-links flex gap-6">
        <button className="text-gray hover:text-blue transition-all duration-200">
          About Us
        </button>
        <button className="text-gray hover:text-blue transition-all duration-200">
          Contact
        </button>
      </div>

      {/* User Section */}
      <div className="user-section flex items-center gap-6">
        {user ? (
          <>
            <div className="user-name text-gray font-medium">{user}</div>
            <button className="logout-button text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-all duration-200">
              Logout
            </button>
          </>
        ) : (
          <div className="auth-buttons flex gap-4">
            <button className="signin-button text-white bg-blue px-4 py-2 rounded hover:bg-blueHover transition-all duration-200">
              Signin
            </button>
            <button className="signup-button text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition-all duration-200">
              Signup
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
