import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DataEntry({ setFormData }) {
  const navigate = useNavigate();
  const [socialLinks, setSocialLinks] = useState([{ name: "", url: "" }]);

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { name: "", url: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.socialMedia = socialLinks.filter((link) => link.name && link.url);

    setFormData(data);
    navigate("/portfolio");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Enter Portfolio Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        {/* Bio Input */}
        <textarea
          name="bio"
          placeholder="Short Bio"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        {/* Social Media Links */}
        <div className="space-y-3">
          <label className="block text-lg font-medium text-gray-700">
            Social Media Links
          </label>
          {socialLinks.map((link, index) => (
            <div key={index} className="flex gap-3">
              <input
                type="text"
                placeholder="Platform (e.g., Twitter)"
                required
                className="w-1/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                onChange={(e) => {
                  let links = [...socialLinks];
                  links[index].name = e.target.value;
                  setSocialLinks(links);
                }}
              />
              <input
                type="url"
                placeholder="Profile URL"
                required
                className="w-2/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                onChange={(e) => {
                  let links = [...socialLinks];
                  links[index].url = e.target.value;
                  setSocialLinks(links);
                }}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addSocialLink}
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            + Add Social Media
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Generate Portfolio
        </button>
      </form>
    </div>
  );
}
