import "./App.css";

import HeaderComponent from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <HeaderComponent />
      <Hero />
      <About />
      <Skills />
      <Services/>
    </>
  );
}

export default App;