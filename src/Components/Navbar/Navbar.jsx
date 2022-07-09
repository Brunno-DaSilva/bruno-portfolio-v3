import React, { useState } from "react";
import Logo from "../../assets/images/blogo-gray.png";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

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
        <img src={Logo} alt="Bruno DaSilva Logo" />
      </div>
      <ul className="navbar__links">
        <li>
          <a href={`#`}>Resume</a>
        </li>
        <div className="pipe"></div>
        <li>
          <a href={`#`}>Projects</a>
        </li>
        <div className="pipe"></div>

        <li>
          <a href={`#`}>Contact</a>
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
                <a onClick={() => setToggle(false)} href={`#`}>
                  Resume
                </a>
              </li>
              <li>
                <a onClick={() => setToggle(false)} href={`#`}>
                  Projects
                </a>
              </li>

              <li>
                <a onClick={() => setToggle(false)} href={`#`}>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
