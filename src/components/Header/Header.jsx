import React from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h3>This is header</h3>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/mobiles"}>Mobiles</NavLink>
        <NavLink to={"/laptops"}>Laptops</NavLink>
      </nav>
    </div>
  );
};

export default Header;
