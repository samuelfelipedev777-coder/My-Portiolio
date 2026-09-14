"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { styles } from "../types/styles";

type HeaderButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};

export default function HeaderButton({
  onClick,
  isOpen,
}: HeaderButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const topLine = useRef<HTMLSpanElement>(null);
  const middleLine = useRef<HTMLSpanElement>(null);
  const bottomLine = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!topLine.current || !middleLine.current || !bottomLine.current) {
        return;
      }

      gsap.to(topLine.current, {
        rotate: isOpen ? 45 : 0,
        y: isOpen ? 0 : -5,
        duration: 0.45,
        ease: "back.out(1.7)",
      });

      gsap.to(middleLine.current, {
        scaleX: isOpen ? 0 : 1,
        opacity: isOpen ? 0 : 1,
        duration: 0.25,
        ease: "power2.out",
      });

      gsap.to(bottomLine.current, {
        rotate: isOpen ? -45 : 0,
        y: isOpen ? 0 : 5,
        duration: 0.45,
        ease: "back.out(1.7)",
      });
    },
    {
      scope: buttonRef,
      dependencies: [isOpen],
    }
  );

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={styles.headerButton.button}
    >
      <span
        ref={topLine}
        className={`${styles.headerButton.line} ${styles.headerButton.lineLong}`}
      />

      <span
        ref={middleLine}
        className={`${styles.headerButton.line} ${styles.headerButton.lineMedium}`}
      />

      <span
        ref={bottomLine}
        className={`${styles.headerButton.line} ${styles.headerButton.lineShort}`}
      />
    </button>
  );
}