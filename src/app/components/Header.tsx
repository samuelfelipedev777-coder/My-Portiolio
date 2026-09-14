"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

import HeaderButton from "./HeaderButton";
import { styles } from "../types/styles";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/features", label: "Features" },
  ];

  useGSAP(() => {
    const header = headerRef.current;
    const navigation = navigationRef.current;
    const backdrop = backdropRef.current;

    if (!header || !navigation || !backdrop) return;

    // Header scroll effect
    ScrollTrigger.create({
      trigger: "#hero",
      start: "top -480px",

      onEnter: () => {
        gsap.to(header, {
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          duration: 0.3,
        });
      },

      onLeaveBack: () => {
        gsap.to(header, {
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(255, 255, 255, 0)",
          duration: 0.3,
        });
      },
    });

    // Navigation animation
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
          "<"
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
          "-=0.4"
        );
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
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className={styles.header.container}
    >
      <div>
        <h2 className="font-heading text-lg">
          Samuel Felipe.
        </h2>
      </div>

      <div className={styles.header.content}>
        {!isOpen && (
          <nav className={`${styles.header.nav} hidden md:flex`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.header.navLink}
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

        <nav
          ref={navigationRef}
          className={styles.navigation.panel}
        >
          <div className={styles.navigation.linkList}>
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                ref={(element) => {
                  if (element) {
                    linksRef.current[index] = element;
                  }
                }}
                className={styles.navigation.link}
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