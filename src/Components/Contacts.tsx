import { motion } from "motion/react";
import { CONTACTS } from "../Constants/Constants";

export default function Contacts() {
  return (
    <div
      id="contacts"
      className="w-full sm:w-4/5 sm:mx-auto flex sm:flex-row flex-col justify-start items-center gap-8"
    >
      <h2 className="text-2xl text-center sm:text-start">Kapcsolatok:</h2>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-row flex-wrap justify-center items-center gap-8"
      >
        {CONTACTS.map((contact) => {
          return (
            <a
              key={contact.title}
              title={contact.title}
              href={contact.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={contact.imgSrc}
                alt={`${contact.title} icon`}
                loading="lazy"
                decoding="async"
                className="h-12  w-fit"
              />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
