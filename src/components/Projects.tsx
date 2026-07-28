import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'Dashboard administrativo completo para e-commerce com gráficos e métricas em tempo real.',
      tech: ['React', 'TypeScript', 'Material-UI'],
    },
    {
      title: 'App de Tarefas',
      description: 'Aplicação de gerenciamento de tarefas com drag-and-drop e sincronização em nuvem.',
      tech: ['React', 'Redux', 'Tailwind'],
    },
    {
      title: 'Portfolio Interativo',
      description: 'Site portfolio com animações suaves e design responsivo para apresentação de projetos.',
      tech: ['React', 'Framer Motion', 'CSS3'],
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center py-20 bg-card"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full flex flex-col bg-background border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardContent className="flex-grow p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                    <div className="p-6 pt-0 flex gap-4">
                    <Button
                      variant="contained"
                      className="gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </Button>
                    <Button
                      variant="contained"
                      className="gap-2 text-accent hover:text-accent"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                    </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
