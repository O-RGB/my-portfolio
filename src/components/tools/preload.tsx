"use client";
import { useEffect, useState, ReactNode } from "react";

const fileList: FileList = {
  images: [
    "/images/about-me/about-me-3.jpg",
    "/images/about-me/about-me-2.jpg",
    "/images/about-me/about-me-1.jpg",
    "/images/about-me/about-me-modal.jpg",
    "/images/project/gaysorn/gaysorn-icon.png",
    "/images/project/land-4-thai/land-4-thai-logo-app.png",
    "/images/project/land-4-thai/land-4-thai-screen.png",
    "/images/project/land-4-thai/land-4-thai-overlay-preview.png",
    "/images/project/rfp/rfp-award-screen.png",
    "/images/project/rfp/rfp-icon.png",
    "/images/project/rfp/rfp-home-screen.png",
    "/images/skills/database/sequelize.png",
    "/images/skills/frontend/nextjs.png",
    "/images/skills/frontend/dnd.png",
    "/images/skills/frontend/skills-fontend-not-use.png",
    "/images/skills/frontend/nextjs-dark.png",
    "/images/skills/frontend/antd.png",
    "/images/skills/frontend/gql.png",
    "/images/skills/frontend/zustand.png",
    "/images/skills/backend/phpmyadmin.png",
    "/images/skills/backend/nestJs.png",
    "/images/skills/backend/php.png",
    "/images/skills/ai/claude.png",
    "/images/skills/ai/chatGPT.png",
    "/images/skills/utility/git.png",
    "/images/skills/utility/python.png",
    "/images/skills/utility/tailwind.png",
    "/images/skills/utility/skills-python.png",
    "/images/skills/utility/figma.png",
    "/images/skills/utility/skills-tailwind.png",
    "/images/banner/a-banner.png",
    "/images/phone-layout/ipad-layout.png",
    "/images/phone-layout/macbook-layout.png",
    "/images/phone-layout/android-layout.png",
    "/images/phone-layout/iphone-layout.png",
  ],
  videos: [
    "/images/project/karaoke/karaoke-iphone-remote.mp4",
    "/images/project/karaoke/karaoke-ipad-screen.mp4",
    "/images/project/gaysorn/gaysorn-preview.mp4",
    "/images/skills/frontend/skills-frontend.mp4",
    "/images/skills/backend/skills-backend-bg-2.mp4",
    "/images/banner/b-banner.mp4",
  ],
};

interface PreloadAssetsProps {
  children: ReactNode;
}

interface FileList {
  images: string[];
  videos: string[];
}

export default function PreloadAssets({ children }: PreloadAssetsProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function loadFiles() {
      try {
        const totalFiles = fileList.images.length + fileList.videos.length;
        let loadedFiles = 0;

        const updateProgress = () => {
          loadedFiles++;
          setProgress((loadedFiles / totalFiles) * 100);
        };

        // Load images
        const imagePromises = fileList.images.map((image) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = image;
            img.onload = () => {
              updateProgress();
              resolve(img);
            };
            img.onerror = () => {
              updateProgress();
              resolve(null);
            };
          });
        });

        // Load videos with Safari compatibility
        const videoPromises = fileList.videos.map((video) => {
          return new Promise((resolve) => {
            const vid = document.createElement("video");
            vid.muted = true;
            vid.playsInline = true;

            const handleLoad = () => {
              updateProgress();
              resolve(vid);
            };

            const handleError = () => {
              updateProgress();
              resolve(null);
            };

            vid.addEventListener("loadedmetadata", handleLoad, { once: true });
            vid.addEventListener("error", handleError, { once: true });

            vid.src = video;
            vid.load();
          });
        });

        // Load images first, then videos
        await Promise.all([...imagePromises, ...videoPromises]);
      } catch (error) {
        console.error("Error loading assets:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFiles();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-[width] duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-lg font-semibold">
          Loading assets... {Math.round(progress)}%
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
