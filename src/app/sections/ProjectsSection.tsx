"use client";
import ProjectItem from "../components/ProjectItem";
import { styles } from "../types/styles";

const projects = [
  {
    title: "Plataforma de E-commerce",
    technologies: ["C#", ".NET", "EF Core", "TailwindCSS"],
    image: "/projects/ecommerce.png",
    kanji: "一",
    meaning: "1 -",
    description:
      "Plataforma de e-commerce desenvolvida para oferecer uma experiência de compra moderna e escalável.",
  },
  {
    title: "Sistema de Autenticação e Autorização",
    technologies: ["Auth0", "React", "SQLite", "TailwindCSS"],
    image: "/projects/auth.png",
    kanji: "二",
    meaning: "2 -",
    description:
      "Sistema seguro de autenticação e autorização com controle de acesso e integração com Auth0.",
  },
  {
    title: "Aplicação Web com Blazor",
    technologies: ["Blazor", ".NET Core", "SQLite", "TailwindCSS"],
    image: "/projects/blazor.png",
    kanji: "三",
    meaning: "3 -",
    description:
      "Aplicação web desenvolvida com Blazor, .NET Core e SQLite.",
  },
  {
    title: "Game Engine em C++",
    technologies: ["C++", "C#", "Git", "Microsoft"],
    image: "/projects/game-engine.png",
    kanji: "四",
    meaning: "4 -",
    description:
      "Projeto de game engine desenvolvido para explorar programação de baixo nível e desenvolvimento de jogos.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects.section}>
      <div className={styles.projects.container}>
        <p className={styles.projects.heading}>
          Meus Projetos em Destaque
        </p>

        <div className={styles.projects.list}>
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}