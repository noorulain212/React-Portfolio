import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DataEntry({ setFormData }) {
  const navigate = useNavigate();

  const [socialLinks, setSocialLinks] = useState([{ name: "", url: "" }]);
  const [projects, setProjects] = useState([{ title: "", description: "", image: "", github: "" }]);
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    data.socialMedia = socialLinks.filter(link => link.name && link.url);
    data.projects = projects.filter(project => project.title && project.description);
    data.skills = skills;
    data.interests = interests;

    setFormData(data);
    navigate("/portfolio"); // Redirect to Portfolio page after submission
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Enter Portfolio Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Details */}
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border border-gray-300 rounded-lg" />
        <textarea name="bio" placeholder="Short Bio" required className="w-full p-3 border border-gray-300 rounded-lg" />
        <textarea name="aboutDesc" placeholder="Detailed About Me" required className="w-full p-3 border border-gray-300 rounded-lg" />
        <input type="url" name="profileImage" placeholder="Profile Picture URL" className="w-full p-3 border border-gray-300 rounded-lg" />

        {/* Skills Section */}
        <div>
          <label className="block text-lg font-semibold">Skills</label>
          <input type="text" placeholder="Add a skill and press Enter" className="w-full p-2 border border-gray-300 rounded-lg"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setSkills([...skills, e.target.value]);
                e.target.value = "";
              }
            }} />
          <ul className="mt-2">
            {skills.map((skill, index) => (
              <li key={index} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-md m-1">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Interests Section */}
        <div>
          <label className="block text-lg font-semibold">Interests</label>
          <input type="text" placeholder="Add an interest and press Enter" className="w-full p-2 border border-gray-300 rounded-lg"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setInterests([...interests, e.target.value]);
                e.target.value = "";
              }
            }} />
          <ul className="mt-2">
            {interests.map((interest, index) => (
              <li key={index} className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-md m-1">
                {interest}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <h3 className="text-lg font-semibold">Social Media Links</h3>
        {socialLinks.map((link, index) => (
          <div key={index} className="flex gap-3">
            <input type="text" placeholder="Platform" required className="w-1/3 p-2 border rounded-lg"
              onChange={(e) => { let links = [...socialLinks]; links[index].name = e.target.value; setSocialLinks(links); }} />
            <input type="url" placeholder="URL" required className="w-2/3 p-2 border rounded-lg"
              onChange={(e) => { let links = [...socialLinks]; links[index].url = e.target.value; setSocialLinks(links); }} />
          </div>
        ))}
        <button type="button" onClick={() => setSocialLinks([...socialLinks, { name: "", url: "" }])}
          className="w-full bg-gray-800 text-white py-2 rounded-lg">
          + Add Social Media
        </button>

        {/* Project Section */}
        <h3 className="text-lg font-semibold">Projects</h3>
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm">
            <input type="text" placeholder="Project Title" required className="w-full p-2 border rounded-lg"
              onChange={(e) => { let updatedProjects = [...projects]; updatedProjects[index].title = e.target.value; setProjects(updatedProjects); }} />
            <textarea placeholder="Project Description" required className="w-full p-2 border rounded-lg"
              onChange={(e) => { let updatedProjects = [...projects]; updatedProjects[index].description = e.target.value; setProjects(updatedProjects); }} />
            <input type="url" placeholder="Image URL" required className="w-full p-2 border rounded-lg"
              onChange={(e) => { let updatedProjects = [...projects]; updatedProjects[index].image = e.target.value; setProjects(updatedProjects); }} />
            <input type="url" placeholder="GitHub Link" required className="w-full p-2 border rounded-lg"
              onChange={(e) => { let updatedProjects = [...projects]; updatedProjects[index].github = e.target.value; setProjects(updatedProjects); }} />
          </div>
        ))}
        <button type="button" onClick={() => setProjects([...projects, { title: "", description: "", image: "", github: "" }])}
          className="w-full bg-gray-800 text-white py-2 rounded-lg">
          + Add Project
        </button>

        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg">
          Generate Portfolio
        </button>
      </form>
    </div>
  );
}
