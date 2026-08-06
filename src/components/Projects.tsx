import { ArrowUpRight, Code2 } from "lucide-react";
import TeamDivider from "../assets/projects/teamdivider.jpg";
import TrendTechImage from "../assets/projects/TrendTechImage.jpg";
import { useLanguage } from "../i18n/LanguageContext";

const projects = [
  {
    title: "Trend Tech",
    image: TrendTechImage,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "NestJS", "TypeORM", "React"],
    demo: "https://trend-tech-weld.vercel.app/",
    repo: "https://github.com/gabriel-fr/TrendTech",
  },
  {
    title: "Team Divider / Separador de Times",
    image: TeamDivider,
    tags: ["React", "Next.js", "TypeScript"],
    demo: "https://team-divider.vercel.app/",
    repo: "https://github.com/gabriel-fr/TeamDivider",
  },
  {
    title: "PetCare",
    image: "",
    tags: ["React", "Tailwind", "TypeScript", "NestJS", "TypeORM", "SQLite"],
    demo: "#",
    repo: "https://github.com/gabriel-fr/PetCare",
  },
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-sm text-primary">{t.projects.eyebrow}</p>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.projects.title}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="flex h-full items-center justify-center align-middle font-bold text-gray-500">
                    <div>{t.projects.noImage}</div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.repo}
                      target="_blank"
                      title={t.projects.repository}
                      aria-label={`${t.projects.repository}: ${project.title}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Code2 className="size-4" />
                    </a>
                    <a
                      href={project.demo}
                      title={t.projects.access}
                      target="_blank"
                      aria-label={`Demo: ${project.title}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>

                <p className="mb-5 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {t.projects.items[index].description}
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
  );
}

export default Projects;
