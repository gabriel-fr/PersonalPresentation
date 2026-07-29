import { Globe2, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useThemeMode } from "../theme/ThemeContext";

const linkKeys = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { language, nextLanguage, t, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useThemeMode();
  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium">
          <span className="grid size-7 place-items-center rounded-md bg-primary font-bold text-primary-foreground">
            G
          </span>
          <span>gabriel.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {linkKeys.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-accent"
            aria-label={t.nav.switchTheme}
            title={t.nav.switchTheme}
          >
            <ThemeIcon className="size-4" />
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-3 font-mono text-sm font-medium text-foreground transition-colors hover:bg-accent"
            aria-label={t.nav.switchLanguage}
            title={t.nav.switchLanguage}
          >
            <Globe2 className="size-4" />
            <span>{language.toUpperCase()}</span>
            <span className="text-muted-foreground">/ {nextLanguage.toUpperCase()}</span>
          </button>
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-9 place-items-center rounded-md border border-border text-foreground md:hidden"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-4">
            {linkKeys.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-4 flex max-w-6xl items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid size-10 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-accent"
              aria-label={t.nav.switchTheme}
              title={t.nav.switchTheme}
            >
              <ThemeIcon className="size-4" />
            </button>
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-3 font-mono text-sm font-medium text-foreground transition-colors hover:bg-accent"
              aria-label={t.nav.switchLanguage}
              title={t.nav.switchLanguage}
            >
              <Globe2 className="size-4" />
              <span>{language.toUpperCase()}</span>
              <span className="text-muted-foreground">/ {nextLanguage.toUpperCase()}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-primary px-4 py-2 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
