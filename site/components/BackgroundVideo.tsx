import { CSSProperties } from "react";

type Props = {
  src: string;
  poster?: string;
  /** Optional fallback webm / alternate MP4 */
  sources?: { src: string; type: string }[];
  /** Applied to the <video>. Defaults to cover the whole section. */
  className?: string;
  style?: CSSProperties;
  /**
   * How aggressively to fetch the video.
   *   "auto"     — hero: fetch immediately so no black flash.
   *   "metadata" — secondary sections: fetch only first frame, save cellular data.
   *   "none"     — never fetch until playback. Use with a poster.
   */
  preload?: "auto" | "metadata" | "none";
  /** Mobile-friendly object-position override (default: center center) */
  objectPosition?: string;
};

/**
 * Full-bleed background video — mobile-optimized.
 *
 *   • autoplay, muted, loop, playsInline          → plays on every mobile browser
 *   • disablePictureInPicture + disableRemotePlayback → no iOS/Android chrome over the video
 *   • pointer-events-none + tabIndex=-1 + aria-hidden → decorative only
 *   • will-change: transform                      → promote to compositor for smooth playback
 *   • absolutely positioned + object-fit: cover   → fills its containing section
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
  preload = "auto",
  objectPosition = "center",
}: Props) {
  return (
    <video
      className={`absolute inset-0 w-full h-full object-cover pointer-events-none [transform:translateZ(0)] will-change-transform ${className}`}
      style={{ objectPosition, ...style }}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      poster={poster}
      aria-hidden
      tabIndex={-1}
      disablePictureInPicture
      disableRemotePlayback
      controls={false}
    >
      {sources?.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
      {!sources && <source src={src} type="video/mp4" />}
    </video>
  );
}
