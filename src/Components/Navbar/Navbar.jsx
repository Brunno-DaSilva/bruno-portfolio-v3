import React from "react";
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
const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
