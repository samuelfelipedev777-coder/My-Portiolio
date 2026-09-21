type TextContentProps = {
  text: string[];
  size?: number;
  className?: string;
};

export default function TextContent({
  text,
  size = 12,
  className = "",
}: TextContentProps) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div
        className="mt-2 shrink-0 bg-black"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />

      <div className="flex flex-col gap-1">
        {text.map((line, index) => (
          <p
            key={index}
            className="max-w-md text-[10px] leading-relaxed tracking-[0.15em]"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}