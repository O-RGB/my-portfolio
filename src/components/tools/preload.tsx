"use client";
import useVideoStore from "@/stores/video-sotre";
import { useEffect, ReactNode, useState } from "react";

interface PreloadAssetsProps {
  children: ReactNode;
}

export default function PreloadAssets({ children }: PreloadAssetsProps) {
  const loadAllVideos = useVideoStore((state) => state.loadAllVideos);
  const progress = useVideoStore((state) => state.progress);

  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderContent, setShouldRenderContent] = useState(false);

  useEffect(() => {
    loadAllVideos();
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsLoading(false);
        setShouldRenderContent(true);
      }, 1000);
    }
  }, [progress]);

  return (
    <>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
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
                className="transition-all duration-1000 ease-in-out"
                stroke="#8b847e"
                strokeWidth="4"
                fill="none"
                r="56"
                cx="64"
                cy="64"
                style={{
                  strokeDasharray: 351.858,
                  strokeDashoffset: 351.858 - (351.858 * progress) / 100,
                }}
              />
            </svg>

            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#8b847e]">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Loading text */}
          <div className="text-center">
            <p className="text-xl font-medium text-[#8b847e]">
              กำลังโหลดข้อมูล
            </p>
            <p className="mt-2 text-sm text-[#8b847e]/80">โปรดรอสักครู่...</p>
          </div>
        </div>
      </div>

      {/* Main Content - only render after loading */}
      {shouldRenderContent && (
        <div className="transition-opacity duration-1000 opacity-0 animate-fade-in ">
          {children}
        </div>
      )}
    </>
  );
}
