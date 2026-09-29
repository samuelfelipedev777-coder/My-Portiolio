import { FaPlay } from "react-icons/fa";

import { styles } from "../types/styles";

export default function HeroCta() {
  return (
    <div
      id="hero-cta"
      className={styles.heroCta.container}
    >
      <div className={styles.heroCta.identity}>
        <span className={styles.heroCta.eyebrow}>
          Developer / Creative Technologist
        </span>

        <h1 className={styles.heroCta.title}>
          SAMUEL
          <br />
          <span>FELIPE</span>
        </h1>

        <div className={styles.heroCta.role}>
          <span className={styles.heroCta.roleLine} />
          <p className={styles.heroCta.subtitle}>
            Desenvolvedor Full-Stack
          </p>
        </div>
      </div>

      <div className={styles.heroCta.watchTrigger}>
        <button
          aria-label="Assistir Vídeo de showcase"
          className={styles.heroCta.watchPlay}
        >
          <FaPlay className={styles.heroCta.playIcon} />
        </button>

        <span className={styles.heroCta.watchLink}>
          [ Assista minha Trajetória ]
        </span>

        <span className={styles.heroCta.watchArrow}>↗</span>
      </div>

      <button className={styles.heroCta.exploreButton}>
        <span>Conheça meu trabalho</span>
      </button>
    </div>
  );
}