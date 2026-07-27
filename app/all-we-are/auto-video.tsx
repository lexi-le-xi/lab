"use client";

import { useEffect, useRef } from "react";

export function AutoVideo({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void video.play().catch(() => undefined);
      else video.pause();
    }, { threshold: 0.05 });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={ref} autoPlay muted loop playsInline preload="metadata" aria-label={label}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
