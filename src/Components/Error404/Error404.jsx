import React from "react";

import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error404;
