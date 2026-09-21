import { FaPlay } from "react-icons/fa";
import { styles } from "../types/styles";

export default function HeroCta() {
  return (
    <div
        id="hero-cta" 
        className={styles.heroCta.container}>
      <div>
        <h1 className={styles.heroCta.title}>
          SAMUEL
          <br />
          FELIPE
        </h1>

        <p className={styles.heroCta.subtitle}>Desenvolvedor Full-Stack</p>
      </div>

      <div className={styles.heroCta.watchTrigger}>
        <button aria-label="Assistir Vídeo de showcase" className={styles.heroCta.watchPlay}>
          <FaPlay className={styles.heroCta.playIcon} />
        </button>

        <span className={styles.heroCta.watchLink}>
          [ Assista minha Trajetória ]
        </span>
      </div>

      <button className={styles.heroCta.exploreButton}>Conheça meu trabalho</button>
    </div>
  );
}