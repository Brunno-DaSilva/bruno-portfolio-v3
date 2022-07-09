import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import ContactImage from "../../assets/images/contact_3d.png";
import { urlFor, client } from "../../client";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">
        <h1>Contact</h1>
      </div>
      <div className="contact__main">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="main__left-col"
        >
          <div className="contact__img_layer">
            <Tilt
              className="Tilt"
              options={{ max: 20, perspective: 1000, speed: 100 }}
              style={{ height: 450, width: 450 }}
            >
              <img src={ContactImage} alt="Images contact" />
            </Tilt>
          </div>
        </motion.div>
        <div className="main__right-col"></div>
      </div>
    </div>
  );
};

export default Contact;
