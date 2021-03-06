import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsFillSunFill } from "react-icons/bs";
import { WiMoonAltFirstQuarter } from "react-icons/wi";

import Logo from "../../assets/images/blogo-gray.png";
import WhiteLogo from "../../assets/images/b-logo-white.png";

import "./Navbar.scss";

const Navbar = ({ theme, changeTheme }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div
        className={
          theme ? "navbar__logo light-mode " : "navbar__logo  dark-mode"
        }
      >
        <div>
          <NavLink aria-label="Logo" title="Open Home Page" to="/">
            {theme ? (
              <img src={Logo} alt="Bruno DaSilva Logo" />
            ) : (
              <img src={WhiteLogo} alt="Bruno DaSilva Logo" />
            )}
          </NavLink>
        </div>
      </div>
      <ul className="navbar__links">
        <div
          onClick={() => changeTheme()}
          className={theme ? "icon light-mode" : " icon dark-mode"}
          title={theme ? "Switch to Light Theme" : "Switch to Dark Theme"}
        >
          {theme ? (
            <WiMoonAltFirstQuarter color="hsl(181, 75%, 11%)" size={25} />
          ) : (
            <BsFillSunFill color="hsl(37, 98%, 53%)" size={25} />
          )}
        </div>
        <li>
          <NavLink
            aria-label="Open Resume Page"
            title="Resume Page"
            to="resume"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Resume
          </NavLink>
        </li>
        <div className="pipe"></div>
        <li>
          <NavLink
            aria-label="Open Projects Page"
            title="Projects Page"
            to="projects"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Projects
          </NavLink>
        </li>
        <div className="pipe"></div>

        <li>
          <NavLink
            aria-label="Open Contact Page"
            title="Contact Page"
            to="contact"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Contact
          </NavLink>
          <div className=""></div>
        </li>
      </ul>

      <div className="navbar__menu">
        <HiMenu size={30} onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            style={{ cursor: "pointer" }}
          >
            <HiX onClick={() => setToggle(false)} />

            <ul className="navbar__links">
              <span
                onClick={() => changeTheme()}
                className={theme ? "dark-mode icon-mb" : "light-mode icon-mb"}
              >
                {theme ? (
                  <WiMoonAltFirstQuarter color="hsl(181, 75%, 11%)" size={10} />
                ) : (
                  <BsFillSunFill color="hsl(37, 98%, 53%)" size={10} />
                )}
              </span>
              <li>
                <NavLink
                  aria-label="Open Resume Page"
                  title="Resume Page"
                  to="resume"
                  onClick={() => setToggle(false)}
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  aria-label="Open Projects Page"
                  title="Projects Page"
                  to="projects"
                  onClick={() => setToggle(false)}
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  aria-label="Open Contact Page"
                  title="Contact Page"
                  to="contact"
                  onClick={() => setToggle(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
