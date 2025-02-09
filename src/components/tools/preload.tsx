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
        // 1. โหลด preload.json
        const response = await fetch("/preload.json");
        const fileList: FileList = await response.json();

        // 2. รวมจำนวนไฟล์ทั้งหมดที่ต้องโหลด
        const totalFiles = fileList.images.length + fileList.videos.length;
        let loadedFiles = 0;

        // 3. โหลดรูปภาพ
        const imagePromises = fileList.images.map((image: string) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image;
            img.onload = () => {
              loadedFiles++;
              setProgress((loadedFiles / totalFiles) * 100);
              resolve(img);
            };
            img.onerror = reject;
          });
        });

        // // 4. โหลดวิดีโอ
        // const videoPromises = fileList.videos.map((video: string) => {
        //   return new Promise((resolve, reject) => {
        //     const videoElement = document.createElement("video");
        //     // เพิ่ม event listeners สำหรับ metadata เพื่อให้รู้ว่าวิดีโอพร้อมเล่น
        //     videoElement.addEventListener("loadedmetadata", () => {
        //       loadedFiles++;
        //       setProgress((loadedFiles / totalFiles) * 100);
        //       resolve(videoElement);
        //     });
        //     videoElement.addEventListener("error", reject);
        //     // ตั้งค่า preload เป็น 'metadata' เพื่อโหลดเฉพาะข้อมูลที่จำเป็น
        //     videoElement.preload = "metadata";
        //     videoElement.src = video;
        //   });
        // });

        // 5. รอให้โหลดทุกไฟล์เสร็จ
        await Promise.all([...imagePromises]);
      } catch (error) {
        console.error("Error loading files:", error);
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
            className="h-full bg-blue-600 transition-all duration-300"
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
