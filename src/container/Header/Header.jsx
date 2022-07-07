import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import ProfilePicture from "../../assets/images/bruno4.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="header__img_container"
      >
        <div className="header__img_layer">
          <Tilt
            className="Tilt"
            options={{ max: 20, perspective: 1000, speed: 100 }}
            style={{ height: 520, width: 520 }}
          >
            <img
              className="Tilt-inner"
              src={ProfilePicture}
              alt="Bruno profile img"
            />
          </Tilt>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ x: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="header__info"
      >
        <div className="header__tagline">
          <div className="header__tagline-title">
            <h1>HelloWorld</h1>
          </div>
          <div className="header__tagline-description">
            <p>
              <span>My Name is Bruno DaSilva.</span>
              <br />I am a Software Engineer based in Dallas, Texas. <br /> I
              have creative and inquisitive mind, which is key <br /> to
              pursuing my passion for coding.
            </p>
          </div>

          <div className="header__tagline-buttons">
            <p className="zero-margin">
              <a href="#">Resume</a>
            </p>
            <div className="pipe"></div>

            <p>
              <a href="#">Projects</a>
            </p>

            <div className="pipe"></div>

            <p>
              <a href="#">Contact</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
