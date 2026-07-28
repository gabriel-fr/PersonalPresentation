import Badge from '@mui/material/Badge';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Material-UI',
    'Tailwind CSS',
    'Git',
    'Responsive Design',
    'REST APIs',
    'Redux',
    'Next.js',
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center py-20 bg-background"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Habilidades
          </h2>

          <p className="text-base md:text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Tecnologias e ferramentas que utilizo no meu dia a dia
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Badge
                  variant="standard"
                  className="bg-card text-foreground text-base font-medium px-6 py-3 border-2 border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
