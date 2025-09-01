import React from "react";
import { Link } from "react-router-dom";


function Navber() {
  return (
    <nav className="bg-blue-400 flex justify-between items-center px-4 h-14">
      <div className="logo font-bold text-xl">Pass Manager</div>
      <ul>
        <li className="flex gap-4">
          <Link className="hover:font-bold" to="/">Home</Link>
          <Link className="hover:font-bold" to="/about">About</Link>
          <Link to="mailto:arafat.rahman.6003@gmail.com">Contect</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navber;
