"use client";

import gsap from "gsap";

import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef } from "react";

import { styles } from "../types/styles";

gsap.registerPlugin(ScrollTrigger);

const texts = [
  {
    index: "01",
    label: "IDEIA",
    kanji: "想",
    text: {
      before: "Saí da bolha ao ver uma ",
      highlight: "verdade",
      after: ": a internet tá cheia de páginas esquecíveis.",
    },
  },
  {
    index: "02",
    label: "PROCESSO",
    kanji: "進",
    text: {
      before: "Seu cliente bate o olho e sabe que achou a ",
      highlight: "escolha certa",
      after: ".",
    },
  },
  {
    index: "03",
    label: "CONSTRUÇÃO",
    kanji: "造",
    text: {
      before: "Minha missão é criar uma experiência visual que prende a ",
      highlight: "atenção",
      after: " e desperta curiosidade.",
    },
  },
  {
    index: "04",
    label: "SUCESSO",
    kanji: "成",
    text: {
      before: "Marcas comuns disputam preço. Memoráveis ",
      highlight: "dominam a atenção",
      after: ". Qual vai ser a sua?",
    },
  },
];

export default function TextRevealSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef<HTMLSpanElement>(null);
  const kanjiRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const content = contentRef.current;
      const text = textRef.current;
      const label = labelRef.current;
      const index = indexRef.current;
      const kanji = kanjiRef.current;
      const progress = progressRef.current;
      const glow = glowRef.current;

      if (
        !section ||
        !content ||
        !text ||
        !label ||
        !index ||
        !kanji ||
        !progress ||
        !glow
      ) {
        return;
      }

      let currentIndex = 0;
      let transition: gsap.core.Timeline | null = null;

      const renderText = (item: (typeof texts)[number]) => {
        text.replaceChildren();

        text.appendChild(document.createTextNode(item.text.before));

        const highlight = document.createElement("span");

        highlight.className = "text-purple-500";
        highlight.textContent = item.text.highlight;

        text.appendChild(highlight);
        text.appendChild(document.createTextNode(item.text.after));
      };

      const updateContent = (nextIndex: number) => {
        if (nextIndex === currentIndex) {
          return;
        }

        currentIndex = nextIndex;

        const item = texts[nextIndex];

        transition?.kill();

        transition = gsap.timeline();

        transition
          .to([text, kanji], {
            opacity: 0,
            y: -10,
            filter: "blur(4px)",
            duration: 0.18,
            ease: "power2.out",
          })
          .add(() => {
            renderText(item);
            kanji.textContent = item.kanji;
            label.textContent = item.label;
            index.textContent = item.index;
          })
          .set([text, kanji], {
            y: 10,
          })
          .to([text, kanji], {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.55,
            ease: "power3.out",
          });
      };

      gsap.set([text, label, index, kanji], {
        opacity: 1,
      });

      gsap.set(progress, {
        scaleX: 0,
      });

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=260%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,

        onUpdate: (self) => {
          const progressValue = self.progress;

          const nextIndex = Math.min(
            texts.length - 1,
            Math.floor(progressValue * texts.length),
          );

          updateContent(nextIndex);

          gsap.set(progress, {
            scaleX: progressValue,
          });

          gsap.set(content, {
            y: 20 - progressValue * 40,
          });

          gsap.set(kanji, {
            rotation: progressValue * 4 - 2,
            scale: 1 + progressValue * 0.025,
          });

          gsap.set(glow, {
            x: `${progressValue * 30 - 15}%`,
            y: `${Math.sin(progressValue * Math.PI) * 12}%`,
            opacity: 0.08 + progressValue * 0.08,
          });
        },
      });

      return () => {
        transition?.kill();
        trigger.kill();
      };
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className={`${styles.textReveal.section} overflow-x-hidden`}
    >
      <div ref={glowRef} className={styles.textReveal.glow} />

      <div className={styles.textReveal.grid} />

      <div className={styles.textReveal.cornerLabel}>
        // Pensamentos.exe
      </div>

      <div ref={contentRef} className={styles.textReveal.container}>
        <div className={styles.textReveal.header}>
          <div className={styles.textReveal.meta}>
            <span
              ref={indexRef}
              className={styles.textReveal.index}
            >
              {texts[0].index}
            </span>

            <span
              ref={labelRef}
              className={styles.textReveal.label}
            >
              {texts[0].label}
            </span>
          </div>

          <span className={styles.textReveal.total}>
            04
          </span>
        </div>

        <div className={styles.textReveal.content}>
          <div className={styles.textReveal.kanjiWrapper}>
            <div
              ref={kanjiRef}
              className={styles.textReveal.kanji}
            >
              {texts[0].kanji}
            </div>
          </div>

          <div className={styles.textReveal.copy}>
            <span className={styles.textReveal.signal}>
              Disciplina &gt; Motivação
            </span>

            <h2
              ref={textRef}
              className={styles.textReveal.title}
            >
              Saí da bolha ao ver uma{" "}
              <span className="text-purple-500">
                verdade
              </span>
              : a internet tá cheia de páginas esquecíveis.
            </h2>
          </div>
        </div>

        <div className={styles.textReveal.footer}>
          <span className={styles.textReveal.scroll}>
            CONTINUE ROLANDO
          </span>

          <div className={styles.textReveal.progressTrack}>
            <div
              ref={progressRef}
              className={styles.textReveal.progress}
            />
          </div>

          <span className={styles.textReveal.percent}>
            100%
          </span>
        </div>
      </div>
    </section>
  );
}