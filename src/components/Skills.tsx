import { useLanguage } from "../i18n/LanguageContext";

const skillGroups = [
  [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Redux",
    "Vite",
    "React Router",
    "Zustand",
  ],
  ["Node.js", "Express", "PostgreSQL", "SQLite", "Prisma", "REST API", "SQL"],
  ["Git", "GitHub", "Docker", "Vercel", "Render", "VS Code", "Figma", "Postman", "DBeaver"],
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-sm text-primary">{t.skills.eyebrow}</p>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.skills.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((items, index) => (
            <div
              key={t.skills.groups[index].title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                {t.skills.groups[index].title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
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
  );
}

export default Skills;
