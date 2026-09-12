const heroArch = "https://media.invitestory.in/seashell-vows/src/assets/hero-arch.jpg";
const floral = "https://media.invitestory.in/seashell-vows/src/assets/floral-spray.png";
const coupleImg = "https://media.invitestory.in/seashell-vows/src/assets/couple-walking.png";
import { PetalTap } from "./PetalTap";
import { useParallax } from "@/hooks/use-reveal";
import { couple } from "@/lib/wedding";

export function Hero() {
  const bg = useParallax(0.35);
  const fg = useParallax(0.12);

  return (
    <PetalTap>
      <header className="relative min-h-[100svh] overflow-hidden paper">
        <div
          className="absolute inset-x-0 top-0 h-[78svh]"
          style={{ transform: `translate3d(0, ${bg}px, 0)`, willChange: "transform" }}
        >
          <img
            src={heroArch}
            alt="Watercolor engagement arch with floral celebration"
            width={1024}
            height={1536}
            className="h-full w-full object-cover object-top animate-bloom"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
        </div>

        <img
          src={floral}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -left-10 top-6 w-36 opacity-70 animate-float-soft"
          style={{ transform: `translate3d(0, ${bg * 0.5}px, 0)` }}
        />
        <img
          src={floral}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -right-12 top-24 w-32 -scale-x-100 opacity-60 animate-float-soft"
          style={{ animationDelay: "1.4s", transform: `translate3d(0, ${bg * 0.35}px, 0)` }}
        />

        <img
          src={coupleImg}
          alt="Couple holding hands celebrating their engagement"
          width={1024}
          height={1536}
          className="pointer-events-none absolute bottom-[28%] left-1/2 w-[64%] max-w-[290px] -translate-x-1/2 object-contain animate-bloom drop-shadow-[0_18px_28px_rgba(92,80,68,0.18)]"
          style={{ transform: `translate3d(-50%, ${-fg * 0.6}px, 0)` }}
        />

        <div
          className="relative flex min-h-[100svh] flex-col items-center justify-end px-4 pb-14 text-center"
          style={{ transform: `translate3d(0, ${-fg}px, 0)` }}
        >
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-primary/90 font-medium animate-ink" style={{ animationDelay: "0.3s" }}>
            The Engagement of
          </p>

          <h1
            className="mt-2 font-display text-[2.55rem] sm:text-[3.25rem] leading-[1.06] text-foreground animate-ink font-normal uppercase tracking-wide"
            style={{ animationDelay: "0.6s" }}
          >
            <span>{couple.bride}</span>
            <span className="script mx-2 block text-2xl sm:text-3xl text-primary font-normal normal-case">&</span>
            <span>{couple.groom}</span>
          </h1>

          <div className="mt-4 flex flex-col items-center gap-1.5 animate-ink" style={{ animationDelay: "0.9s" }}>
            <p className="text-[0.66rem] uppercase tracking-airy text-muted-foreground font-medium">
              {couple.dateLabel}
            </p>
            <p className="text-[0.64rem] uppercase tracking-airy text-primary/80 font-medium">
              {couple.timeLabel}
            </p>
            <p className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
              Mogappair West · Chennai
            </p>
          </div>
        </div>
      </header>
    </PetalTap>
  );
}
