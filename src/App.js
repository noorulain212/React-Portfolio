// src/App.js
import React, { useState } from "react";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects"; //import Projects component

import "./App.css";

export default function App() {
  const [formData, setFormData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const bio = event.target.bio.value;
    const platform = event.target.platform.value;
    const url = event.target.url.value;

    setFormData({
      name,
      bio,
      socialMedia: [{ platform, url }],
    });
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <form onSubmit={handleSubmit} className="form-container">
          <input type="text" name="name" placeholder="Your Name" required />
          <textarea name="bio" placeholder="Short Bio" required></textarea>
          <input type="text" name="platform" placeholder="Platform" />
          <input type="text" name="url" placeholder="URL" />
          <button type="submit">Generate Portfolio</button>
        </form>

        {formData && <Portfolio formData={formData} />}
      </div>
    </div>
  );
}
