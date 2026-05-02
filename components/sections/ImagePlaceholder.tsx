type Ratio = "16:9" | "4:5" | "4:3" | "3:2" | "21:9" | "16:7" | "1:1";

interface ImagePlaceholderProps {
  ratio: Ratio;
  width: number;
  height: number;
  description: string;
  fill?: boolean;
  variant?: "solid" | "overlay";
  className?: string;
}

const RATIO_MAP: Record<Ratio, number> = {
  "16:9": 56.25,
  "4:5": 125,
  "4:3": 75,
  "3:2": 66.667,
  "21:9": 42.857,
  "16:7": 43.75,
  "1:1": 100,
};

export function ImagePlaceholder({
  ratio,
  width,
  height,
  description,
  fill = false,
  variant = "solid",
  className = "",
}: ImagePlaceholderProps) {
  const paddingBottom = `${RATIO_MAP[ratio].toFixed(3)}%`;

  return (
    <div
      className={`relative w-full overflow-hidden ${fill ? "h-full" : ""} ${className}`}
      style={fill ? undefined : { paddingBottom }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            variant === "overlay"
              ? "linear-gradient(180deg, rgba(26,23,20,0.36) 0%, rgba(26,23,20,0.24) 100%), radial-gradient(ellipse 80% 75% at 40% 55%, rgba(64,44,32,0.16) 0%, rgba(26,23,20,0.20) 60%, rgba(26,23,20,0.28) 100%)"
              : "radial-gradient(ellipse 80% 75% at 40% 55%, rgba(64,44,32,0.72) 0%, rgba(26,23,20,0.90) 60%, #1a1714 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
        <span
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.5rem",
            fontWeight: 600,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "rgba(250,248,246,0.86)",
            lineHeight: 1,
          }}
        >
          IMAGE PLACEHOLDER
        </span>

        <span
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.5rem",
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(250,248,246,0.72)",
            lineHeight: 1,
          }}
        >
          {ratio}
        </span>

        <span
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.5625rem",
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "rgba(250,248,246,0.68)",
            lineHeight: 1,
          }}
        >
          {`${width.toLocaleString()} x ${height.toLocaleString()}`}
        </span>

        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.875rem",
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgba(250,248,246,0.80)",
            lineHeight: 1.45,
            maxWidth: "40ch",
            marginTop: "0.35rem",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
