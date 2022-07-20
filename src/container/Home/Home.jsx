import React from "react";
import AboutMe from "../AboutMe/AboutMe";

const Home = ({ theme, changeTheme }) => {
  return (
    <div>
      <AboutMe theme={theme} changeTheme={changeTheme} />
    </div>
  );
};

export default Home;
