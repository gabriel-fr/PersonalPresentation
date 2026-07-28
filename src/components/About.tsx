import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Puzzle, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: 'Código Limpo',
      description: 'Desenvolvimento com as melhores práticas e código organizado',
    },
    {
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      title: 'Responsivo',
      description: 'Interfaces que se adaptam a qualquer dispositivo',
    },
    {
      icon: <Puzzle  className="w-10 h-10 text-primary" />,
      title: 'Integrações',
      description: 'Conexões com APIs, serviços externos e automações.',
    },
  ];

  return (
    <section
      id="about"
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
            Sobre Mim
          </h2>

          <p className="text-base md:text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto leading-relaxed">
            Sou um desenvolvedor, crio interfaces modernas e funcionais.
            <br/>
            Com experiência desenvolvimento, tecnologias atuais webs,
            <br/>
            transformo ideias na melhor experiência do usuário.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="p-8 bg-background rounded-lg text-center transition-transform duration-300 hover:-translate-y-2">
                  <div className="text-accent mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
