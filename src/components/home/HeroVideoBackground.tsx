"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const VIDEO_URL =
  "https://videos.pexels.com/video-files/34533564/14631686_3840_2160_30fps.mp4";

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      setPaused(true);
    }
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setPaused(false);
      } catch {
        setPaused(true);
      }
    } else {
      video.pause();
      setPaused(true);
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 z-10 size-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.pexels.com/photos/19789841/pexels-photo-19789841/free-photo-of-smoke-used-for-pest-control.jpeg?auto=compress&cs=tinysrgb&w=1800"
        aria-hidden="true"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={paused ? "Play hero background video" : "Pause hero background video"}
        aria-pressed={!paused}
        className="absolute bottom-[156px] right-5 z-30 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3.5 py-2.5 text-[12px] font-bold text-white backdrop-blur-md transition-colors hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-[102px] sm:right-8"
      >
        {paused ? <Play className="size-3.5 fill-current" /> : <Pause className="size-3.5 fill-current" />}
        {paused ? "Play video" : "Pause video"}
      </button>
    </>
  );
}
