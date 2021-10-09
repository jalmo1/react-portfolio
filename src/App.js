import React, { useState } from "react";
import "./App.css";
import Nav from "../src/components/Nav";

import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Resume from "./components/Resume";

function App() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div id="main">
      <main>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </main>
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default App;
