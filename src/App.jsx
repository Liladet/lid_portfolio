import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tilet from "./components/Tilet";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Tilet />
        <About />
        <Tilet />
        <Skills />
        <Tilet />
        <Projects />
        <Tilet />
        <Achievements />
        <Tilet />
        <Contact />
      </main>
      <Footer />
    </>
  );
}