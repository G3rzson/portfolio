import { SKILL_LIST } from "../Constants/Constants";

export default function Skills() {
  return (
    <div id="skills" className="w-full sm:w-4/5 mx-0 sm:mx-auto">
      <h2 className="text-2xl text-center sm:text-start mb-8">Készségeim:</h2>
      <div className="flex flex-row flex-wrap justify-center items-center gap-4">
        {SKILL_LIST.map((skill) => {
          return (
            <abbr key={skill.title} title={skill.title}>
              <img
                src={`${import.meta.env.BASE_URL}${skill.path}`}
                alt={`${skill.title} icon`}
                className="h-14 w-fit transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-lg"
              />
            </abbr>
          );
        })}
      </div>
    </div>
  );
}
