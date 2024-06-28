import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="container mx-auto">
      <div className="shadow-md w-5/6 mx-auto px-10 py-3 mt-3 rounded flex justify-between items-center">
        <div className="text-red-600 font-bold">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex gap-5">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "font-bold text-orange-800" : "";
              }}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? "font-bold text-orange-800" : "";
              }}
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive ? "font-bold text-orange-800" : "";
              }}
            >
              Contact
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/github"
              className={({ isActive }) => {
                return isActive ? "font-bold text-orange-800" : "";
              }}
            >
              Github
            </NavLink>
          </div>
        </div>
        <div className="flex ">
          <div>
            {" "}
            <Link className="font-bold">Login</Link>
          </div>
          <div style={{ marginTop: "-3px" }}>
            {" "}
            <Link>
              <button className="px-2 bg-red-700 rounded py-1 ms-3 mb-0 text-white  hover:bg-orange-800 ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
