import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ComingSoon } from "@/components/ComingSoon";

export default function CommunityPage() {
  return (
    <main className="relative bg-white">
      <Nav variant="solid" />
      <ComingSoon
        title="community"
        blurb="a place to meet builders, share progress, and stay consistent. we’re setting up the community spaces now."
        primaryCta={{ href: "/", label: "back home" }}
        secondaryCta={{ href: "/sessions", label: "see sessions" }}
      />
      <Footer />
    </main>
  );
}

