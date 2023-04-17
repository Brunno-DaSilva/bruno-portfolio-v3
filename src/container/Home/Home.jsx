import React from "react";
import AboutMe from "../AboutMe/AboutMe";

const Home = ({ theme, changeTheme }) => {
  return (
    <>
      <AboutMe theme={theme} changeTheme={changeTheme} />
    </>
  );
};

export default Home;
