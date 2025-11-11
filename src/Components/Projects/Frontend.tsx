import { FRONTEND_PROJECTS } from "./project_list";

export default function Frontend() {
  return (
    <>
      <h2 className="text-2xl">Frontend projektek:</h2>
      <div className="flex sm:flex-row flex-col flex-wrap justify-center items-center gap-4 my-8">
        {FRONTEND_PROJECTS.map((project) => {
          return (
            <div
              key={project.title}
              className="flex items-center justify-center flex-col"
            >
              <p className="text-center mb-2">{project.title}</p>
              <a href={project.path} target="_blank">
                <img
                  src={project.imgSrc}
                  alt={`${project.title} icon`}
                  className="h-20 sm:h-52 w-fit"
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
