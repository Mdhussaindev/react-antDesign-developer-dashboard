import "./App.css";

import HeaderComponent from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <HeaderComponent />
      <Hero />
      <About />
      <Skills />
    </>
  );
}

export default App;