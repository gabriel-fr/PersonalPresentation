import { ArrowUpRight, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Nova Analytics',
    description:
      'Dashboard de analytics em tempo real com gráficos interativos, filtros avançados e exportação de relatórios.',
    image: '/projects/project-1.png',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Loja Aurora',
    description:
      'E-commerce headless com carrinho persistente, checkout otimizado e integração de pagamentos.',
    image: '/projects/project-2.png',
    tags: ['React', 'Node.js', 'Stripe'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'DevKit CLI',
    description:
      'Ferramenta para desenvolvedores com editor de código embutido, terminal e templates reutilizáveis.',
    image: '/projects/project-3.png',
    tags: ['Next.js', 'Tailwind', 'GraphQL'],
    demo: '#',
    repo: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-sm text-primary">// trabalhos selecionados</p>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Projetos recentes
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                {/* <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`Interface do projeto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                /> */}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.repo}
                      aria-label={`Repositório de ${project.title}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Code2 className="size-4" />
                    </a>
                    <a
                      href={project.demo}
                      aria-label={`Demo de ${project.title}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>

                <p className="mb-5 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;
