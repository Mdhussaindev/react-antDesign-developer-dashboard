import "./App.css";

import HeaderComponent from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <HeaderComponent />
      <Hero />
      <About />
      <Skills />
      <Services/>
      <Projects />
      <Contact />
    </>
  );
}

export default App;