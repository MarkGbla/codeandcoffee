"use client";

type Photo = { src: string; name?: string };

const leftCol: Photo[] = [
  { src: "/frnds/codeandcoffee001.png" },
  { src: "/frnds/codeandcoffee003.png" },
  { src: "/frnds/codeandcoffee004.png" },
  { src: "/frnds/codeandcoffee002.png" },
];

const midCol: Photo[] = [
  { src: "/frnds/codeandcoffee002.png" },
  { src: "/frnds/codeandcoffee004.png" },
  { src: "/frnds/codeandcoffee001.png" },
  { src: "/frnds/codeandcoffee003.png" },
];

export function BuildSomething() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-24 md:py-36 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2.2fr)] gap-6 md:gap-8 items-start">
        <MarqueeColumn photos={leftCol} direction="up" duration={34} />
        <MarqueeColumn photos={midCol} direction="down" duration={46} />

        <div
          className="relative md:pt-28 md:pl-4"
          style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
        >
          <h2 className="text-white tracking-[-0.035em] font-semibold leading-[0.95] text-[44px] md:text-[80px]">
            build something
            <br />
            that excites you.
          </h2>

          <ul className="mt-10 md:mt-12 text-white/90 text-[20px] md:text-[24px] leading-[1.45] tracking-[-0.01em] list-none pl-0 space-y-[2px]">
            <li>pick an idea you care about</li>
            <li>build a tool that solves a real problem.</li>
            <li>create a simple app from your idea.</li>
            <li>design something people can use.</li>
            <li>explore something you&apos;ve always wanted to try.</li>
          </ul>

          <p className="mt-10 md:mt-12 text-white/75 text-[20px] md:text-[24px] leading-[1.45] tracking-[-0.01em]">
            the best way to learn is to build.
          </p>

          <p className="mt-4 text-white text-[20px] md:text-[24px] leading-[1.45] tracking-[-0.01em] font-semibold">
            start small. stay consistent. grow from there.
          </p>
        </div>
      </div>
    </section>
  );
}

function MarqueeColumn({
  photos,
  direction,
  duration,
}: {
  photos: Photo[];
  direction: "up" | "down";
  duration: number;
}) {
  const doubled = [...photos, ...photos];

  return (
    <div
      className="group relative h-[110vh] min-h-[780px] overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className={
          "flex flex-col gap-6 will-change-transform " +
          (direction === "up" ? "animate-marquee-up" : "animate-marquee-down") +
          " [animation-play-state:running] group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]"
        }
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {doubled.map((p, i) => (
          <Tile key={i} photo={p} aria-hidden={i >= photos.length || undefined} />
        ))}
      </div>
    </div>
  );
}

function Tile({
  photo,
  ...rest
}: {
  photo: Photo;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <figure className="flex flex-col gap-2" {...rest}>
      <div className="w-full overflow-hidden rounded-2xl bg-neutral-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.name ?? ""}
          loading="lazy"
          className="w-full h-auto object-contain block select-none"
          draggable={false}
        />
      </div>
      {photo.name && (
        <figcaption className="font-scribble text-[14px] md:text-[15px] text-white/90 leading-none pt-1">
          {photo.name}
        </figcaption>
      )}
    </figure>
  );
}
