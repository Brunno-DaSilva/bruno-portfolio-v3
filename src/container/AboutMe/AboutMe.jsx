import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { PacmanLoader } from "react-spinners";

import bgImageYellow from "../../assets/images/background_yellow.png";
import bgImageGreen from "../../assets/images/Background_green.png";

import "./AboutMe.scss";

const AboutMe = ({ theme, changeTheme }) => {
  const [aboutData, setAboutData] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "aboutData"]';

    client.fetch(query).then((data) => {
      setAboutData(data);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

  const bgImage = theme ? `url(${bgImageYellow})` : `url(${bgImageGreen})`;

  return (
    <div className={theme ? "header dark-mode" : "header light-mode"}>
      {loading ? (
        <PacmanLoader
          size={80}
          color={theme ? "hsl(39, 56%, 58%)" : "hsl(183, 33%, 72%)"}
          loading
        />
      ) : (
        <Fragment>
          {aboutData.map(({ title, subtitle, description, imgUrl }) => {
            return (
              <Fragment key={title}>
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.8 }}
                  className="header__img_container"
                >
                  <div
                    className="header__img_layer"
                    style={{
                      backgroundImage: `${bgImage}`,
                    }}
                  >
                    <Tilt
                      className="Tilt"
                      options={{ max: 20, perspective: 1000, speed: 100 }}
                      style={{ height: 400, width: 400 }}
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
                        <Link
                          aria-label="Open Resume Page"
                          title="Resume Page"
                          to="resume"
                        >
                          Resume
                        </Link>
                      </p>
                      <div className="pipe"></div>

                      <p>
                        <Link
                          aria-label="Open Projects Page"
                          title="Projects Page"
                          to="projects"
                        >
                          Projects
                        </Link>
                      </p>

                      <div className="pipe"></div>

                      <p>
                        <Link
                          aria-label="Open Contact Page"
                          title="Contact Page"
                          to="contact"
                        >
                          Contact
                        </Link>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Fragment>
            );
          })}
        </Fragment>
      )}
    </div>
  );
};

export default AboutMe;
