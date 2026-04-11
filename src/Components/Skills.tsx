import { SKILL_LIST } from "../Constants/Constants";

export default function Skills() {
  return (
    <div id="skills" className="w-full sm:w-4/5 mx-0 sm:mx-auto">
      <h2 className="text-2xl text-center sm:text-start mb-8">Készségeim:</h2>
      <div className="flex flex-col flex-wrap justify-center items-center md:items-start gap-4">
        {SKILL_LIST.map((skill) => {
          return (
            <ul
              key={skill.title}
              className="flex md:flex-row flex-col items-center justify-start gap-4"
            >
              <li className="md:text-xl list-disc">{skill.title}</li>

              <div className="flex flex-row flex-wrap justify-start items-start gap-4">
                {skill.skills.map((subSkill) => (
                  <img
                    title={subSkill.title}
                    key={subSkill.title}
                    src={`${import.meta.env.BASE_URL}${subSkill.path}`}
                    alt={`${subSkill.title} icon`}
                    className="h-6 md:h-10 w-fit transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-lg"
                  />
                ))}
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
