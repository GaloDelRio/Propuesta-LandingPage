import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resources from "./components/Resources";
import Support from "./components/Support";
import Contact from "./components/Contact";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Resources />
          <Support />
          <Contact />
          <Sponsors />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;