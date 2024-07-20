import React from 'react';
import CartWidget from "./CartWidget/CartWidget";
import logo from "../assets/imagenes/FiteBive.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-neutral-950 p-2">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="FiteVibe Logo"
              className="h-12 rounded-sm shadow-md transition-shadow duration-300 hover:shadow-lg"
            />
          </Link>
        </div>
        <ul className="flex-1 flex justify-center space-x-4">
          <li className="text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-colors duration-300 p-2 rounded-md">
            <Link to="/musculacion">Musculación</Link>
          </li>
          <li className="text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-colors duration-300 p-2 rounded-md">
            <Link to="/productos/yogaypilates">Yoga y Pilates</Link>
          </li>
          <li className="text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-colors duration-300 p-2 rounded-md">
            <Link to="/accesorios">Accesorios</Link>
          </li>
          <li className="text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-colors duration-300 p-2 rounded-md">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        <div className="text-white flex items-center space-x-4">
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
