import { useEffect, useRef, useState } from "react";
import { couple } from "@/lib/wedding";
const poster = "https://media.invitestory.in/seashell-vows/src/assets/opener-frames/lantern-reveal-first.png";

const SESSION_KEY = "kishen-roghitha-engagement-opened";

export function InvitationOpener() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const alreadyOpened = sessionStorage.getItem(SESSION_KEY) === "true";
    if (alreadyOpened) return;

    setVisible(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  async function openInvitation() {
    if (started) return;
    setStarted(true);

    // Trigger BGM
    window.dispatchEvent(new Event("start-bgm"));

    if (videoRef.current) {
      try {
        await videoRef.current.play();
      } catch {
        finishOpening();
      }
    } else {
      finishOpening();
    }
  }

  function finishOpening() {
    sessionStorage.setItem(SESSION_KEY, "true");
    window.setTimeout(() => setClosing(true), 180);
    window.setTimeout(() => {
      document.body.style.overflow = "";
      setVisible(false);
    }, 1900);
  }

  if (!visible) return null;

  return (
    <div
      className={`invitation-opener fixed inset-0 z-[100] bg-background ${closing ? "is-closing" : ""}`}
      role="dialog"
      aria-label="Open JAI KISHEN and ROGHITHA's engagement invitation"
    >
      <video
        ref={videoRef}
        src="https://media.invitestory.in/seashell-vows/media/wedding-opener.mp4"
        poster={poster}
        preload="auto"
        playsInline
        muted
        onEnded={finishOpening}
        className="h-full w-full object-cover [transform:translateZ(0)]"
      />
      {!started && (
        <button
          type="button"
          onClick={openInvitation}
          className="absolute inset-0 flex w-full flex-col items-center justify-end bg-[linear-gradient(180deg,transparent_40%,rgba(25,29,38,0.72)_100%)] px-6 pb-16 text-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80"
        >
          <span className="text-[0.62rem] uppercase tracking-[0.32em] text-[#e8c88f] mb-1 font-sans">
            Engagement Invitation
          </span>
          <span className="font-display text-2xl md:text-3xl text-[#f4d8a1] uppercase tracking-wide">
            {couple.bride} <span className="script text-2xl md:text-3xl normal-case">&</span> {couple.groom}
          </span>
          <span className="mt-4 inline-flex items-center gap-2 border-b border-white/60 pb-1 text-[0.68rem] uppercase tracking-[0.24em] transition-transform hover:scale-105">
            Tap to open
          </span>
        </button>
      )}
    </div>
  );
}
