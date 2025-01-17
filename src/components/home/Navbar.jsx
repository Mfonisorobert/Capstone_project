import React from "react";
import "./Navbar.css";
import Logo from "../../assets/lifelogo.png";
import { Link } from "react-router-dom";

const Navbar = ({ login }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar__ul">
        <li>
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#Our_features" className="nav-link">
            Features
          </a>
        </li>
        <li>
          <a href="#Insights" className="nav-link">
            About Us
          </a>
        </li>
        <li>Consult a Doctor</li>
        <li>
          <a href="#Insights" className="nav-link">
            Blog
          </a>
        </li>
        <li>
          <a href="#Footer" className="nav-link">
            Contact Us
          </a>
        </li>
        <div className="bt">
          {login && (
            <Link to={"/login"}>
              {/* <button className="btn1">Login</button> */}
            </Link>
          )}
          <Link to={"/register"}>
            <button className="btn2">Sign Up</button>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
