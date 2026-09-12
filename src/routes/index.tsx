import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { Reveal } from "@/components/wedding/Section";
import { SectionTitle } from "@/components/wedding/Ornaments";
import { WishLantern } from "@/components/wedding/WishLantern";
import { WeddingFooter } from "@/components/wedding/WeddingFooter";
import { InvitationOpener } from "@/components/wedding/InvitationOpener";
import { MusicPlayer } from "@/components/wedding/MusicPlayer";
import { couple, events, venue, downloadICS } from "@/lib/wedding";
import { useParallax } from "@/hooks/use-reveal";
import { MapPin, Navigation, Calendar as CalendarIcon, Clock, Heart } from "lucide-react";

const floral = "https://media.invitestory.in/seashell-vows/src/assets/floral-spray.png";
const floralDivider = "https://media.invitestory.in/seashell-vows/src/assets/bougainvillea-divider.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JAI KISHEN & ROGHITHA | Engagement Invitation" },
      {
        name: "description",
        content:
          "Celebrate the engagement of JAI KISHEN & ROGHITHA on 17 September 2026 in Chennai. Event details, venue directions and calendar invite.",
      },
      { property: "og:site_name", content: "JAI KISHEN & ROGHITHA Engagement" },
      { property: "og:title", content: "JAI KISHEN & ROGHITHA | Engagement Invitation" },
      {
        property: "og:description",
        content:
          "Celebrate the engagement of JAI KISHEN & ROGHITHA on 17 September 2026 in Chennai. Event details, venue directions and calendar invite.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://engagement-kishen-roghitha.invitingyou.top/" },
      {
        property: "og:image",
        content: "https://engagement-kishen-roghitha.invitingyou.top/og-image.jpg",
      },
      {
        property: "og:image:secure_url",
        content: "https://engagement-kishen-roghitha.invitingyou.top/og-image.jpg",
      },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "JAI KISHEN & ROGHITHA Engagement Invitation",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JAI KISHEN & ROGHITHA | Engagement Invitation" },
      {
        name: "twitter:description",
        content:
          "Celebrate the engagement of JAI KISHEN & ROGHITHA on 17 September 2026 in Chennai.",
      },
      {
        name: "twitter:image",
        content: "https://engagement-kishen-roghitha.invitingyou.top/og-image.jpg",
      },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const drift = useParallax(0.18);

  return (
    <main className="paper overflow-x-hidden min-h-screen relative selection:bg-primary/20 selection:text-foreground">
      <MusicPlayer />
      <InvitationOpener />
      <Hero />

      {/* Countdown Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-[0.62rem] uppercase tracking-airy text-primary/90 font-medium">
              <Clock className="w-3 h-3 inline" /> Days to Engagement
            </span>
            <div className="mt-5 w-full">
              <Countdown iso={couple.weddingISO} />
            </div>
            <p className="mt-3 text-xs text-muted-foreground font-light">
              Thursday, 17 September 2026 · 10:30 AM IST
            </p>
          </div>
        </Reveal>
      </section>

      {/* Story / Welcome Invitation Section */}
      <section className="relative px-5 sm:px-7 pb-16">
        <img
          src={floral}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -right-16 -top-6 w-36 sm:w-44 opacity-40"
          style={{ transform: `translate3d(0, ${-drift * 0.4}px, 0)` }}
        />
        <Reveal>
          <SectionTitle overline="Auspicious Beginning" title="Two Hearts, One Promise" />
          <div className="max-w-md mx-auto text-center space-y-4">
            <p className="font-display text-[1.12rem] sm:text-[1.2rem] leading-[1.85] text-foreground/90 font-normal">
              With the cherished blessings of our parents, elders, and families, we joyfully invite you
              to grace the auspicious engagement ceremony of
            </p>
            <p className="font-display text-2xl sm:text-3xl text-primary font-semibold tracking-wide uppercase">
              {couple.bride} <span className="script text-2xl text-foreground/80 normal-case">&</span> {couple.groom}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              As we exchange rings and take our first steps toward a lifetime of togetherness, your presence and heartfelt blessings will make our special day complete.
            </p>
          </div>

          <div className="mt-7 flex justify-center">
            <div className="relative rounded-xl overflow-hidden card-soft max-w-sm w-full p-2 border border-primary/30 shadow-md">
              <img
                src="/og-image.jpg"
                alt="JAI KISHEN and ROGHITHA Engagement Ceremony Rings"
                loading="lazy"
                width={1200}
                height={630}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="pt-2.5 pb-1 text-center">
                <span className="script text-base text-primary">#KishenRoghithaEngagement</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Celebrations & Schedule */}
      <section className="relative px-4 sm:px-6 pb-16">
        <img
          src={floralDivider}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={2172}
          height={724}
          className="pointer-events-none mx-auto mb-8 w-full max-w-md opacity-80"
        />
        <Reveal>
          <SectionTitle overline="Schedule of Events" title="Celebrations" />
        </Reveal>
        <ul className="space-y-4 max-w-md mx-auto">
          {events.map((ev, i) => (
            <li key={ev.name}>
              <Reveal delay={i * 80}>
                <article className="card-soft press p-5 rounded-lg border border-primary/25 bg-card/90">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3.5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/35 bg-primary/10 text-xl text-primary">
                      {ev.glyph}
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-xl sm:text-2xl text-foreground font-normal">
                        {ev.name}
                      </h3>
                      <p className="text-[0.62rem] uppercase tracking-airy text-primary font-medium mt-0.5">
                        {ev.date} · {ev.time}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-primary/15">
                    <p className="text-xs sm:text-sm text-foreground/85 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-primary mt-0.5" />
                      <span>{ev.venue}</span>
                    </p>
                    <p className="mt-2 text-xs italic text-muted-foreground pl-5">
                      {ev.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Interactive Wish Lantern */}
      <Reveal>
        <WishLantern />
      </Reveal>

      {/* Venue Section */}
      <section className="px-4 sm:px-6 pb-16">
        <Reveal>
          <SectionTitle overline="Find Your Way" title="The Venue" />
          <div className="card-soft overflow-hidden max-w-md mx-auto rounded-lg border border-primary/30 bg-card/95 shadow-sm">
            {/* Header banner */}
            <div className="bg-gradient-to-r from-amber-50/80 via-primary/10 to-amber-50/80 px-6 py-6 border-b border-primary/20 text-center relative overflow-hidden">
              <span className="inline-block p-3 rounded-full bg-primary/15 text-primary mb-2 shadow-inner">
                <MapPin className="w-6 h-6" />
              </span>
              <h3 className="font-display text-2xl text-foreground font-normal">
                {venue.name}
              </h3>
              <p className="text-[0.62rem] uppercase tracking-wider text-muted-foreground mt-1 font-sans">
                Mogappair West · Chennai
              </p>
            </div>

            <div className="p-5 sm:p-6 space-y-4">
              <div className="rounded-md bg-secondary/50 p-4 border border-primary/15 text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Full Address
                </p>
                <p className="text-sm leading-relaxed text-foreground/90">
                  Door no: 25, B Block, 2nd floor,<br />
                  Annal apartment, Annamalai avenue,<br />
                  Mogappair west, Chennai – 600037.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="press flex min-h-[50px] w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-[0.72rem] uppercase tracking-airy text-primary-foreground font-medium shadow-md active:scale-98 transition-all hover:bg-primary/90"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Google Maps
                </a>

                <p className="text-center text-[0.7rem] text-muted-foreground pt-1">
                  Tap to navigate directly using Google Maps on your phone.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Save The Date Calendar CTA */}
      <section className="px-4 sm:px-6 pb-20">
        <Reveal>
          <div className="card-soft p-6 sm:p-7 text-center max-w-md mx-auto rounded-lg border border-primary/35 shadow-sm">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-primary mb-2">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <p className="script text-xl text-primary font-normal">Save Our Date</p>
            <p className="mt-2 font-display text-xl text-foreground">
              Thursday, 17 September 2026
            </p>
            <p className="mt-1 text-xs text-muted-foreground max-w-xs mx-auto">
              Add the engagement ceremony & celebration directly to your Apple or Google Calendar.
            </p>
            <button
              type="button"
              onClick={downloadICS}
              className="press mt-5 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-md border border-primary/45 bg-secondary/80 text-[0.7rem] uppercase tracking-airy text-foreground font-medium shadow-sm transition-colors hover:bg-secondary active:scale-98"
            >
              <CalendarIcon className="w-4 h-4 text-primary" />
              Add to Calendar (.ics)
            </button>
          </div>
        </Reveal>
      </section>

      <WeddingFooter />
    </main>
  );
}
