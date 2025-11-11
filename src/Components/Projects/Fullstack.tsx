import { FULLSTACK_PROJECTS } from "./project_list";

export default function Fullstack() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">Full-stack projektek:</h2>

      {FULLSTACK_PROJECTS.map((project) => {
        return (
          <a
            key={project.title}
            href={project.path}
            target="_blank"
            className="hover:text-blue-500 duration-500 text-center"
          >
            {project.title}
          </a>
        );
      })}
    </div>
  );
}
