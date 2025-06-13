"use client";

import { useEffect, useRef, useState } from "react";

const frameCount = 60;

function getFramePath(index: number) {
  return `/frames/84172d868b0c83a12c2fa4111fef774f_out${(index + 1)
    .toString()
    .padStart(4, "0")}.png`;
}

export default function SlowMotionAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load images into memory
    const loadImages = async () => {
      const promises = Array.from({ length: frameCount }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.src = getFramePath(i);
          img.onload = () => {
            console.log("Loaded:", img.src);
            resolve(img);
          };
          img.onerror = () => {
            console.error("Failed to load:", img.src);
            resolve(img); // ยัง resolve เพื่อให้ Promise.all ไม่ค้าง
          };
        });
      });

      const loadedImages = await Promise.all(promises);
      imagesRef.current = loadedImages;
      setLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!loaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let playing = true;
    const startTime = performance.now();

    const draw = () => {
      const image = imagesRef.current[Math.floor(frame)];
      if (image && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      }
    };

    // Apple-style easing function (cubic-bezier equivalent)
    const appleEasing = (t: number) => {
      // เลียนแบบ cubic-bezier(0.25, 0.46, 0.45, 0.94) ที่ Apple ใช้
      if (t < 0.5) {
        return 2 * t * t;
      }
      return 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const animate = (currentTime: number) => {
      if (!playing) return;

      const elapsed = currentTime - startTime;
      const totalDuration = 4000; // 4 วินาที total

      // คำนวณ raw progress (0 to 1)
      let rawProgress = Math.min(elapsed / totalDuration, 1);

      // ใช้ Apple-style easing
      let easedProgress = appleEasing(rawProgress);

      // แปลงเป็น frame index
      frame = Math.min(easedProgress * (frameCount - 1), frameCount - 1);

      draw();

      if (rawProgress >= 1) {
        frame = frameCount - 1;
        playing = false;
        draw(); // Final draw
        return;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [loaded]);

  return (
    <div className="flex items-center justify-center w-full h-full bg-black">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="rounded-xl shadow-lg"
      />
      {!loaded && (
        <div className="absolute text-white text-xl">Loading animation...</div>
      )}
    </div>
  );
}
