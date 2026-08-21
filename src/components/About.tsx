import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./motion/Reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center border-t border-border px-6 pt-24 pb-16"
    >
      <Reveal className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-sm text-primary">{t.about.eyebrow}</p>
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.about.title}
            </h2>
          </div>
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>{t.about.bodyOne}</p>
            <p>{t.about.bodyTwo}</p>

            <div className="grid grid-cols-4 gap-6 border-t border-border pt-8">
              {t.about.stats.map((stat) => (
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
      </Reveal>
    </section>
  );
}

export default About;
