import React from "react";
import Header from "../Header/Header";

const Home = ({ theme, changeTheme }) => {
  return (
    <div>
      <Header theme={theme} changeTheme={changeTheme} />
    </div>
  );
};

export default Home;
