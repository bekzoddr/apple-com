import React from "react";
import "./navbar.css";
import { NAVBAR__LINKS } from "../../static/Index";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
function Navbar() {
  let navLinks = NAVBAR__LINKS.map((el, index) => (
    <li key={index} className="nav__item">
      <a href="#">{el}</a>
    </li>
  ));
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <FaApple className="navLogo" />
      </a>
      <ul className="nav__list">
        {navLinks}
        <div className="icons">
          <IoIosSearch className="search icon" />
          <MdOutlineShoppingBag className="lock icon" />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
