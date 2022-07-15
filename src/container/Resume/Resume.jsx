import React, { useState, useEffect, Fragment } from "react";

import { client } from "../../client";
import { FiExternalLink } from "react-icons/fi";
import { PacmanLoader } from "react-spinners";

import "./Resume.scss";
const months = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Resume = () => {
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryEd = '*[_type == "education"]';
    const queryWe = '*[_type == "workExperience"]';

    client.fetch(queryEd).then((ed) => {
      setEducation(ed);
    });

    client.fetch(queryWe).then((we) => {
      setWorkExperience(we);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  const formatMonth = (date) => {
    const monthIndex =
      date === undefined ? "0" : date.split("").splice(6, 1).join("");
    const MMM = months[monthIndex];
    return MMM;
  };

  const formatYear = (date) => {
    const YYY = date === undefined ? "0" : date.split("").splice(0, 4).join("");
    return YYY;
  };

  return (
    <div className="resume">
      {loading ? (
        <PacmanLoader size={80} color="#a1ced0" loading />
      ) : (
        <Fragment className="resume">
          <div className="resume__title">
            <h1>Resume</h1>
            <div className="download_resume">
              <a
                className="glass"
                href="https://drive.google.com/file/d/1LHCrhy9w3CxuCLcGCZJBYPvJRrAkAUHC/view?usp=sharing"
                target="_blank"
                title="Download Full Resume"
              >
                <FiExternalLink size={30} />
              </a>
            </div>
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
                {workExperience
                  .sort((a, b) => b.workId - a.workId)
                  .map(({ startDate, endDate, title, current, subtitle }) => {
                    const MMMStart = formatMonth(startDate);
                    const MMMEnd = formatMonth(endDate);
                    const YYYStart = formatYear(startDate);
                    const YYYEnd = formatYear(endDate);

                    return (
                      <div key={title} className="job_detail__container">
                        <div className="job_detail__date">
                          {current ? (
                            <p>
                              {MMMStart} {YYYStart} - <i>Current</i>
                            </p>
                          ) : (
                            <p>
                              {MMMStart} {YYYStart} - {MMMEnd} {YYYEnd}
                            </p>
                          )}
                        </div>
                        <div className="job_detail__description">
                          <div className="job_detail__description-title">
                            <p>{title}</p>
                            <span>{subtitle}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/**END EXPERIENCE */}
            <div className="liner"></div>
            <div className="resume__education">
              <div className="resume__education-title">
                <h2>Education</h2>
              </div>

              <div className="resume__education-details">
                {education
                  .slice(0)
                  .reverse()
                  .map(({ date, title, subtitle }) => {
                    let MMM = formatMonth(date);
                    let YYY = formatYear(date);

                    return (
                      <div key={title} className="details__program">
                        <div className="details__program-date">
                          <p>
                            {MMM} {YYY}
                          </p>
                        </div>
                        <div className="details__program-description">
                          <div className="description__program">
                            <div className="description__program-name">
                              <p>{title}</p>
                              <span>{subtitle}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            {/**END EDUCATION */}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Resume;
