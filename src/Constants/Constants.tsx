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
  {
    title: "Programozási nyelvek",
    skills: [
      { path: "/skills/javascript.svg", title: "Javascript" },
      { path: "/skills/typescript.svg", title: "Typescript" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { path: "/skills/html.svg", title: "HTML" },
      { path: "/skills/react.svg", title: "React" },
    ],
  },
  {
    title: "UI / Styling",
    skills: [
      { path: "/skills/css.svg", title: "CSS" },
      { path: "/skills/bootstrap.svg", title: "Bootstrap" },
      { path: "/skills/tailwind.svg", title: "Tailwind" },
      { path: "/skills/shadcn.svg", title: "Shadcn UI" },
    ],
  },

  {
    title: "Fullstack Framework",
    skills: [{ path: "/skills/nextjs.png", title: "NextJs" }],
  },
  {
    title: "Backend",
    skills: [
      { path: "/skills/nodejs.png", title: "NodeJs" },
      { path: "/skills/express.svg", title: "Express" },
    ],
  },

  {
    title: "Adatbázisok & ORM & ODM",
    skills: [
      { path: "/skills/mongodb.png", title: "MongoDB" },
      { path: "/skills/mongoose.svg", title: "Mongoose" },
      { path: "/skills/sqlite.png", title: "SQLite" },
      { path: "/skills/mysql.svg", title: "MySQL" },
      { path: "/skills/prisma.png", title: "Prisma" },
    ],
  },
  {
    title: "Tesztelés",
    skills: [
      { path: "/skills/vitest.svg", title: "Vitest" },
      { path: "/skills/testing-library.svg", title: "Testing Library" },
    ],
  },
  {
    title: "Fejlesztési eszközök & felhőszolgáltatók",
    skills: [
      { path: "/skills/git.svg", title: "Git" },
      { path: "/skills/github.svg", title: "GitHub" },
      { path: "/skills/vercel.svg", title: "Vercel" },
      { path: "/skills/railway.svg", title: "Railway" },
      { path: "/skills/cloudinary.svg", title: "Cloudinary" },
    ],
  },
];

export const PROJECTS = [
  {
    preview: "https://frontend-barber-page.vercel.app",
    sourceLink: "https://github.com/G3rzson/frontend_barber_page",
    title: "BarbeR Landing Page",
    type: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel"],
    description:
      "Reszponzív, szekciókra bontott landing page borbélyszalonnak, fókusz a mobilbarát layouton, a UI-részleteken és a tiszta, gyors betöltésen.",
  },

  {
    preview: "https://frontend-photographer.vercel.app",
    sourceLink: "https://github.com/G3rzson/frontend_photographer",
    title: "Photographer Landing Page",
    type: "Frontend",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
      "Shadcn UI",
      "NextJs",
      "Vitest",
      "Testing Library",
      "Vercel",
    ],
    description:
      "Reszponzív, oldalakra bontott portfólió fotósoknak, fókusz a mobilbarát layouton, a UI-részleteken és a tiszta, gyors betöltésen.",
  },

  {
    preview: "https://fullstack-pizzeria-app.vercel.app",
    sourceLink: "https://github.com/G3rzson/fullstack_pizzeria_app",
    title: "Pizzéria app",
    type: "Fullstack",
    tech: [
      "Nextjs",
      "Prisma",
      "MySQL",
      "Tailwind",
      "Shadcn UI",
      "Vitest",
      "Testing Library",
      "Vercel",
      "Railway",
      "Cloudinary",
    ],
    description:
      "Full-stack pizzéria app rendelési és admin funkciókkal, Nextjs kliens + Server Actions / API Routes + MySQL perzisztencia (részletek a repo README-ben).",
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
