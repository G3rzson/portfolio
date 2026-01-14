import { MEDIA_SRC_LINKS } from "../Constants/Constants";

export default function AboutMe() {
  return (
    <div id="aboutme" className="relative mt-6">
      <img
        src={MEDIA_SRC_LINKS.profileImg.src}
        alt={MEDIA_SRC_LINKS.profileImg.alt}
        className="w-full"
      />

      <a
        href={MEDIA_SRC_LINKS.cv.src}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-500 hover:bg-cyan-400 cursor-pointer duration-300 text-black w-fit p-2 rounded-md flex flex-row-reverse gap-4 items-center justify-center absolute bottom-1 left-1/2 transform -translate-x-1/2"
      >
        Önéletrajz
        <img
          src={MEDIA_SRC_LINKS.downloadIcon.src}
          alt={MEDIA_SRC_LINKS.downloadIcon.alt}
          width={16}
        />
      </a>
    </div>
  );
}
