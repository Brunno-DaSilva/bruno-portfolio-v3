import React, { useState } from "react";

import Logo from "../../assets/images/blogo-gray.png";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={Logo} alt="Bruno DaSilva Logo" />
        </Link>
      </div>
      <ul className="navbar__links">
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
