import { LanguageProvider } from "../../i18n/LanguageContext";
import { ThemeModeProvider } from "../../theme/ThemeContext";
import About from "../About";
import Contact from "../Contact";
import Hero from "../Hero";
import { SiteNav } from "../Navigation";
import Projects from "../Projects";
import Skills from "../Skills";

const Index = () => {
  return (
    <ThemeModeProvider>
      <LanguageProvider>
        <div className="bg-background min-h-screen text-foreground transition-colors">
          <SiteNav />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </LanguageProvider>
    </ThemeModeProvider>
  );
};

export default Index;
