import React from "react";

import "./Resume.scss";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__title">
        <h1>Resume</h1>
      </div>
      <div className="resume__container">
        <div className="resume__experience">
          <div className="resume__experience-title">
            <h2>
              <span>Work</span>
              <br />
              <span>Experience</span>
            </h2>
          </div>
          <div className="resume__experience-job_detail">
            <div className="job_detail__container">
              <div className="job_detail__date">
                <p>July 2022 - Present</p>
              </div>
              <div className="job_detail__description">
                <div className="job_detail__description-title">
                  <p>Software Engineer</p>
                </div>
                <div className="job_detail__description-info">
                  <p>CarLotz</p>
                </div>
              </div>
            </div>
            <div className="job_detail__container">
              <div className="job_detail__date">
                <p>May 2017 - July 2022</p>
              </div>
              <div className="job_detail__description">
                <div className="job_detail__description-title">
                  <p>SharePoint Developer</p>
                </div>
                <div className="job_detail__description-info">
                  <p>Tetra Pak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**END EXPERIENCE */}
        <div className="liner"></div>
        <div className="resume__education">
          <div className="resume__education-title">
            <h2>Education</h2>
          </div>

          <div className="resume__education-details">
            <div className="details__program">
              <div className="details__program-date">
                <p>July 2021</p>
              </div>
              <div className="details__program-description">
                <div className="description__program">
                  <div className="description__program-name">
                    <p>BSBA, Information Technology Management</p>
                    <span>Western Governors University </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="details__program">
              <div className="details__program-date">
                <p>February 2020</p>
              </div>
              <div className="details__program-description">
                <div className="description__program">
                  <div className="description__program-name">
                    <p>Software Engineering Immersive Bootcamp</p>
                    <span>General Assembly</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="details__program">
              <div className="details__program-date">
                <p>May 2019</p>
              </div>
              <div className="details__program-description">
                <div className="description__program">
                  <div className="description__program-name">
                    <p>AAS, Electronic Business Development C# .Net</p>
                    <span>Collin College</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**END EDUCATION */}
      </div>
    </div>
  );
};

export default Resume;
