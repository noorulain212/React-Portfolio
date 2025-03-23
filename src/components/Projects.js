export default function Projects({ projects }) {
    return (
      <section id="projects" className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
  
        {(!projects || projects.length === 0) ? (
          <p className="text-center text-gray-600">No projects added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                {project.image && <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md my-3" />}
                <p className="text-gray-700 text-sm">{project.description}</p>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800">
                    View on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
  