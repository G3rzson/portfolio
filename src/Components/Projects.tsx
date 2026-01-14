import { useState } from "react";
import { PROJECTS } from "../Constants/Constants";
import { Menu, X } from "lucide-react";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      id="projects"
      className="pt-28 sm:pt-24 w-full sm:w-4/5 mx-0 sm:mx-auto sm:px-0 px-2"
    >
      {/* projektek */}
      <h2 className="text-2xl text-center sm:text-start mb-8">Projektek:</h2>
      <ul className="flex flex-col gap-4">
        {PROJECTS.map((project, index) => {
          const isOpen = openIndex === index;
          const detailsId = `project-details-${index}`;

          return (
            <li
              key={project.title}
              className="dark:bg-zinc-950 bg-zinc-300 w-full p-4 rounded-lg"
            >
              {/* Projekt címsor és gomb */}
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-xl text-cyan-600 dark:text-cyan-400">
                  {project.title}
                </h3>

                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  onClick={() =>
                    setOpenIndex((prev) => (prev === index ? null : index))
                  }
                  className="dark:bg-cyan-800 dark:hover:bg-cyan-600 bg-cyan-400 hover:bg-cyan-500 duration-300 cursor-pointer px-3 py-1 rounded"
                >
                  {openIndex === index ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs font-medium px-2 py-1 rounded-full bg-cyan-600/20 text-cyan-900 dark:bg-cyan-400/15 dark:text-cyan-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Animált collapse */}
              <div
                id={detailsId}
                className={`${
                  isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-4`}
              >
                <p>
                  <span className="underline">Leírás:</span>{" "}
                  {project.description}
                </p>

                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline">Ugrás a forráskódhoz:</span>{" "}
                  <span className=" dark:hover:text-cyan-400 hover:text-cyan-600 duration-300">
                    {project.sourceLink}
                  </span>
                </a>

                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="underline">Github Pages előnézet:</span>{" "}
                    <span className="dark:hover:text-cyan-400 hover:text-cyan-600 duration-300">
                      {project.preview}
                    </span>
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
