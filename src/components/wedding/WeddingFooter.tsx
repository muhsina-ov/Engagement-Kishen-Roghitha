import { useState } from "react";
import { couple } from "@/lib/wedding";
import { useParallax } from "@/hooks/use-reveal";
import footerWash from "@/assets/footer-wash.jpg";
const floral = "https://media.invitestory.in/seashell-vows/src/assets/floral-spray.png";
const lantern = "https://media.invitestory.in/seashell-vows/src/assets/watercolor-lantern.png";
const lanterns = "https://media.invitestory.in/seashell-vows/src/assets/lantern-constellation.png";

export function WeddingFooter() {
  const drift = useParallax(0.18);
  const [shareStatus, setShareStatus] = useState("Share this invitation");

  async function copyInvitation() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus("Invitation link copied to clipboard ✨");
    } catch {
      setShareStatus("Copy the link from your browser address bar");
    }
  }

  return (
    <footer className="footer-scene relative isolate min-h-[38rem] overflow-hidden">
      <img
        src={footerWash}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={1280}
        className="absolute inset-0 -z-30 h-full w-full object-cover"
        style={{ transform: `translate3d(0, ${-drift * 0.32}px, 0) scale(1.12)` }}
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,var(--color-background)_0%,transparent_24%,color-mix(in_oklab,var(--color-background)_38%,transparent)_100%)]" />
      <img
        src={lanterns}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={1536}
        className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[110%] w-auto opacity-40"
      />
      <img
        src={lantern}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={1536}
        className="lantern-breathe pointer-events-none absolute -left-10 top-24 -z-10 w-28 opacity-70"
      />

      <div className="mx-auto flex min-h-[38rem] max-w-lg flex-col items-center justify-end px-6 pb-10 pt-28 text-center">
        <img
          src={floral}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-20 opacity-75"
        />
        <p className="mt-4 script text-lg text-primary">We cannot wait to celebrate with you</p>
        <h2 className="mt-3 font-display text-[2.4rem] sm:text-[2.75rem] leading-[1.08]">
          {couple.bride} <span className="script text-2xl text-primary">&</span> {couple.groom}
        </h2>

        <div className="mt-6 grid w-full max-w-sm grid-cols-2 border-y border-primary/25 py-4 text-left">
          <div className="border-r border-primary/25 pr-4">
            <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">The Ceremony</p>
            <p className="mt-1 font-display text-base sm:text-lg">17 September 2026</p>
            <p className="text-xs text-primary/80">10:30 AM – 11:30 AM</p>
          </div>
          <div className="pl-4">
            <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">The Place</p>
            <p className="mt-1 font-display text-base sm:text-lg">Mogappair West</p>
            <p className="text-xs text-muted-foreground">Chennai, Tamil Nadu</p>
          </div>
        </div>

        <button
          type="button"
          onClick={copyInvitation}
          className="press mt-7 min-h-[48px] w-full max-w-xs rounded-sm border border-primary/45 bg-background/80 px-6 text-[0.68rem] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm"
        >
          Copy invitation link
        </button>
        <p aria-live="polite" className="mt-2.5 min-h-5 text-xs text-muted-foreground">
          {shareStatus}
        </p>

        <p className="mt-7 text-xs leading-relaxed text-foreground/75">
          With love & best compliments from our families
        </p>

        <a
          href="https://www.instagram.com/invitestory.in/"
          target="_blank"
          rel="noreferrer"
          className="mt-6 text-[0.55rem] uppercase tracking-[0.18em] text-foreground/40 transition-colors hover:text-primary/70"
        >
          Crafted with ♥ by @invitestory.in
        </a>
      </div>
    </footer>
  );
}
