import { MEDIA_SRC_LINKS } from "../Constants/Constants";
import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="main-image flex flex-col sm:flex-row-reverse justify-center items-center gap-18 p-4"
    >
      <img
        src={MEDIA_SRC_LINKS.profileImg.src}
        alt={MEDIA_SRC_LINKS.profileImg.alt}
        width={320}
        height={320}
        className="dark:brightness-80 brightness-90"
      />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col gap-8 justify-center items-center"
      >
        <h2 className="text-6xl text-center text-zinc-300">Pál Gerzson</h2>
        <h3 className="text-3xl text-amber-400 text-center">
          Full-Stack Webfejlesztő
        </h3>
        <a
          href={MEDIA_SRC_LINKS.cv.src}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 hover:bg-cyan-400 cursor-pointer duration-300 text-black w-fit p-2 rounded-md flex flex-row-reverse gap-4 items-center justify-center"
        >
          Önéletrajz
          <img
            src={MEDIA_SRC_LINKS.downloadIcon.src}
            alt={MEDIA_SRC_LINKS.downloadIcon.alt}
            width={16}
            height={16}
          />
        </a>
      </motion.div>
    </div>
  );
}
