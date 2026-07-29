import "./App.css";

import HeaderComponent from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import TechStack from "./components/TechStack/TechStack";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
      <HeaderComponent />
      <Hero />
      <About />
      <Skills />
      <Services/>
      <Projects />
       <TechStack />
       <Testimonials />
      <Contact />
      <Footer />
       
    </>
  );
}

export default App;