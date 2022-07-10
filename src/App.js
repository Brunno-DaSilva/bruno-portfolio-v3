import React from "react";

import { Contact, About, Header, Footer, Resume, Projects } from "./container";
import { Navbar } from "./Components";

import "./App.scss";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      {/*
      <Contact />
     
      <Resume />

      <About />
      <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;
