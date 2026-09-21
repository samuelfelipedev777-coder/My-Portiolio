"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type AnimatedHeadingProps = {
  firstText: string;
  secondText: string;
  className?: string;
};

export default function AnimatedHeading({
  firstText,
  secondText,
  className = "",
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef<HTMLHeadingElement>(null);
  const secondTextRef = useRef<HTMLHeadingElement>(null);

  const splitText = (text: string) =>
    text.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) {
        return word;
      }

      return (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: 0,
            color: "#000000",
            willChange: "opacity, color",
          }}
        >
          {word}
        </span>
      );
    });

  useGSAP(
    () => {
      const firstWords = firstTextRef.current?.querySelectorAll("span");
      const secondWords = secondTextRef.current?.querySelectorAll("span");

      if (!firstWords || !secondWords) return;

      const allWords = Array.from([...firstWords, ...secondWords]);
      const total = allWords.length;

      const blackColor = "#1F1F1F";
      const orangeColor = "#D93800";
      const darkOrange = "#8A1C00";

      gsap.set(allWords, {
        opacity: 0,
        color: blackColor,
      });

      let stopTimeout: ReturnType<typeof setTimeout>;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 70%",
        end: "top 10%",
        scrub: 3,

        onUpdate: (self) => {
          const progress = self.progress;
          const currentIndex = progress * total;
          const isScrolling = Math.abs(self.getVelocity()) > 5;

          allWords.forEach((word, index) => {
            const diff = index - currentIndex;

            if (diff <= 0) {
              const isTail = diff > -3 && isScrolling;

              gsap.to(word, {
                opacity: 1,
                color: isTail
                  ? diff > -1.5
                    ? orangeColor
                    : darkOrange
                  : blackColor,
                duration: 0.9,
                ease: "power3.out",
                overwrite: "auto",
              });
            } else if (diff < 2) {
              const fadeOpacity = gsap.utils.clamp(
                0,
                1,
                1 - diff / 2,
              );

              gsap.to(word, {
                opacity: fadeOpacity,
                color: isScrolling ? orangeColor : blackColor,
                duration: 0.9,
                ease: "power3.out",
                overwrite: "auto",
              });
            } else {
              gsap.to(word, {
                opacity: 0,
                color: blackColor,
                duration: 0.8,
                ease: "power3.out",
                overwrite: "auto",
              });
            }
          });

          clearTimeout(stopTimeout);

          stopTimeout = setTimeout(() => {
            allWords.forEach((word, index) => {
              if (index <= currentIndex) {
                gsap.to(word, {
                  color: blackColor,
                  duration: 1,
                  ease: "power3.out",
                  overwrite: "auto",
                });
              }
            });
          }, 150);
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col gap-8 ${className}`}
    >
      <div>
        <h2 ref={firstTextRef} className="m-0">
          {splitText(firstText)}
        </h2>
      </div>

      <div>
        <h2 ref={secondTextRef} className="m-0">
          {splitText(secondText)}
        </h2>
      </div>
    </div>
  );
}