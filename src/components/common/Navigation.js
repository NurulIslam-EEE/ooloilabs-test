import React from "react";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container nav-container">
        <div className="logo-container ">
          <img src="/logo.webp" alt="" width="100%" />
        </div>

        <button className="nav-btn">Book a demo</button>
      </div>
    </div>
  );
}

export default Navigation;
