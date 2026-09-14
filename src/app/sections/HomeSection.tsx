"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { styles } from "../types/styles";
import { images } from "../types/images";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSection() {
  const kanjiRefs = useRef<(HTMLDivElement | null)[]>([]);

  const kanjis = [
    {
      kanji: "成長",
      translation: "Growth",
      vertical: true,
      position: "top-[10%] left-[10%] md:top-[10%] md:left-[32%]",
      mobilePosition: "top-[15%] left-[5%]",
    },

    {
      kanji: "探求",
      translation: "Discovery",
      position: "top-[35%] right-[15%]",
      mobilePosition: "top-[40%] right-[5%]",
    },

    {
      kanji: "創造",
      translation: "Creation",
      position: "bottom-[5%] left-[5%] md:bottom-[5%] md:left-[5%]",
      mobilePosition: "bottom-[20%] left-[10%]",
    },
  ];

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    })
      .to(kanjiRefs.current[0], { y: -100, x: -50 }, 0)
      .to(kanjiRefs.current[1], { y: -80, x: 60 }, 0)
      .to(kanjiRefs.current[2], { y: 70, x: 50 }, 0);
  })

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
            <h2 className="font-japanese text-5xl md:text-5xl">
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
    </section>
  );
}

