import About from "../About";
import Contact from "../Contact";
import Hero from "../Hero";
import Navigation from "../Navigation";
import Projects from "../Projects";
import Skills from "../Skills";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
