import { AtSign, Briefcase, Code2, Mail } from 'lucide-react';


const socials = [
  { label: 'GitHub', href: 'https://github.com/gabriel-fr/', icon: Code2 },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-fr', icon: Briefcase },
]

export function Contact() {
return (
    <section id="contato" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl rounded-xl border border-border bg-card p-8">
          <p className="mb-6 font-mono text-sm text-muted-foreground">
            Encontre-me também em
          </p>
          <ul className="space-y-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target='_blank'
                  className="flex items-center justify-between rounded-lg border border-border px-4 py-3 transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="size-4 text-primary" />
                    <span className="text-sm">{label}</span>
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    /gabriel-fr
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gabriel Ribeiro.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">{'> '}</span>building for the web
          </p>
        </footer>
      </div>
    </section>
  )
}


export default Contact;
