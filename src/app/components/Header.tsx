"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

import { useRef, useState } from "react";

import type { MouseEvent } from "react";

import HeaderButton from "./HeaderButton";

import { lenisInstance } from "./SmoothScroll";

import { styles } from "../types/styles";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  const links = [
    { href: "#hero", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    if (!lenisInstance) return;

    lenisInstance.scrollTo(href, {
      duration: 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      lock: true,
    });

    setIsOpen(false);
  };

  useGSAP(() => {
    const header = headerRef.current;
    const navigation = navigationRef.current;
    const backdrop = backdropRef.current;

    if (!header || !navigation || !backdrop) return;

    let lastScroll = 0;

    const updateHeader = (currentScroll: number) => {
      const scrollDifference = currentScroll - lastScroll;

      if (Math.abs(scrollDifference) < 2) {
        return;
      }

      if (currentScroll <= 20) {
        gsap.to(header, {
          yPercent: 0,
          backgroundColor: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(0px)",
          duration: 0.45,
          ease: "power3.out",
        });
      } else if (scrollDifference > 0 && !isOpen) {
        gsap.to(header, {
          yPercent: -100,
          duration: 0.45,
          ease: "power3.out",
        });
      } else if (scrollDifference < 0) {
        gsap.to(header, {
          yPercent: 0,
          backgroundColor: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(6px)",
          duration: 0.45,
          ease: "power3.out",
        });
      }

      lastScroll = currentScroll;
    };

    const handleScroll = (event: { scroll: number }) => {
      updateHeader(event.scroll);
    };

    const attachScrollListener = () => {
      if (lenisInstance) {
        lenisInstance.on("scroll", handleScroll);
      }
    };

    attachScrollListener();

    window.addEventListener("lenis-ready", attachScrollListener);

    if (isOpen) {
      gsap.set(navigation, {
        xPercent: 100,
      });

      gsap.set(backdrop, {
        opacity: 0,
        pointerEvents: "auto",
      });

      gsap.set(linksRef.current, {
        y: 40,
        opacity: 0,
      });

      const timeline = gsap.timeline();

      timeline
        .to(navigation, {
          xPercent: 0,
          duration: 0.8,
          ease: "power4.out",
        })
        .to(
          backdrop,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          linksRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.4",
        );

      gsap.to(header, {
        yPercent: 0,
        backgroundColor: "rgba(255, 255, 255, 0)",
        backdropFilter: "blur(0px)",
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(navigation, {
        xPercent: 100,
        duration: 0.6,
        ease: "power3.inOut",
      });

      gsap.to(backdrop, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(backdrop, {
            pointerEvents: "none",
          });
        },
      });
    }

    return () => {
      if (lenisInstance) {
        lenisInstance.off("scroll", handleScroll);
      }

      window.removeEventListener("lenis-ready", attachScrollListener);
    };
  }, [isOpen]);

  return (
    <header ref={headerRef} className={styles.header.container}>
      <div>
        <h2 className="font-heading text-lg">Samuel Felipe.</h2>
      </div>

      <div className={styles.header.content}>
        {!isOpen && (
          <nav className={`${styles.header.nav} hidden md:flex`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
                className="glitch-hover"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div
          ref={backdropRef}
          onClick={() => setIsOpen(false)}
          className={styles.navigation.backdrop}
          style={{ pointerEvents: "none" }}
        />

        <nav ref={navigationRef} className={styles.navigation.panel}>
          <div className={styles.navigation.linkList}>
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
                ref={(element) => {
                  if (element) {
                    linksRef.current[index] = element;
                  }
                }}
                className={`${styles.navigation.link} glitch-hover hover:bg-purple-400 p-2 rounded`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <HeaderButton
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
      </div>
    </header>
  );
}