import AboutMe from "./Components/AboutMe";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-(--header-scroll-offset) flex flex-col gap-12">
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
