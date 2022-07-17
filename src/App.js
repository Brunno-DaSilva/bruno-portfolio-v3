import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Contact, Home, Resume, Projects } from "./container";
import { Error404 } from "./Components";
import Layout from "./Layout/Layout";

import "./App.scss";
function App() {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme((prevMode) => !prevMode);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Layout theme={theme} changeTheme={changeTheme} />}
        >
          <Route
            index
            element={<Home theme={theme} changeTheme={changeTheme} />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
