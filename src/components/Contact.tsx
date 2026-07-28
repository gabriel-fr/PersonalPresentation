import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button, TextField } from '@mui/material';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center py-20 bg-background"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Entre em Contato
          </h2>

          <p className="text-base md:text-xl text-muted-foreground mb-12 text-center">
            Tem um projeto em mente? Vamos conversar!
          </p>

          <form className="bg-card p-8 rounded-lg border border-border">
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <TextField id="name" label="Seu nome" variant="outlined" />
                </div>
                <div className="space-y-2">
                  <TextField id="email" label="seu@email.com" variant="outlined" />
                </div>
              </div>
              <div className="space-y-2">
                <TextField id="message" label="Sua mensagem..." variant="outlined" />
              </div>
              <Button
                type="submit"
                className="w-full"
              >
                Enviar Mensagem
              </Button>
            </div>
          </form>

          <div className="flex justify-center gap-6 mt-12">
            <Button
              variant="contained"
              className="gap-2"
            >
              <Mail className="w-5 h-5" />
              Email
            </Button>
            <Button
              variant="contained"
              className="gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              variant="contained"
              className="gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
