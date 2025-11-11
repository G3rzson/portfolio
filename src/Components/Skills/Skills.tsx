import { SKILL_LIST } from "./skill_list";

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full sm:w-4/5 mx-0 sm:mx-auto px-4 sm:px-0 pt-24"
    >
      <h2 className="text-2xl">Készségeim:</h2>
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 my-8">
        {SKILL_LIST.map((skill) => {
          return (
            <abbr key={skill.title} title={skill.title}>
              <img
                src={`${import.meta.env.BASE_URL}${skill.path}`}
                alt={`${skill.title} icon`}
                className="h-14 w-fit spin"
              />
            </abbr>
          );
        })}
      </div>
    </div>
  );
}
