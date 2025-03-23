import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(projects);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setProjects(items);
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Projects
      </h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="projects">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, index) => (
                <Draggable key={index} draggableId={String(index)} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-white rounded-lg shadow-md p-5 transform transition-all hover:shadow-lg hover:scale-105"
                    >
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-40 object-cover rounded-md my-3"
                        />
                      )}
                      <p className="text-gray-700 text-sm">{project.description}</p>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800"
                        >
                          View on GitHub →
                        </a>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}
