import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import "./Error404.scss";

const Error404 = () => {
  const refButton = useRef();

  useEffect(() => {
    refButton.current.focus();
  }, []);

  return (
    <div className="error404">
      <div className="error__title">
        <h1>Error</h1>
      </div>
      <div className="error__container">
        <div className="error__area">
          <h3>
            <span className="number-st">4</span>
            <span className="number-zero">0</span>{" "}
            <span className="number-nd">4</span>
            <span className="text">Page not found</span>
          </h3>
          <svg class="svg-one" viewBox="0 0 388 307" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M187.4 6.4c54.2-4 114.7-19.1 154 18.6C384.8 66.7 397.5 134.2 381 192c-15.6 55-64 95.4-118.7 111.6-46.2 13.6-88-18.1-131.9-37.5-47.3-21-110.4-27.1-126.2-76.5C-12.2 138.3 21.9 84.4 60 46.2 93.1 13 140.7 9.9 187.4 6.4z"
              fill="#18a3a551"
            ></path>
          </svg>
        </div>
        <div className="error__button">
          <Link ref={refButton} to="/" title="Go back to main page">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
