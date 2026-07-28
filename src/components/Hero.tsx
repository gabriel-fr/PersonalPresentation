import { ArrowRight, Download } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import profileImg from "../assets/profile.jpg";
import Button from "@mui/material/Button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />

      <div className="absolute top-20 right-20 w-20 h-20 border-2 border-primary rounded-lg animate-float opacity-30" />
      <div className="absolute bottom-40 left-10 w-16 h-16 border-2 border-accent rounded-full animate-float-delayed opacity-30" />
      <div className="absolute top-1/3 left-1/4 w-24 h-24 border-2 border-primary-light rounded-lg rotate-45 animate-float opacity-20" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in relative">

          <div className="absolute top-10 -right-20 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 z-10">
            <img
              src={profileImg}
              alt="Profile Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mb-6 inline-block">
            <span className="text-primary font-medium text-2xl">Gabriel Ribeiro</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground relative z-20">
            Front-End Developer
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
           Transformando ideias em aplicações web elegantes, responsivas e de alto desempenho
            com tecnologias de atuais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="!bg-primary" onClick={scrollToProjects}>
              Ver projetos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="!bg-secondary-foreground" onClick={() => console.log("DOWNLOAD")}>
              <Download className="mr-2 h-5 w-5" />
              Baixar Currículo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
