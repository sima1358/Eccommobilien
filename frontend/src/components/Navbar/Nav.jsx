import React from "react";
import "./nav.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

export const Nav = () => {
 

  return (
    <section className="container">
      <div id="logo">
        <img className="my-logo" src={logo} alt="logo" />
      </div>
      <div className="navbar">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <NavLink
              to="/"
              id="navbar"
              className="nav-link active"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/rent-card" id="navbar" className="nav-link">
              Rent List
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/sale-card" id="navbar" className="nav-link">
              Sale List
            </NavLink>
          </li>
          <li class="nav-item contact">
            <NavLink  to="/contact-us"  className="nav-link">
              Contact
            </NavLink>
          </li>

          <li class="btn">
            <NavLink to="/login" >
              <button>Login</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
 