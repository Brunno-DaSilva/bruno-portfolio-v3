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

const Resume = ({ theme }) => {
  const [workExperience, setWorkExperience] = useState([]);
  const [resumeLink, setResumeLink] = useState([]);
  const [education, setEducation] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryEd = '*[_type == "education"]';
    const queryWe = '*[_type == "workExperience"]';
    const queryRl = '*[_type == "resume"]';

    client.fetch(queryEd).then((ed) => {
      setEducation(ed);
    });

    client.fetch(queryWe).then((we) => {
      setWorkExperience(we);
    });
    client.fetch(queryRl).then((rl) => {
      setResumeLink(rl);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  const formatMonth = (date) => {
    const monthIndex = date === undefined ? 0 : Number(date.slice(5, 7));
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
        <PacmanLoader
          size={80}
          color={theme ? "hsl(183, 33%, 72%)" : "hsl(39, 56%, 58%)"}
          loading
        />
      ) : (
        <Fragment className="resume">
          <div className="resume__title">
            <h1>Resume</h1>
            {resumeLink.map(({ resumeLink, _id }) => {
              return (
                <Fragment key={_id}>
                  <div className="download_resume_mb">
                    <a
                      className="glass"
                      href={resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Download Full Resume"
                    >
                      <FiExternalLink
                        color={theme ? "hsl(0, 0%, 95%)" : "hsl(181, 75%, 11%)"}
                        size={30}
                      />
                    </a>
                  </div>
                  <div className="download_resume">
                    <a
                      className="glass"
                      href={resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Download Full Resume"
                    >
                      <span
                        style={
                          theme
                            ? { color: "hsl(0, 0%, 95%)" }
                            : { color: "hsl(181, 75%, 11%)" }
                        }
                      >
                        Download
                      </span>
                      <FiExternalLink
                        color={theme ? "hsl(0, 0%, 95%)" : "hsl(181, 75%, 11%)"}
                        size={30}
                      />
                    </a>
                  </div>
                </Fragment>
              );
            })}
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
