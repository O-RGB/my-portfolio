"use client";

import useVideoStore from "@/stores/video-sotre";
import { useEffect, ReactNode, useState } from "react";

interface PreloadAssetsProps {
  children: ReactNode;
}

export default function PreloadAssets({ children }: PreloadAssetsProps) {
  const loadVideos = useVideoStore((state) => state.loadVideos);
  const progress = useVideoStore((state) => state.progress);
  const isLoading = useVideoStore((state) => state.isLoading);

  const [showContent, setShowContent] = useState(false);
  const [loadingOpacity, setLoadingOpacity] = useState(1);
  const [contentOpacity, setContentOpacity] = useState(0);

  // Start loading on mount
  useEffect(() => {
    loadVideos();

    // Safety timeout - show content after 8 seconds no matter what
    const safetyTimeout = setTimeout(() => {
      handleCompletion();
    }, 8000);

    return () => clearTimeout(safetyTimeout);
  }, []);

  // Watch for loading completion
  useEffect(() => {
    if (!isLoading && progress >= 100) {
      handleCompletion();
    }
  }, [isLoading, progress]);

  // Handle transition to content
  const handleCompletion = () => {
    // Fade out loading screen
    setLoadingOpacity(0);

    // After loading screen fades out, show content
    setTimeout(() => {
      setShowContent(true);

      // Fade in content
      setTimeout(() => {
        setContentOpacity(1);
      }, 100);
    }, 500);
  };

  if (showContent) {
    return (
      <div
        className="transition-opacity duration-1000 ease-in-out"
        style={{ opacity: contentOpacity }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500"
      style={{ opacity: loadingOpacity }}
    >
      {/* Solid background */}
      <div className="absolute inset-0 bg-[#efe9e2] dark:bg-black" />

      {/* Loading container */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Circular progress indicator */}
        <div className="relative w-32 h-32">
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full border-4 border-[#d8d1ca]" />

          {/* Progress circle */}
          <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
            <circle
              className="transition-all duration-300 ease-in-out"
              stroke="#8b847e"
              strokeWidth="4"
              fill="none"
              r="56"
              cx="64"
              cy="64"
              style={{
                strokeDasharray: 351.858,
                strokeDashoffset:
                  351.858 - (351.858 * Math.min(progress, 100)) / 100,
              }}
            />
          </svg>

          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-[#8b847e]">
              {Math.min(Math.round(progress), 100)}%
            </span>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <p className="text-xl font-medium text-[#8b847e]">กำลังโหลดข้อมูล</p>
          <p className="mt-2 text-sm text-[#8b847e]/80">โปรดรอสักครู่...</p>
        </div>
      </div>
    </div>
  );
}
