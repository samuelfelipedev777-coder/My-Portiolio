"use client";

import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const loader = loaderRef.current;
    const eyebrow = eyebrowRef.current;
    const name = nameRef.current;
    const line = lineRef.current;
    const progressLine = progressRef.current;
    const counter = counterRef.current;
    const status = statusRef.current;

    if (
      !loader ||
      !eyebrow ||
      !name ||
      !line ||
      !progressLine ||
      !counter ||
      !status
    ) {
      return;
    }

    const progress = { value: 0 };

    const lockScroll = () => {
      window.scrollTo(0, 0);

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      window.scrollTo(0, 0);
    };

    lockScroll();

    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: false,
    });

    gsap.set(eyebrow, {
      y: 12,
      opacity: 0,
    });

    gsap.set(name, {
      yPercent: 100,
      opacity: 0,
    });

    gsap.set(line, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(progressLine, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(counter, {
      opacity: 0,
      y: 8,
    });

    gsap.set(status, {
      opacity: 0,
    });

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
      onComplete: () => {
        unlockScroll();
      },
    });

    timeline
      .to(eyebrow, {
        y: 0,
        opacity: 1,
        duration: 0.35,
      })
      .to(
        name,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power4.out",
        },
        "-=0.15",
      )
      .to(
        line,
        {
          scaleX: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .to(
        counter,
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
        },
        "-=0.25",
      )
      .to(
        status,
        {
          opacity: 1,
          duration: 0.3,
        },
        "-=0.2",
      )
      .to(
        progress,
        {
          value: 100,
          duration: 1.35,
          ease: "power2.inOut",
          onUpdate: () => {
            const value = Math.round(progress.value);

            progressLine.style.transform = `scaleX(${progress.value / 100})`;
            counter.textContent = value.toString().padStart(2, "0");
          },
        },
        "-=0.05",
      )
      .to(name, {
        yPercent: -100,
        opacity: 0,
        duration: 0.55,
        ease: "power4.in",
      })
      .to(
        eyebrow,
        {
          y: -10,
          opacity: 0,
          duration: 0.35,
        },
        "<",
      )
      .to(
        line,
        {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 0.35,
          ease: "power3.inOut",
        },
        "<",
      )
      .to(
        loader,
        {
          yPercent: -100,
          duration: 0.75,
          ease: "power4.inOut",
        },
        "-=0.05",
      );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      unlockScroll();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-white text-black"
    >
      <div className="flex w-full max-w-[1200px] flex-col px-6 sm:px-10 md:px-16">
        <div className="overflow-hidden">
          <span
            ref={eyebrowRef}
            className="block font-mono text-[9px] font-medium uppercase tracking-[0.25em] text-black/45 sm:text-[10px]"
          >
            Samuel Felipe — Developer
          </span>
        </div>

        <div className="mt-5 overflow-hidden sm:mt-6 md:mt-8">
          <div
            ref={nameRef}
            className="font-heading text-[clamp(2.8rem,9vw,8rem)] font-normal leading-[0.85] tracking-[-0.075em] text-black"
          >
            SAMUEL FELIPE
          </div>
        </div>

        <div
          ref={lineRef}
          className="mt-8 h-px w-full max-w-[420px] bg-[#8B5CF6] sm:mt-10"
        />

        <div className="mt-4 flex w-full max-w-[420px] items-center justify-between">
          <span
            ref={statusRef}
            className="font-mono text-[8px] uppercase tracking-[0.22em] text-black/40 sm:text-[9px]"
          >
            Loading experience
          </span>

          <span
            ref={counterRef}
            className="font-mono text-[9px] tracking-[0.15em] text-black/50 sm:text-[10px]"
          >
            00
          </span>
        </div>

        <div className="mt-2 h-px w-full max-w-[420px] overflow-hidden bg-black/10">
          <div
            ref={progressRef}
            className="h-full w-full bg-[#8B5CF6]"
          />
        </div>
      </div>
    </div>
  );
}