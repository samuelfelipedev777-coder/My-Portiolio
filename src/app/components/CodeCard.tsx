
import { styles } from "../types/styles";

type CodeCardProps = {
  id?: string;
  language: string;
  code: string;
  position?: "top" | "bottom";
};

const highlightCode = (code: string) => {
  const keywords =
    /\b(const|let|var|return|function|interface|type|export|import|from|def)\b/g;

  const types = /\b(string|number|boolean|void|any)\b/g;

  return code.split("\n").map((line, index) => (
    <div key={index}>
      {line.split(keywords).map((part, index) => {
        if (keywords.test(part)) {
          return (
            <span
              key={index}
              className={styles.codeCard.keyword}
            >
              {part}
            </span>
          );
        }

        return part.split(types).map((type, index) =>
          types.test(type) ? (
            <span
              key={index}
              className={styles.codeCard.type}
            >
              {type}
            </span>
          ) : (
            type
          )
        );
      })}
    </div>
  ));
};

export default function CodeCard({
  id,
  language,
  code,
  position = "bottom",
}: CodeCardProps) {
  const positionClass =
    position === "top"
      ? styles.codeCard.positionTop
      : styles.codeCard.positionBottom;

  return (
    <div
      id={id}
      className={`${styles.codeCard.container} ${positionClass}`}
    >
      <div className={styles.codeCard.corner} />

      <div className={styles.codeCard.content}>
        <div className={styles.codeCard.language}>
          {language}
        </div>

        <pre className={styles.codeCard.pre}>
          <code>{highlightCode(code)}</code>
        </pre>
      </div>

      <div className={styles.codeCard.marker} />
    </div>
  );
}