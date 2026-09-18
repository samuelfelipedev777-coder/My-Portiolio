"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<SVGCircleElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const progress = { value: 0 };

    document.body.style.overflow = "hidden";

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },

      onComplete: () => {
        document.body.style.overflow = "";
      },
    });

    gsap.set(loaderRef.current, {
      autoAlpha: 1,
    });

    gsap.set(nameRef.current, {
      yPercent: 110,
      opacity: 0,
      filter: "blur(8px)",
    });

    gsap.set(progressRef.current, {
      strokeDashoffset: 283,
    });

    gsap.set(iconRef.current, {
      rotation: 0,
      scale: 0.8,
      opacity: 0,
    });

    gsap.set(statusRef.current, {
      opacity: 0,
      y: 10,
    });

    gsap.set(lineRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    timeline

      .to(nameRef.current, {
        yPercent: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power4.out",
      })

      .to(nameRef.current, {
        y: -3,
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,
      })

      .to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.7",
      )

      .to(
        iconRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.4)",
        },
        "-=0.5",
      )

      .to(
        statusRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.7",
      )

      .to(
        progress,
        {
          value: 100,
          duration: 3.2,
          ease: "power2.inOut",

          onUpdate: () => {
            if (progressRef.current) {
              const circumference = 283;

              const offset =
                circumference - (progress.value / 100) * circumference;

              progressRef.current.style.strokeDashoffset = `${offset}`;
            }
          },
        },
        "-=0.3",
      )

      .to(
        iconRef.current,
        {
          rotation: 360,
          duration: 1.8,
          ease: "power2.inOut",
        },
        "<",
      )

      .to(statusRef.current, {
        duration: 0.2,

        onStart: () => {
          if (statusRef.current) {
            statusRef.current.textContent = "Tudo pronto.";
          }
        },
      })

      .to(nameRef.current, {
        yPercent: -110,
        opacity: 0,
        filter: "blur(6px)",
        duration: 1.2,
        ease: "power4.inOut",
      })

      .to(
        lineRef.current,
        {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 0.6,
          ease: "power3.inOut",
        },
        "-=0.8",
      )

      .to(
        loaderRef.current,
        {
          autoAlpha: 0,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "-=0.4",
      );

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="
      fixed inset-0 z-100
      flex h-screen w-full
      items-center justify-center
      overflow-hidden
      bg-white
      text-black
    "
    >
      <div className="flex w-full flex-col items-center px-6">

        <span
          className="
          mb-7
          text-center
          font-mono
          text-[11px]
          font-medium
          uppercase
          tracking-[0.25em]
          text-black/55
        "
        >
          Criando ideias. Construindo experiências.
        </span>


        <div className="w-full overflow-hidden">
          <div
            ref={nameRef}
            className="
            mx-auto
            w-fit
            whitespace-nowrap
            text-center
            font-heading
            text-[clamp(2.5rem,8vw,7rem)]
            font-normal
            leading-none
            tracking-[-0.07em]
            text-black
          "
          >
            SAMUEL FELIPE
          </div>
        </div>

        <div
          ref={lineRef}
          className="
          mt-7
          h-px
          w-24
          bg-[#8B5CF6]
        "
        />

        <div className="relative mt-12 flex h-24 w-24 items-center justify-center">
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="black"
              strokeOpacity="0.1"
              strokeWidth="1"
            />

            <circle
              ref={progressRef}
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              strokeDasharray="283"
              strokeDashoffset="283"
              strokeLinecap="round"
            />
          </svg>

          <div
            ref={iconRef}
            className="
            font-mono
            text-[15px]
            font-medium
            tracking-[-0.08em]
            text-black
          "
          >
            &lt; / &gt;
          </div>
        </div>

        <span
          ref={statusRef}
          className="
          mt-8
          text-center
          font-mono
          text-[11px]
          font-medium
          uppercase
          tracking-[0.22em]
          text-black/55
        "
        >
          Preparando sua experiência...
        </span>
      </div>
    </div>
  );
}
