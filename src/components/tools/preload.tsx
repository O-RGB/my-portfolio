"use client";
import { useEffect, useState, ReactNode } from "react";

interface PreloadAssetsProps {
  children: ReactNode;
}

export default function PreloadAssets({ children }: PreloadAssetsProps) {
  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState<any>();

  useEffect(() => {
    async function loadFiles() {
      try {
        const response = await fetch("/preload.json");
        const fileList = await response.json();

        const images = fileList.images.map((file: string) => file);
        const videos = fileList.videos.map((file: string) => file);

        setAssets({ images, videos });
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
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading assets...
      </div>
    );
  }

  return <>{children}</>;
}
