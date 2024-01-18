import React from "react";
import "../Css/NAVBAR.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTelegram,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "../Documents/logo.png";

export const NAVBAR = () => {
  return (
    <>
      <nav className="NAVBAR">
        <div className="LOGO">
          <img className="ANIMIX" src={Logo} />
        </div>
        {/* SECOND MENU */}
        <div className="MENU">
          <ul>
            <li>
              <Link className="ABC" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="ABC" to="/About">
                About
              </Link>
            </li>
            <li>
              <Link className="ABC" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* SOCIAL MEDIA LINK */}
        {/* <div className="SOCIAL"> */}
        <div>
          <div className="SOCIAL">
            <ul>
              <li href="#">
                <FaFacebookSquare />
              </li>

              <li href="#">
                <FaInstagramSquare />
              </li>

              <li href="#">
                <FaTelegram />
              </li>
            </ul>
          </div>

          <div className="BURGER">
            <a href="#">
              <GiHamburgerMenu />
            </a>
          </div>
        </div>

        {/* </div> */}
      </nav>
    </>
  );
};
