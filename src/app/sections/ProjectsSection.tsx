"use client";

import ProjectItem from "../components/ProjectItem";

import { styles } from "../types/styles";

const projects = [
  {
    title: "Plataforma de E-commerce",
    technologies: ["C#", ".NET", "EF Core", "TailwindCSS"],
    image: "/projects/ecommerce.png",
    kanji: "一",
    meaning: "[1]",
    description:
      "Plataforma de e-commerce desenvolvida para oferecer uma experiência de compra moderna e escalável.",
  },

  {
    title: "Sistema de Autenticação e Autorização",
    technologies: ["Auth0", "React", "SQLite", "TailwindCSS"],
    image: "/projects/auth.png",
    kanji: "二",
    meaning: "[2]",
    description:
      "Sistema seguro de autenticação e autorização com controle de acesso e integração com Auth0.",
  },

  {
    title: "Aplicação Web com Blazor",
    technologies: ["Blazor", ".NET Core", "SQLite", "TailwindCSS"],
    image: "/projects/blazor.png",
    kanji: "三",
    meaning: "[3]",
    description:
      "Aplicação web desenvolvida com Blazor, .NET Core e SQLite.",
  },

  {
    title: "Game Engine em C++",
    technologies: ["C++", "C#", "Git", "Microsoft"],
    image: "/projects/game-engine.png",
    kanji: "四",
    meaning: "[4]",
    description:
      "Projeto de game engine desenvolvido para explorar programação de baixo nível e desenvolvimento de jogos.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects.section}>
      <div className={styles.projects.container}>
        <div className="relative mb-16 flex min-h-20 w-full items-center border-b border-white/20 pb-8 sm:mb-20 sm:min-h-24 sm:pb-10 md:mb-28 md:h-24 md:pb-40">
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4 md:gap-40">
            <span className="shrink-0 font-mono text-[10px] text-white sm:text-xs">
              {"{"}
            </span>

            <span className="truncate text-[7px] font-medium uppercase tracking-[0.08em] text-white sm:text-[9px] sm:tracking-[0.14em] md:text-[10px] md:tracking-[0.2em]">
              IDEIAS QUE VIRAM CÓDIGO
            </span>
          </div>

          <span className="absolute left-1/2 -translate-x-1/2 text-sm font-light text-[#B84A18] sm:text-base md:text-lg">
            &lt; / &gt;
          </span>

          <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-4 md:gap-40">
            <span className="truncate text-[7px] font-medium uppercase tracking-[0.08em] text-white sm:text-[9px] sm:tracking-[0.14em] md:text-[10px] md:tracking-[0.2em]">
              IDEIAS QUE VIRAM CÓDIGO
            </span>

            <span className="shrink-0 font-mono text-[10px] text-white sm:text-xs">
              {"}"}
            </span>
          </div>
        </div>

        <div className={styles.projects.list}>
          {projects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}