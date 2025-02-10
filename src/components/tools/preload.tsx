"use client";
import { useEffect, useState, ReactNode } from "react";

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
        // ✅ โหลด preload.json
        const response = await fetch("/preload.json");
        if (!response.ok) throw new Error("Failed to load preload.json");

        const fileList: FileList = await response.json();

        // ✅ รวมจำนวนไฟล์ทั้งหมดที่ต้องโหลด
        const totalFiles = fileList.images.length + fileList.videos.length;
        let loadedFiles = 0;

        const updateProgress = () => {
          setProgress(((loadedFiles + 1) / totalFiles) * 100);
          loadedFiles++;
        };

        // ✅ โหลดรูปภาพทั้งหมด
        const imagePromises = fileList.images.map((image) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image;
            img.onload = () => {
              updateProgress();
              resolve(img);
            };
            img.onerror = () => {
              console.warn(`Failed to load image: ${image}`);
              updateProgress();
              resolve(null); // ไม่ให้โหลดค้างหากไฟล์เสีย
            };
          });
        });

        // ✅ โหลดวิดีโอทั้งหมด
        const videoPromises = fileList.videos.map((video) => {
          return new Promise((resolve, reject) => {
            const vid = document.createElement("video");
            vid.src = video;
            vid.preload = "auto"; // โหลดวิดีโอล่วงหน้า
            vid.onloadeddata = () => {
              updateProgress();
              resolve(vid);
            };
            vid.onerror = () => {
              console.warn(`Failed to load video: ${video}`);
              updateProgress();
              resolve(null);
            };
          });
        });

        // ✅ รอให้โหลดทุกไฟล์เสร็จ
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
