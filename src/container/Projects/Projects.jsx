import React, { Fragment, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { PacmanLoader } from "react-spinners";

import "./Projects.scss";

const Projects = () => {
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
      <div className="projects__title">
        <h1>Projects</h1>
      </div>
      <Fragment>
        {loading ? (
          <div className="center">
            <PacmanLoader color="#a1ced0" loading />{" "}
          </div>
        ) : (
          <div className="projects__container">
            {projects.map(
              ({ title, description, demoLink, codeLink, imgUrl }) => (
                <div className="projects__wrapper">
                  <div className="projects__left_col">
                    <div className="projects__left_col-title">
                      <h2>{title}</h2>
                    </div>
                    <div className="projects__left_col-desc">
                      <p>{description}</p>
                    </div>

                    <div className="projects__left_col--buttons">
                      <button className="demo_link">
                        <a href={demoLink} target="_blank">
                          Demo Link
                        </a>
                      </button>
                      <button className="demo_link">
                        <a href={codeLink} target="_blank">
                          Code Link
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="projects__right_col">
                    <motion.div
                      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.8 }}
                      className="header__img_container"
                    >
                      <img src={urlFor(imgUrl)} alt="Bruno profile img" />
                    </motion.div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default Projects;
