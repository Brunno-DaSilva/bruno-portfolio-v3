import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import ProfilePicture from "../../assets/images/Profile_pic_sq_two_noBG.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="header__img_container"
      >
        <Tilt
          className="Tilt"
          options={{ max: 20, perspective: 1000, speed: 100, scale: -1 }}
          style={{ height: 500, width: 500 }}
        >
          <img
            className="Tilt-inner"
            src={ProfilePicture}
            alt="Bruno profile img"
          />
        </Tilt>
      </motion.div>
      <motion.div
        whileInView={{ x: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="header__info"
      >
        <div className="header__tagline">
          <h1>HelloWorld</h1>
          <div>
            <p>
              <span>My Name is Bruno DaSilva.</span>
              <br />I am a Software Engineer based in Dallas, Texas. <br /> I
              have creative and inquisitive mind, which is key <br /> to
              pursuing my passion for coding.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
