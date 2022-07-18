import React from "react";

import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

import "./Footer.scss";

const Footer = ({ theme }) => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={theme ? "dark-mode footer" : "light-mode footer"}>
      <div className="footer__container">
        <div className="footer__media">
          <h3>LinkedIn</h3>
          <span>
            Profile:{" "}
            <a
              className="hover-underline-animation"
              href="https://www.linkedin.com/in/bruno-dasilva/"
              aria-label="Open Bruno's Profile on Linkedin"
              title="Go to my Linkedin profile"
              target="_blank"
              rel="noopener noreferrer"
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
              aria-label="Open Bruno's Profile on GitHub"
              title="Go to my GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Brunno-DaSilva </span>
            </a>
          </span>
        </div>{" "}
        <div className="footer__media">
          <h3>Contact</h3>
          <span>
            Go to:{" "}
            <Link
              to="contact"
              className="hover-underline-animation"
              aria-label="Open Contact Form Page"
            >
              <span>Contact Form</span>
            </Link>
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
              target="_blank"
              rel="noopener noreferrer"
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
