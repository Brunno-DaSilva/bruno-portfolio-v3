import React, { Fragment, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { PacmanLoader } from "react-spinners";

import "./Projects.scss";

const Projects = ({ theme }) => {
  const [projects, setProjects] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2600);
  }, []);
  return (
    <div className="projects">
      <Fragment>
        {loading ? (
          <div className="center">
            <PacmanLoader
              size={80}
              color={theme ? "hsl(183, 33%, 72%)" : "hsl(39, 56%, 58%)"}
              loading
            />{" "}
          </div>
        ) : (
          <Fragment>
            <div className="projects__title">
              <h1>Projects</h1>
            </div>
            <div className="projects__container">
              {projects.map(
                ({ title, description, demoLink, codeLink, imgUrl }, index) => (
                  <div
                    key={title}
                    className={
                      index + 1 === projects.length
                        ? "projects__wrapper"
                        : "projects__wrapper bottom-line  "
                    }
                  >
                    <div className="projects__left_col">
                      <div className="projects__left_col-title">
                        <h2>{title}</h2>
                      </div>
                      <div className="projects__left_col-desc">
                        <p>{description}</p>
                      </div>

                      <div className="projects__left_col--buttons">
                        <div className="demo_link">
                          <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Demo Link
                          </a>
                        </div>
                        <div className="pipe"></div>

                        <div className="demo_link">
                          <a
                            href={codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Code Link
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="projects__right_col ">
                      <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}
                        className="header__img_container"
                      >
                        <a
                          href={demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="hide_mobile"
                            src={urlFor(imgUrl)}
                            alt={title}
                          />
                        </a>
                      </motion.div>
                    </div>
                  </div>
                )
              )}
            </div>
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

export default Projects;
