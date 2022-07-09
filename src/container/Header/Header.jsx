import React, { useState, useEffect, Fragment } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import "./Header.scss";

const Header = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "aboutData"]';

    client.fetch(query).then((data) => {
      setAboutData(data);
    });
  }, []);

  return (
    <Fragment>
      {aboutData.map(({ title, subtitle, description, imgUrl }) => {
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
                    src={urlFor(imgUrl)}
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
                  <h1>{title}</h1>
                </div>
                <div className="header__tagline-description">
                  <p>
                    <span>{subtitle}</span> <br />
                    {description}
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
      })}
    </Fragment>
  );
};

export default Header;
