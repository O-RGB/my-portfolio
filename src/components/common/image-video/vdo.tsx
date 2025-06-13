"use client";

import { useEffect, useRef, useState } from "react";

export interface SlowMotionVideoPlayerProps {
  // Required props
  videoSrc: string;

  // Optional styling props
  width?: number | string;
  height?: number | string;
  className?: string;
  containerClassName?: string;

  // Animation settings
  duration?: number; // Animation duration in milliseconds
  autoPlay?: boolean;
  autoPlayDelay?: number; // Delay before auto play in milliseconds
  loop?: boolean; // Whether to loop the animation

  // Control settings
  showControls?: boolean;
  playButtonText?: string;
  resetButtonText?: string;
  loadingText?: string;

  // Callback functions
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  onLoadError?: (error: any) => void;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;

  // Easing function (optional custom easing)
  easingFunction?: (t: number) => number;
}

export default function SlowMotionVideoPlayer({
  videoSrc,
  width = 800,
  height = 600,
  className = "",
  containerClassName = "",
  duration = 4000,
  autoPlay = true,
  autoPlayDelay = 500,
  loop = false,
  showControls = true,
  playButtonText = "Play Animation",
  resetButtonText = "Reset",
  loadingText = "Loading video...",
  onLoadStart,
  onLoadEnd,
  onLoadError,
  onAnimationStart,
  onAnimationEnd,
  easingFunction,
}: SlowMotionVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const animationIdRef = useRef<number>(0);

  // Default Apple-style easing function
  const defaultAppleEasing = (t: number) => {
    if (t < 0.5) {
      return 2 * t * t;
    }
    return 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  const easing = easingFunction || defaultAppleEasing;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      onLoadStart?.();
    };

    const handleLoadedData = () => {
      console.log("Video loaded successfully");
      setLoaded(true);
      video.currentTime = 0;
      onLoadEnd?.();
    };

    const handleError = (e: any) => {
      console.error("Failed to load video:", videoSrc, e);
      onLoadError?.(e);
    };

    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc, onLoadStart, onLoadEnd, onLoadError]);

  const startAnimation = () => {
    if (!loaded || !videoRef.current || isPlaying) return;

    const video = videoRef.current;
    setIsPlaying(true);
    onAnimationStart?.();

    const startTime = performance.now();
    const videoDuration = video.duration;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      let rawProgress = Math.min(elapsed / duration, 1);
      let easedProgress = easing(rawProgress);

      const targetTime = Math.min(easedProgress * videoDuration, videoDuration);
      video.currentTime = targetTime;

      if (rawProgress >= 1) {
        video.currentTime = videoDuration;
        setIsPlaying(false);
        onAnimationEnd?.();

        // Handle looping
        if (loop) {
          setTimeout(() => {
            resetAnimation();
            setTimeout(() => {
              startAnimation();
            }, 100);
          }, autoPlayDelay);
        }
        return;
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);
  };

  const resetAnimation = () => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }

    setIsPlaying(false);
  };

  useEffect(() => {
    if (loaded && !isPlaying && autoPlay) {
      const timer = setTimeout(() => {
        startAnimation();
      }, autoPlayDelay);

      return () => clearTimeout(timer);
    }
  }, [loaded, autoPlay, autoPlayDelay]);

  useEffect(() => {
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const videoStyles = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full ${containerClassName}`}
    >
      <div className="relative">
        <video
          ref={videoRef}
          src={videoSrc}
          style={videoStyles}
          className={`rounded-xl shadow-lg ${className}`}
          muted
          playsInline
          preload="auto"
        />

        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl bg-black bg-opacity-50 rounded-xl">
            {loadingText}
          </div>
        )}
      </div>

      {loaded && showControls && (
        <div className="mt-6 flex gap-4">
          <button
            onClick={startAnimation}
            disabled={isPlaying}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              isPlaying
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isPlaying ? "Playing..." : playButtonText}
          </button>

          <button
            onClick={resetAnimation}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-all"
          >
            {resetButtonText}
          </button>
        </div>
      )}
    </div>
  );
}
