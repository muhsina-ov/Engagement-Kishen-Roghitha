import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.65;

    // Listen for custom trigger from Invitation Opener or user tap
    const handleStartBgm = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (err) {
        console.warn("Audio autoplay blocked or waiting for user gesture", err);
      }
    };

    window.addEventListener("start-bgm", handleStartBgm);

    // Also attempt to play on first user tap/click on window if not yet played
    const handleUserGesture = async () => {
      if (!hasInteracted && audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
          setHasInteracted(true);
          cleanupGesture();
        } catch {
          // Keep waiting for an explicit click
        }
      }
    };

    const cleanupGesture = () => {
      window.removeEventListener("pointerdown", handleUserGesture);
      window.removeEventListener("touchstart", handleUserGesture);
      window.removeEventListener("click", handleUserGesture);
    };

    window.addEventListener("pointerdown", handleUserGesture, { passive: true });
    window.addEventListener("touchstart", handleUserGesture, { passive: true });
    window.addEventListener("click", handleUserGesture, { passive: true });

    return () => {
      window.removeEventListener("start-bgm", handleStartBgm);
      cleanupGesture();
    };
  }, [hasInteracted]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setHasInteracted(true);
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Playback error:", err);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/media/bgm.mp3"
        loop
        preload="auto"
        playsInline
      />

      <div className="fixed top-5 right-5 z-40">
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
          className={`group relative flex items-center gap-2 rounded-full border border-primary/40 bg-background/85 px-3 py-2 text-foreground shadow-lg backdrop-blur-md transition-all duration-300 active:scale-95 hover:border-primary hover:bg-background ${
            isPlaying ? "ring-1 ring-primary/40 shadow-primary/20" : ""
          }`}
        >
          {isPlaying ? (
            <div className="flex items-center gap-1">
              <span className="flex h-3 w-3 items-center justify-center">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
                </span>
              </span>
              <Volume2 className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <VolumeX className="h-4 w-4 text-muted-foreground transition-transform group-hover:scale-110" />
            </div>
          )}

          <span className="font-display text-xs tracking-wider text-foreground/90 select-none">
            {isPlaying ? "Teri Ore" : "Music Off"}
          </span>

          {/* Equalizer bars animation when playing */}
          {isPlaying && (
            <span className="flex items-end gap-[2px] h-3 ml-0.5">
              <span className="w-[2px] h-full bg-primary animate-[pulse_1s_ease-in-out_infinite]" />
              <span className="w-[2px] h-2/3 bg-primary animate-[pulse_0.7s_ease-in-out_infinite_0.2s]" />
              <span className="w-[2px] h-4/5 bg-primary animate-[pulse_1.2s_ease-in-out_infinite_0.4s]" />
            </span>
          )}
        </button>
      </div>
    </>
  );
}
