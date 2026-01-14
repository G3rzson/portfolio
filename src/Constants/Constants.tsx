export const NAV_LINKS = [
  { title: "Rólam", path: "#aboutme" },
  { title: "Készségeim", path: "#skills" },
  { title: "Projektek", path: "#projects" },
  { title: "Kapcsolatok", path: "#contacts" },
];

export const MEDIA_SRC_LINKS = {
  logo: { src: "favicon.png", alt: "Logó" },
  profileImg: { src: "profil_2.png", alt: "Profilkép" },
  downloadIcon: { src: "icons/download.svg", alt: "Letöltés ikon" },
  cv: { src: "file/PG.pdf" },
  github: { src: "contacts/github.svg", alt: "Github" },
  facebook: { src: "contacts/facebook.svg", alt: "Facebook" },
  linkedin: { src: "contacts/linkedin.svg", alt: "Linkedin" },
  email: { src: "contacts/email.svg", alt: "Email" },
  arrowUp: { src: "icons/arrow-up-solid.svg", alt: "Fel nyíl" },
};

export const SKILL_LIST = [
  { path: "/skills/html.svg", title: "HTML" },
  { path: "/skills/css.svg", title: "CSS" },
  { path: "/skills/bootstrap.svg", title: "Bootstrap" },
  { path: "/skills/tailwind.svg", title: "Tailwind" },
  { path: "/skills/javascript.svg", title: "Javascript" },
  { path: "/skills/typescript.svg", title: "Typescript" },
  { path: "/skills/react.svg", title: "React" },
  { path: "/skills/nextjs.png", title: "NextJs" },
  { path: "/skills/nodejs.png", title: "NodeJs" },
  { path: "/skills/mongodb.png", title: "MongoDB" },
  { path: "/skills/sqlite.png", title: "Sqlite" },
  { path: "/skills/mysql.svg", title: "MySQL" },
  { path: "/skills/prisma.png", title: "Prisma" },
  { path: "/skills/git.svg", title: "Git" },
];

export const PROJECTS = [
  {
    preview: "https://g3rzson.github.io/frontend_barber_page/",
    sourceLink: "https://github.com/G3rzson/frontend_barber_page",
    title: "BarbeR Landing Page",
    type: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    description:
      "Reszponzív, szekciókra bontott landing page borbélyszalonnak; fókusz a mobilbarát layouton, a UI-részleteken és a tiszta, gyors betöltésen (GitHub Pages demo).",
  },

  {
    preview: "https://g3rzson.github.io/frontend_todo_app/",
    sourceLink: "https://github.com/G3rzson/frontend_todo_app",
    title: "Todo App",
    type: "Frontend",
    tech: ["HTML", "CSS", "Vanilla JavaScript"],
    description:
      "To-Do alkalmazás CRUD műveletekkel (megjelenítés / létrehozás / szerkesztés / törlés); reszponzív UI és átlátható állapotkezelés Vanilla JS-ben (GitHub Pages demo).",
  },

  {
    sourceLink: "https://github.com/G3rzson/galery",
    title: "Galéria app",
    type: "Fullstack",
    tech: ["React", "NodeJs", "Express", "MongoDB", "Mongoose"],
    description:
      "Full-stack galéria app képfeltöltéssel, megtekintéssel és kezelésre fókuszáló funkciókkal; React kliens + Express API + MongoDB perzisztencia (részletek a repo README-ben).",
  },
];

export const CONTACTS = [
  {
    path: "https://github.com/G3rzson?tab=repositories",
    title: MEDIA_SRC_LINKS.github.alt,
    imgSrc: MEDIA_SRC_LINKS.github.src,
  },
  {
    path: "https://www.facebook.com/gerzon.pal.7/",
    title: MEDIA_SRC_LINKS.facebook.alt,
    imgSrc: MEDIA_SRC_LINKS.facebook.src,
  },
  {
    path: "https://www.linkedin.com/in/gerzson-pál-8147312b4/",
    title: MEDIA_SRC_LINKS.linkedin.alt,
    imgSrc: MEDIA_SRC_LINKS.linkedin.src,
  },
  {
    path: "mailto:gerzonpal@gmail.com",
    title: MEDIA_SRC_LINKS.email.alt,
    imgSrc: MEDIA_SRC_LINKS.email.src,
  },
];
