import { MEDIA_SRC_LINKS } from "../Constants/Constants";

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

      <div className="flex flex-col gap-8 justify-center items-center">
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
      </div>
    </div>
  );
}
