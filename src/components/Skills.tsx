
const skillGroups = [
  {
    title: 'Front-end',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'],
  },
  {
    title: 'Back-end',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST', 'GraphQL'],
  },
  {
    title: 'Ferramentas',
    items: ['Git', 'Docker', 'Vercel', 'Figma', 'Jest', 'CI/CD'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-sm text-primary">// stack &amp; ferramentas</p>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Tecnologias que uso no dia a dia
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
