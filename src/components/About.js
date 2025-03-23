export default function About({ formData }) {
    if (!formData) {
      return <p className="text-center text-gray-600">No information available.</p>;
    }
  
    return (
      <section id="about" className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">About Me</h2>
        <div className="text-center">
          {formData.profileImage && (
            <img
              src={formData.profileImage}
              alt="Profile"
              className="mx-auto w-40 h-40 rounded-full object-cover shadow-lg"
            />
          )}
          <p className="text-lg text-gray-700 mt-4">{formData.bio}</p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6">Skills</h3>
          <ul className="flex flex-wrap justify-center gap-2 mt-2">
            {formData.skills?.map((skill, index) => (
              <li key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-md">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  