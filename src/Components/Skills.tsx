import { motion } from "motion/react";
import { SKILL_LIST } from "../Constants/Constants";

export default function Skills() {
  return (
    <div id="skills" className="w-full sm:w-4/5 mx-0 sm:mx-auto">
      <h2 className="text-2xl text-center sm:text-start mb-8">Készségeim:</h2>
      <div className="flex flex-col flex-wrap justify-center items-center md:items-start gap-4">
        {SKILL_LIST.map((skill) => {
          return (
            <motion.ul
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex md:flex-row flex-col items-center justify-start gap-4"
            >
              <li className="md:text-xl list-disc">{skill.title}</li>

              <div className="flex flex-row flex-wrap justify-start items-start gap-4">
                {skill.skills.map((subSkill) => (
                  <img
                    title={subSkill.title}
                    key={subSkill.title}
                    src={subSkill.path}
                    alt={`${subSkill.title} icon`}
                    loading="lazy"
                    decoding="async"
                    className="h-6 md:h-10 w-fit transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-lg"
                  />
                ))}
              </div>
            </motion.ul>
          );
        })}
      </div>
    </div>
  );
}
