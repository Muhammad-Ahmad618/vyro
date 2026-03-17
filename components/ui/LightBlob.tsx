interface LightBlobProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  blur?: string;
  className?: string;
}

export function LightBlob({
  top,
  left,
  right,
  bottom,
  width,
  height,
  backgroundColor,
  blur,
  className,
}: LightBlobProps) {
  const isTailwindBg = backgroundColor?.startsWith("bg-");
  return (
    <div
      style={{
        top: `${top}`,
        left: `${left}`,
        right: `${right}`,
        bottom: `${bottom}`,
        width: `${width}`,
        height: `${height}`,
        backgroundColor: isTailwindBg ? undefined : backgroundColor,
      }}
      className={`absolute rounded-full ${isTailwindBg ? backgroundColor : ""} ${
        blur ? blur : "blur-2xl"
      } ${className || ""}`}
    />
  );
}
