import Link from "next/link";

type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string | null;
  tone?: "dark" | "light";
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-[20px] md:text-[22px]",
  md: "text-[28px]",
  lg: "text-[44px] md:text-[56px]",
  xl: "text-[72px] md:text-[120px] lg:text-[160px]",
};

export function Logo({
  size = "sm",
  className = "",
  href = "/",
  tone = "dark",
}: Props) {
  const color = tone === "light" ? "text-white" : "text-black";

  const content = (
    <span
      className={`font-display font-semibold tracking-[-0.02em] inline-flex items-baseline gap-[0.18em] leading-none ${color} ${sizes[size]} ${className}`}
      aria-label="code & coffee"
    >
      <span>code</span>
      <span aria-hidden className="text-[#A86A2C]">
        &
      </span>
      <span>coffee</span>
    </span>
  );

  if (href === null) return content;
  return (
    <Link href={href} className="inline-flex">
      {content}
    </Link>
  );
}
