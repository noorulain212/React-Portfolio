import React from "react";

export default function Portfolio({ formData = {} }) {
  const {
    name = "No Name Provided",
    bio = "No Bio Available",
    about = "No Details Available",
    picture = "",
    skills = [],
    interests = [],
    socialMedia = [],
    projects = [],
  } = formData || {}; // Ensure formData is never undefined

  return (
    <div className="portfolio-container">
      <h1>{name}</h1>
      {picture && <img src={picture} alt="Profile" className="profile-img" />}
      <p><strong>Bio:</strong> {bio}</p>
      <p><strong>About:</strong> {about}</p>

      <h2>Skills</h2>
      <ul>{skills.map((skill, index) => <li key={index}>{skill}</li>)}</ul>

      <h2>Interests</h2>
      <ul>{interests.map((interest, index) => <li key={index}>{interest}</li>)}</ul>

      <h2>Social Media</h2>
      <ul>
        {socialMedia.map((link, index) => (
          <li key={index}><a href={link.url}>{link.platform}</a></li>
        ))}
      </ul>

      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.image && <img src={project.image} alt="Project" className="project-img" />}
            <a href={project.github}>GitHub</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
