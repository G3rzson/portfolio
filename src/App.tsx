import AboutMe from "./Components/AboutMe";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { MEDIA_SRC_LINKS } from "./Constants/Constants";

export default function App() {
  return (
    <div className="relative">
      <Header />
      <main className="pt-(--header-scroll-offset) flex flex-col gap-12">
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />

      <a
        href="#aboutme"
        className="group fixed bottom-4 right-4 w-12 h-12 z-10 flex items-center justify-center rounded-full bg-cyan-400 dark:bg-cyan-800 hover:bg-cyan-500 dark:hover:bg-cyan-600 transition-colors duration-300"
      >
        <img
          src={MEDIA_SRC_LINKS.arrowUp.src}
          alt={MEDIA_SRC_LINKS.arrowUp.alt}
          width={16}
          height={16}
          className="transition-transform duration-300 ease-out group-hover:scale-125"
        />
      </a>
    </div>
  );
}
