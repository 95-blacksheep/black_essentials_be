import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { IoMdCloseCircleOutline } from "react-icons/io";


const Header = () => {
  return (
    <nav>
      <div className="nav_container">
        <Link to="/" className="nav_logo">
          <img src={logo} alt="Black Essentials Logo" />
        </Link>


        <ul className="nav_menu">
          <li>
            <Link to="/profile/xxx">James Gunner</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>


        <button className="nav_toggle_btn">
          <IoMdCloseCircleOutline />
        </button>
      </div>
    </nav>
  );
};


export default Header;
