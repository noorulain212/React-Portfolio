import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio({ formData }) {
  if (!formData || !formData.name) return <h1>Loading Portfolio...</h1>;

  return (
    <div>
      <Navbar />
      <Hero name={formData.name || "No Name"} bio={formData.bio || "No Bio"} />
      <About />
      <Projects />
      <Contact />
      <Footer socialLinks={formData.socialMedia || []} />
    </div>
  );
}
