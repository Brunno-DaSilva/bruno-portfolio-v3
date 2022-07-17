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
    <div className={theme ? "app dark-mode" : "app light-mode"}>
      <Routes>
        <Route
          path="/"
          element={<Layout theme={theme} changeTheme={changeTheme} />}
        >
          <Route
            index
            element={<Home theme={theme} changeTheme={changeTheme} />}
          />
          <Route path="contact" element={<Contact theme={theme} />} />
          <Route path="resume" element={<Resume theme={theme} />} />
          <Route path="projects" element={<Projects theme={theme} />} />
          <Route path="*" element={<Error404 theme={theme} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
