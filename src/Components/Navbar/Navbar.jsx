import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import Logo from "../../assets/images/blogo-gray.png";
import "./Navbar.scss";

const NAV_LINKS = [
  {
    id: 1,
    name: "Resume |",
    path: "/resume",
  },
  {
    id: 2,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = ({ theme, changeTheme }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div
        className={theme ? "navbar__logo dark-mode" : "light-mode navbar__logo"}
      >
        <div>
          <Link aria-label="Logo" title="Open Home Page" to="/">
            <img src={Logo} alt="Bruno DaSilva Logo" />
          </Link>
        </div>
      </div>
      <ul className="navbar__links">
        <div
          onClick={() => changeTheme()}
          className={theme ? "dark-mode" : "light-mode"}
        >
          {theme ? <BsFillSunFill /> : <BsFillMoonFill />}
        </div>
        <li>
          <Link aria-label="Open Resume Page" title="Resume Page" to="resume">
            Resume
          </Link>
        </li>
        <div className="pipe"></div>
        <li>
          <Link
            aria-label="Open Projects Page"
            title="Projects Page"
            to="projects"
          >
            Projects
          </Link>
        </li>
        <div className="pipe"></div>

        <li>
          <Link
            aria-label="Open Contact Page"
            title="Contact Page"
            to="contact"
          >
            Contact
          </Link>
          <div className=""></div>
        </li>
      </ul>

      <div className="navbar__menu">
        <HiMenu size={30} onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="navbar__links">
              <li>
                <Link
                  aria-label="Open Resume Page"
                  title="Resume Page"
                  to="resume"
                  onClick={() => setToggle(false)}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Open Projects Page"
                  title="Projects Page"
                  to="projects"
                  onClick={() => setToggle(false)}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  aria-label="Open Contact Page"
                  title="Contact Page"
                  to="contact"
                  onClick={() => setToggle(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
