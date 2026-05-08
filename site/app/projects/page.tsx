import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ComingSoon } from "@/components/ComingSoon";

export default function ProjectsPage() {
  return (
    <main className="relative bg-white">
      <Nav variant="solid" />
      <ComingSoon
        title="projects"
        blurb="real things built in public—tiny tools, experiments, and ideas that ship. we’re curating the first set."
        primaryCta={{ href: "/", label: "back home" }}
        secondaryCta={{ href: "/community", label: "join community" }}
      />
      <Footer />
    </main>
  );
}

