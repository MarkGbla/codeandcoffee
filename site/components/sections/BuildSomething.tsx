"use client";

type Photo = { src: string; name?: string };

const leftCol: Photo[] = [
  { src: "/frnds/shaurya.png" },
  { src: "/frnds/manav.png" },
  { src: "/frnds/arny.png" },
  { src: "/frnds/prey.png" },
];

const midCol: Photo[] = [
  { src: "/frnds/prey.png" },
  { src: "/frnds/arny.png" },
  { src: "/frnds/shaurya.png" },
  { src: "/frnds/manav.png" },
];

const mobileCards: { top: Photo[]; bottom: Photo[] }[] = [
  {
    top: [
      { src: "/frnds/shaurya.png" },
      { src: "/frnds/manav.png" },
    ],
    bottom: [
      { src: "/frnds/prey.png" },
      { src: "/frnds/arny.png" },
    ],
  },
  {
    top: [
      { src: "/frnds/arny.png" },
      { src: "/frnds/prey.png" },
    ],
    bottom: [
      { src: "/frnds/manav.png" },
      { src: "/frnds/shaurya.png" },
    ],
  },
  {
    top: [
      { src: "/frnds/prey.png" },
      { src: "/frnds/shaurya.png" },
    ],
    bottom: [
      { src: "/frnds/arny.png" },
      { src: "/frnds/manav.png" },
    ],
  },
];

export function BuildSomething() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16 py-20 md:py-36 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2.2fr)] gap-10 md:gap-8 items-start">
        <div className="hidden md:block">
          <MarqueeColumn photos={leftCol} direction="up" duration={34} />
        </div>
        <div className="hidden md:block">
          <MarqueeColumn photos={midCol} direction="down" duration={46} />
        </div>

        <div
          className="relative order-first md:order-none md:pt-28 md:pl-4"
          style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}
        >
          <h2 className="text-white tracking-[-0.035em] font-semibold leading-[0.95] text-[clamp(40px,10vw,80px)]">
            build something
            <br />
            that excites you.
          </h2>

          <ul className="mt-8 md:mt-12 text-white/90 text-[18px] md:text-[24px] leading-[1.5] tracking-[-0.01em] list-none pl-0 space-y-1">
            <li>pick an idea you care about</li>
            <li>build a tool that solves a real problem.</li>
            <li>create a simple app from your idea.</li>
            <li>design something people can use.</li>
            <li>explore something you&apos;ve always wanted to try.</li>
          </ul>

          <p className="mt-8 md:mt-12 text-white/75 text-[18px] md:text-[24px] leading-[1.5] tracking-[-0.01em]">
            the best way to learn is to build.
          </p>

          <p className="mt-3 text-white text-[18px] md:text-[24px] leading-[1.5] tracking-[-0.01em] font-semibold">
            start small. stay consistent. grow from there.
          </p>
        </div>

        {/* Mobile: vertical snap-paging stack of photo cards, each card has two horizontal marquee rows */}
        <div className="md:hidden -mx-5 sm:-mx-8 mt-8">
          <MobileCardStack cards={mobileCards} />
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
      className="group relative h-[min(110vh,960px)] min-h-[680px] overflow-hidden"
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

function MobileCardStack({
  cards,
}: {
  cards: { top: Photo[]; bottom: Photo[] }[];
}) {
  return (
    <div
      className="h-[70vh] overflow-y-auto snap-y snap-mandatory scroll-smooth [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
    >
      {cards.map((card, i) => (
        <MobileCard key={i} top={card.top} bottom={card.bottom} />
      ))}
    </div>
  );
}

function MobileCard({ top, bottom }: { top: Photo[]; bottom: Photo[] }) {
  return (
    <div className="snap-start snap-always h-[70vh] flex flex-col gap-3 py-3">
      <MobileRow photos={top} direction="left" duration={28} />
      <MobileRow photos={bottom} direction="right" duration={28} />
    </div>
  );
}

function MobileRow({
  photos,
  direction,
  duration,
}: {
  photos: Photo[];
  direction: "left" | "right";
  duration: number;
}) {
  // Quadruple so the visible viewport is always covered, while preserving the
  // 50% loop point that animate-marquee-left/right relies on.
  const repeated = [...photos, ...photos, ...photos, ...photos];
  return (
    <div
      className="relative flex-1 overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, black 5%, black 95%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0, black 5%, black 95%, transparent 100%)",
      }}
    >
      <div
        className={
          "flex h-full gap-3 will-change-transform " +
          (direction === "left" ? "animate-marquee-left" : "animate-marquee-right")
        }
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {repeated.map((p, i) => (
          <div
            key={i}
            className="shrink-0 h-full aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
