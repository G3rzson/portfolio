import { MEDIA_SRC_LINKS } from "../../Constants/Constants";

export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="w-full sm:w-4/5 mx-0 sm:mx-auto flex justify-between items-center flex-col sm:flex-row pt-24 sm:pt-20"
    >
      {/* bemutatkozás */}
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl">Pál Gerzson</h1>
        <h2 className="text-2xl">Full-Stack webfejlesztő</h2>

        <a
          href={MEDIA_SRC_LINKS.cv.src}
          target="_blank"
          className="bg-cyan-500 hover:bg-cyan-400 cursor-pointer duration-300 text-black w-fit p-4 rounded-md flex flex-row-reverse gap-4 items-center justify-center"
        >
          Önéletrajz
          <img
            src={MEDIA_SRC_LINKS.downloadIcon.src}
            alt={MEDIA_SRC_LINKS.downloadIcon.alt}
            width={24}
          />
        </a>
      </div>

      {/* profilkép */}
      <img
        src={MEDIA_SRC_LINKS.profileImg.src}
        alt={MEDIA_SRC_LINKS.profileImg.alt}
        className="h-80 w-fit mt-6"
      />
    </div>
  );
}
