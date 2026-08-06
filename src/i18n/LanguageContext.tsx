import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

type Language = "pt" | "en";

const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contato",
      cta: "Fale comigo",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      switchLanguage: "Trocar para ingles",
      switchTheme: "Alternar modo escuro",
    },
    hero: {
      eyebrow: "desenvolvedor fullstack com foco em frontend",
      description:
        "Construo experiências digitais rápidas, acessíveis e com propósito. Do pixel ao deploy, transformo ideias em produtos web que as pessoas gostam de usar.",
      projectsCta: "Ver projetos",
      contactCta: "Entrar em contato",
      availability: "Disponivel",
    },
    about: {
      eyebrow: "// sobre mim",
      title: "Transformo requisitos complexos em interfaces simples.",
      bodyOne:
        "Sou desenvolvedor fullstack com foco em front-end e utilizo bastante React, Next.js e TypeScript. Gosto de trabalhar em toda a stack, do design de componentes acessíveis até APIs e bancos de dados que sustentam o produto.",
      bodyTwo:
        "Acredito que boa engenharia é invisível: performance, acessibilidade e detalhes de UX que fazem a experiência parecer natural.",
      stats: [
        { value: "5+", label: "anos de experiencia" },
        { value: "999+", label: "bugs corrigidos" },
        { value: "999+", label: "xícaras de café transformadas em código" },
        { value: "100k+", label: "linhas de código escritas (ou limpas)" },
      ],
    },
    skills: {
      eyebrow: "// stack & ferramentas",
      title: "Tecnologias que tenho experiência",
      groups: [{ title: "Front-end" }, { title: "Back-end" }, { title: "Ferramentas" }],
    },
    projects: {
      eyebrow: "// trabalhos selecionados",
      title: "Projetos recentes",
      repository: "Repositorio",
      access: "Acessar",
      noImage: "Sem imagem ainda",
      items: [
        {
          description:
            "Dashboard analytics em tempo real com graficos, filtros e detalhes do mercado de tecnologia.",
        },
        {
          description:
            "Divisao automatica de jogadores em equipes equilibradas de futebol, considerando o nivel de habilidade de cada participante e a distribuicao de goleiros.",
        },
        {
          description: "Sistema web para gestao de saúde de pets.",
        },
      ],
    },
    contact: {
      eyebrow: "Encontre-me tambem em",
      footer: "criando para a web",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cta: "Talk to me",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "Switch to Portuguese",
      switchTheme: "Toggle dark mode",
    },
    hero: {
      eyebrow: "fullstack developer focused on frontend",
      description:
        "I build fast, accessible, purposeful digital experiences. From pixel to deploy, I turn ideas into web products people enjoy using.",
      projectsCta: "View projects",
      contactCta: "Get in touch",
      availability: "available",
    },
    about: {
      eyebrow: "// about me",
      title: "I turn complex requirements into simple interfaces.",
      bodyOne:
        "I am a front-end and fullstack developer focused on React, Next.js, and TypeScript. I enjoy working across the stack, from accessible component design to APIs and databases that support the product.",
      bodyTwo:
        "I believe good engineering is invisible: performance, accessibility, and UX details that make the experience feel natural.",
      stats: [
        { value: "5+", label: "years of experience" },
        { value: "999+", label: "bugs fixed" },
        { value: "999+", label: "cups of coffee turned into code" },
        { value: "100k+", label: "lines of code written (or cleaned)" },
      ],
    },
    skills: {
      eyebrow: "// stack & tools",
      title: "Technologies I use day to day",
      groups: [{ title: "Front-end" }, { title: "Back-end" }, { title: "Tools" }],
    },
    projects: {
      eyebrow: "// selected work",
      title: "Recent projects",
      repository: "Repository",
      access: "Open",
      noImage: "No image yet",
      items: [
        {
          description:
            "Real-time analytics dashboard with charts, filters, and details from the technology market.",
        },
        {
          description:
            "Automatic split of players into balanced soccer teams, considering each participant's skill level and goalkeeper distribution.",
        },
        {
          description: "Web system for pet health management.",
        },
      ],
    },
    contact: {
      eyebrow: "Find me also on",
      footer: "building for the web",
    },
  },
};

type LanguageContextValue = {
  language: Language;
  nextLanguage: Language;
  t: (typeof translations)[Language];
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const nextLanguage: Language = language === "pt" ? "en" : "pt";

  const value = useMemo(
    () => ({
      language,
      nextLanguage,
      t: translations[language],
      toggleLanguage: () => setLanguage((current) => (current === "pt" ? "en" : "pt")),
    }),
    [language, nextLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
