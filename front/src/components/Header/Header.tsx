import React from "react";
import Login from "./LogOut";
import Menu from "./Menu";

import Logo from "../../assets/images/ME_logo.png"

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="ME_logo" />
      <Menu />
      <Login/>
    </header>
  );
};

export default Header;
