"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const highlights = [
  "OBCECADO POR TECNOLOGIA",
  "2+ ANOS COM FRONT-END",
  "FULL-STACK DEVELOPER",
  "FOCO EM SOFTWARE & DADOS",
  "NEXT.JS • TYPESCRIPT • PYTHON",
  "EM CONSTANTE EVOLUÇÃO",
];

export default function Hightlights() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) return;

    const animation = gsap.to(marquee, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return ()=> {
        animation.kill();
    }
  }, []);

  return (
    <section className="overflow-hidden border-y border-black/10 py-6">
        <div 
          ref={marqueeRef}
          className="flex w-max items-center whitespace-nowrap"
        >
          {[...highlights, ...highlights].map((item, index) => (
            <div key={index} className="flex-tems-center">
                <span className="mx-8 font-heading text-sm tracking-widest">
                    {item}
                </span>

                <span className="text-xl">✦</span>
            </div>
          ))}
        </div>
    </section>
  )
};