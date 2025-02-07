import React, { useEffect, useRef } from "react";

interface VideoCommonProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  speed?: number; // เพิ่ม prop สำหรับ speed
  onLoaded?: (duration: number) => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onEnded?: () => void;
}

const VideoCommon: React.FC<VideoCommonProps> = ({
  src,
  className,
  autoPlay,
  loop,
  speed = 1, // ตั้งค่าเริ่มต้นเป็น 1 (ปกติ)
  onLoaded,
  onTimeUpdate,
  onEnded,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]); // อัปเดตความเร็วเมื่อค่า speed เปลี่ยนแปลง

  return (
    <video
      ref={videoRef}
      preload="auto"
      className={className}
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      muted
      playsInline
      onLoadedMetadata={(e) => onLoaded && onLoaded(e.currentTarget.duration)}
      onTimeUpdate={(e) =>
        onTimeUpdate &&
        onTimeUpdate(e.currentTarget.currentTime, e.currentTarget.duration)
      }
      onEnded={() => onEnded && onEnded()}
    />
  );
};

export default VideoCommon;
