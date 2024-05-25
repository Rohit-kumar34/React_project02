import React from "react";

const Navbar = () => {
  return (
    <nav className="nav_container">
      <div>
        <img src="./images/nav_logo.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
