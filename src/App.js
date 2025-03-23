import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataEntry from "./components/DataEntry";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

        <Hero />

        <Routes>
          <Route path="/" element={<DataEntry setFormData={setFormData} />} />
          <Route path="/portfolio" element={<Portfolio formData={formData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<DataEntry setFormData={setFormData} />} />
        </Routes>

        <Footer /> {/* ✅ Now properly positioned at the bottom */}
      </div>
    </Router>
  );
}
