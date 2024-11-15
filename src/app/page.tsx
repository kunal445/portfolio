import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
