"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedHeading from "../components/AnimatedHeading";
import TextContent from "../components/TextContent";
import { styles } from "../types/styles";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "top 15%",
        scrub: 1.5,
      },
    });
  });

  return (
    <section id="about" ref={sectionRef} className={styles.about.section}>
      <div className={styles.about.container}>
        <TextContent
          text={[
            "ARQUITETURA & CÓDIGO.",
            "COMUNICAÇÃO CLARA.",
            "CONFORTO & USABILIDADE.",
            "SOLUÇÕES COM PROPÓSITO.",  
          ]}
          size={8}
          className={styles.about.textContent}
        />

        <AnimatedHeading
          firstText="Sabe quando você usa um sistema e a experiência te faz pensar 'wow'? Crio interfaces e uno lógicas para te entregar esse conforto."
          secondText="Mais do que linhas de código, meu foco é resolver problemas reais com atenção a cada detalhe. Deixa eu te mostrar na prática!"
          className={styles.about.heading}
        />
      </div>
    </section>
  );
}
