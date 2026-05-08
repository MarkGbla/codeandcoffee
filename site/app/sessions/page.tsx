import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ComingSoon } from "@/components/ComingSoon";

export default function SessionsPage() {
  return (
    <main className="relative bg-white">
      <Nav variant="solid" />
      <ComingSoon
        title="sessions"
        blurb="weekly build sessions, workshops, and live co-working. we’re finalizing the schedule and format."
        primaryCta={{ href: "/", label: "back home" }}
        secondaryCta={{ href: "/about", label: "why we exist" }}
      />
      <Footer />
    </main>
  );
}

