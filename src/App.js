import React from "react";

import { About, Header, Footer, Resume, Projects } from "./container";
import { Navbar } from "./Components";

import "./App.scss";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Resume />

      {/*
      <Header />

      <About />
      <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;
