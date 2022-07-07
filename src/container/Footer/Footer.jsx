import React from "react";
import { AiFillHeart } from "react-icons/ai";

import "./Footer.scss";
const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__media">
          <h3>LinkedIn</h3>
          <span>
            Profile:{" "}
            <a
              className="hover-underline-animation"
              href="https://www.linkedin.com/in/bruno-dasilva/"
            >
              <span> Bruno-DaSilva</span>
            </a>
          </span>
        </div>
        <div className="footer__media">
          <h3>GitHub</h3>
          <span>
            Profile:{" "}
            <a
              className="hover-underline-animation"
              href="https://github.com/Brunno-DaSilva"
            >
              <span>Brunno-DaSilva </span>
            </a>
          </span>
        </div>

        <div className="footer__sig">
          <p>
            <span>©{getYear()}</span> made with{" "}
            <AiFillHeart className="tomate" /> by Bruno DaSilva
          </p>
          <span>
            About this portfolio:{" "}
            <a
              className="hover-underline-animation"
              href="https://github.com/Brunno-DaSilva/bruno-portfolio-v3"
            >
              README
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
