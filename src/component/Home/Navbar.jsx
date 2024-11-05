import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import cart from "../../assets/cart.png";
import heart from "../../assets/heart.png";
import search from "../../assets/search.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="ml-4" />
          <ol className="flex gap-5 ml-9 text-[#df9449] font-playfair list-none">
            <li>
              <NavLink
                exact="true"
                to="/"
                className={({ isActive }) =>
                  isActive ? " font-bold hover:underline" : "hover:underline"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? " font-bold hover:underline" : "hover:underline"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? " font-bold hover:underline" : "hover:underline"
                }
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? " font-bold hover:underline" : "hover:underline"
                }
              >
                Contact
              </NavLink>
            </li>
          </ol>
        </div>
        <div className="flex items-center gap-4">
          <img src={search} alt="Search" className="cursor-pointer" />
          <img src={heart} alt="Favorites" className="cursor-pointer" />
          <NavLink to="/cart">
            <img src={cart} alt="Cart" className="cursor-pointer" />
          </NavLink>
          <button className="bg-[#C0772C] rounded-lg p-2 w-[90px] text-center text-white ml-5">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
