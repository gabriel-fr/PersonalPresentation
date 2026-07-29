import { useLanguage } from "../i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-6 font-mono text-sm text-muted-foreground">
            <span className="text-primary">{"> "}</span>
            {t.hero.eyebrow}
          </p>

          <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Gabriel
            <br />
            Ribeiro
          </h1>

          <p className="mt-6 max-w-md text-pretty font-mono text-sm leading-relaxed text-muted-foreground">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.hero.projectsCta}
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-5 py-2.5 font-mono text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              {t.hero.contactCta}
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <span className="select-none font-sans text-[10rem] font-bold leading-none tracking-tighter text-foreground/90">
                GR
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>Porto Alegre, BR</span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
                {t.hero.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
