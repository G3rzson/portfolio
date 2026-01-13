import AboutMe from "./Components/AboutMe/AboutMe";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills/Skills";

export default function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
