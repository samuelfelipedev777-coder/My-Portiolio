"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { styles } from "../types/styles";
import { images } from "../types/images";
import HeroCta from "../components/HeroCta";
import CodeCard from "../components/CodeCard";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSection() {
  const kanjiRefs = useRef<(HTMLDivElement | null)[]>([]);

  const kanjis = [
  {
    kanji: "対話",
    translation: "Comunicação",
    vertical: true,
    position: "top-[10%] left-[10%] md:top-[10%] md:left-[32%]",
    mobilePosition: "top-[15%] left-[5%]",
  },

  {
    kanji: "創意",
    translation: "Criatividade",
    position: "top-[35%] right-[15%]",
    mobilePosition: "top-[40%] right-[5%]",
  },

  {
    kanji: "責任",
    translation: "Responsabilidade",
    position: "bottom-[5%] left-[5%] md:bottom-[5%] md:left-[5%]",
    mobilePosition: "bottom-[20%] left-[10%]",
  },
];

  useGSAP(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 2.5,
    },
  });

  timeline
    .to(kanjiRefs.current[0], {
      y: -45,
      x: -20,
      duration: 1.4,
      ease: "none",
    }, 0)

    .to(kanjiRefs.current[1], {
      y: -75,
      x: 30,
      duration: 2,
      ease: "none",
    }, 0.15)

    .to(kanjiRefs.current[2], {
      y: 35,
      x: 15,
      duration: 1.8,
      ease: "none",
    }, 0.3)

    .to("#hero-cta", {
      y: -65,
      x: -25,
      opacity: 0.75,
      duration: 2.2,
      ease: "none",
    }, 0)

    .to("#typescript-card", {
      y: -18,
      x: 12,
      duration: 1.6,
      ease: "none",
    }, 0.4)

    .to("#python-card", {
      y: 25,
      x: -25,
      duration: 2.4,
      ease: "none",
    }, 0.2);
});

  return (
    <section id="hero" className={styles.hero.container}>
      <Image
        src={images.hero.nextjs}
        alt="Next.js"
        width={2048}
        height={1365}
        priority
        quality={100}
        sizes="100vw"
        className={styles.hero.image}
      />

      <div className={styles.hero.content}>
        {kanjis.map((item, index) => (
          <div
            key={item.kanji}
            ref={(element) => {
              kanjiRefs.current[index] = element;
            }}
            className={`${styles.hero.kanji} ${item.mobilePosition} md:${item.position}`}
          >
            <h2 className="font-japanese text-5xl md:text-3xl">
              {item.vertical
                ? item.kanji.split("").map((character) => (
                    <span key={character} className="block">
                      {character}
                    </span>
                  ))
                : item.kanji}
            </h2>

            <div className={styles.hero.kanjiInfo}>
              <span>{item.translation}</span>
              <span className={styles.hero.line} />
            </div>
          </div>
        ))}
      </div>

      <HeroCta />

      <CodeCard 
        id="typescript-card"
        language="TypeScript"
        code={`const create = (idea: string) => {
          return idea;
        };`
      }/>

      <CodeCard
        id="python-card"
        language="Python"
        code={`def build_future():
          keep_learning()
          return "endless"`
        }
        position="top"
      />
    </section>
  );
}