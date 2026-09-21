"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { styles } from "../types/styles";

type ProjectItemProps = {
  title: string;
  technologies: string[];
  image: string;
  kanji: string;
  meaning: string;
  description: string;
};

export default function ProjectItem({
  title,
  technologies,
  image,
  kanji,
  meaning,
  description,
}: ProjectItemProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const xTo = useRef<((value: number) => void) | null>(null);
  const yTo = useRef<((value: number) => void) | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!previewRef.current) return;

    gsap.killTweensOf(previewRef.current);

    gsap.set(previewRef.current, {
      clipPath: "inset(0 100% 0 0)",
      opacity: 1,
      scale: 1.05,
    });

    gsap.to(previewRef.current, {
      clipPath: "inset(0 0% 0 0)",
      scale: 1,
      duration: 0.7,
      ease: "power4.out",
    });

    xTo.current = gsap.quickTo(previewRef.current, "x", {
      duration: 0.8,
      ease: "power3.out",
    });

    yTo.current = gsap.quickTo(previewRef.current, "y", {
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    xTo.current?.(event.clientX + 30);
    yTo.current?.(event.clientY - 180);
  };

  const handleMouseLeave = () => {
    if (!previewRef.current) return;

    gsap.to(previewRef.current, {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  const openModal = () => {
    setIsModalOpen(true);

    requestAnimationFrame(() => {
      if (!overlayRef.current || !modalRef.current) return;

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power4.out",
        },
      );
    });
  };

  const closeModal = () => {
    if (!overlayRef.current || !modalRef.current) {
      setIsModalOpen(false);
      return;
    }

    const timeline = gsap.timeline({
      onComplete: () => setIsModalOpen(false),
    });

    timeline
      .to(modalRef.current, {
        opacity: 0,
        y: 25,
        scale: 0.98,
        duration: 0.35,
        ease: "power2.in",
      })
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        },
        "-=0.15",
      );
  };

  return (
    <>
      <article
        className={styles.projectItem.article}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.projectItem.kanjiContainer}>
          <span className={styles.projectItem.kanji}>
            {kanji}
          </span>

          <span className={styles.projectItem.meaning}>
            {meaning}
          </span>
        </div>

        <div
          ref={previewRef}
          className={styles.projectItem.preview}
        >
          <img
            src={image}
            alt={title}
            className={styles.projectItem.previewImage}
          />
        </div>

        <div className={styles.projectItem.content}>
          <div className="min-w-0">
            <h3 className={styles.projectItem.title}>
              {title}
            </h3>

            <div className={styles.projectItem.technologies}>
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className={styles.projectItem.technology}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={openModal}
            className={styles.projectItem.detailsButton}
          >
            <span>Ver Detalhes</span>

            <span className={styles.projectItem.detailsArrow}>
              ↗
            </span>

            <span className={styles.projectItem.detailsLine} />
            <span className={styles.projectItem.detailsLineHover} />
          </button>
        </div>
      </article>

      {isModalOpen && (
        <div
          ref={overlayRef}
          className={styles.projectItem.modalOverlay}
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className={styles.projectItem.modal}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className={styles.projectItem.modalClose}
              aria-label="Fechar detalhes"
            >
              ✕
            </button>

            <div className={styles.projectItem.modalImageWrapper}>
              <img
                src={image}
                alt={title}
                className={styles.projectItem.modalImage}
              />

              <div className={styles.projectItem.modalImageOverlay} />
            </div>

            <div className={styles.projectItem.modalContent}>
              <div className={styles.projectItem.modalMain}>
                <p className={styles.projectItem.modalEyebrow}>
                  {meaning} / Project Showcase
                </p>

                <h2 className={styles.projectItem.modalTitle}>
                  {title}
                </h2>

                <p className={styles.projectItem.modalDescription}>
                  {description}
                </p>
              </div>

              <div className={styles.projectItem.modalSide}>
                <div>
                  <p className={styles.projectItem.modalSectionLabel}>
                    Technologies
                  </p>

                  <div className={styles.projectItem.modalTechnologies}>
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className={styles.projectItem.modalTechnology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.projectItem.modalFooter}>
                  <p className={styles.projectItem.modalFooterLabel}>
                    Project Index
                  </p>

                  <p className={styles.projectItem.modalNumber}>
                    {meaning}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}