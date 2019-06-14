import React from "react";

// component
import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <Nav />
      <Logo />
    </div>
  );
};

export default Header;
