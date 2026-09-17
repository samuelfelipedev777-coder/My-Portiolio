type CodeCardProps = {
  id?: string;
  language: string;
  code: string;
  position?: "top" | "bottom";
};

const highlightCode = (code: string) => {
  const keywords = /\b(const|let|var|return|function|interface|type|export|import|from|def)\b/g;
  const types = /\b(string|number|boolean|void|any)\b/g;

  return code.split("\n").map((line, index) => (
    <div key={index}>
      {line.split(keywords).map((part, index) => {
        if (keywords.test(part)) {
          return (
            <span key={index} className="text-purple-600">
              {part}
            </span>
          );
        }

        return part.split(types).map((type, index) =>
          types.test(type) ? (
            <span key={index} className="text-purple-600">
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
        ? "top-25 right-54"
        : "right-8 bottom-8"; 
  return (
    <div
      id={id} 
      className={`absolute right-8 bottom-8 z-20 w-64 text-black ${positionClass}`}>
      <div className="absolute top-0 right-0 h-6 w-6 border-r border-t border-black/50" />

      <div className="font-mono text-xs leading-6">
        <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-black/50">
          {language}
        </div>

        <pre className="m-0 whitespace-pre-wrap">
          <code>{highlightCode(code)}</code>
        </pre>
      </div>

      <div className="absolute bottom-0 left-0 h-2 w-2 bg-black" />
    </div>
  );
};