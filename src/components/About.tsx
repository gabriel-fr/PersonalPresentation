
const stats = [
  { value: '5+', label: 'anos de experiência' },
  { value: '40+', label: 'projetos entregues' },
  { value: '20+', label: 'clientes satisfeitos' },
]

export function About() {
  return (
    <section id="sobre" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-sm text-primary">// sobre mim</p>
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Transformo requisitos complexos em interfaces simples.
            </h2>
          </div>
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Sou desenvolvedor front-end e fullstack com foco em React, Next.js
              e TypeScript. Gosto de trabalhar em toda a stack — do design de
              componentes acessíveis até APIs e bancos de dados que sustentam o
              produto.
            </p>
            <p>
              Acredito que boa engenharia é invisível: performance, acessibilidade
              e detalhes de UX que fazem a experiência parecer natural. Trabalho de
              perto com times de design e produto para entregar valor rápido, sem
              abrir mão da qualidade.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-3xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
