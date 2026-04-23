import { CSSProperties } from "react";

type Props = {
  src: string;
  poster?: string;
  /** Optional fallback webm / alternate MP4 */
  sources?: { src: string; type: string }[];
  /** Applied to the <video>. Defaults to cover the whole section. */
  className?: string;
  style?: CSSProperties;
};

/**
 * Full-bleed background video.
 *
 * Behavior (matches aiplusfriends.com hero):
 *   • autoplay, muted, loop, playsinline  → plays as soon as it loads on every device
 *   • preload="auto"                      → fetch right away so there's no blank flash
 *   • absolutely positioned + object-fit:cover → fills its containing section
 *   • aria-hidden, no controls            → decorative, not a media element for A11y
 *
 * Layering:
 *   The parent section must be `position: relative` with its own `z-index` stack.
 *   This component renders at z-0; a sibling gradient/overlay can sit at z-10; real
 *   page content at z-20. See components/sections/Hero.tsx for the composition.
 */
export function BackgroundVideo({
  src,
  poster,
  sources,
  className = "",
  style,
}: Props) {
  return (
    <video
      className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${className}`}
      style={style}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden
      tabIndex={-1}
    >
      {sources?.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
      {!sources && <source src={src} type="video/mp4" />}
    </video>
  );
}
