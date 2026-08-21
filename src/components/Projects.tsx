import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import TeamDivider from "../assets/projects/teamdivider.jpg";
import TrendTechImage from "../assets/projects/TrendTechImage.jpg";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./motion/Reveal";

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

function getCircularOffset(index: number, selected: number, total: number) {
  let offset = index - selected;
  while (offset > total / 2) offset -= total;
  while (offset < -total / 2) offset += total;
  return offset;
}

export function Projects() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const total = projects.length;

  const goTo = (index: number) => setSelected(((index % total) + total) % total);
  const goPrev = () => goTo(selected - 1);
  const goNext = () => goTo(selected + 1);

  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center border-t border-border px-6 pt-24 pb-16"
    >
      <Reveal className="mx-auto w-full max-w-6xl">
        <p className="mb-4 font-mono text-sm text-primary">{t.projects.eyebrow}</p>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.projects.title}
        </h2>

        <div className="relative h-[440px] overflow-hidden sm:h-[480px]">
          {projects.map((project, index) => {
            const offset = getCircularOffset(index, selected, total);
            const distance = Math.abs(offset);
            const isActive = offset === 0;
            const isVisible = distance <= 1;

            const card = (
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="size-full object-cover"
                    />
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
                        rel="noreferrer"
                        title={t.projects.repository}
                        aria-label={`${t.projects.repository}: ${project.title}`}
                        tabIndex={isActive ? 0 : -1}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Code2 className="size-4" />
                      </a>
                      <a
                        href={project.demo}
                        title={t.projects.access}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${t.projects.access}: ${project.title}`}
                        tabIndex={isActive ? 0 : -1}
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
            );

            return (
              <motion.div
                key={project.title}
                className="absolute left-1/2 top-1/2 w-64 sm:w-72 md:w-90"
                style={{ zIndex: total - distance }}
                animate={{
                  x: `${-50 + offset * 70}%`,
                  y: "-50%",
                  scale: isActive ? 1 : distance === 1 ? 0.82 : 0.7,
                  opacity: isActive ? 1 : distance === 1 ? 0.4 : 0,
                  filter: isActive ? "blur(0px)" : distance === 1 ? "blur(3px)" : "blur(6px)",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden={!isVisible}
              >
                {isActive ? (
                  card
                ) : (
                  <div
                    role="button"
                    onClick={() => goTo(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        goTo(index);
                      }
                    }}
                    aria-label={project.title}
                    tabIndex={isVisible ? 0 : -1}
                    className="cursor-pointer"
                  >
                    <div aria-hidden="true">{card}</div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            aria-label={t.projects.previous}
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex items-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => goTo(index)}
                aria-label={project.title}
                aria-current={index === selected}
                className={`size-1.5 rounded-full transition-colors ${
                  index === selected ? "bg-primary" : "bg-border hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            aria-label={t.projects.next}
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
