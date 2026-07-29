import "./App.css";

import HeaderComponent from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <HeaderComponent />
      <Hero />
      <About />
      <Skills />
      <Services/>
      <Projects />
    </>
  );
}

export default App;