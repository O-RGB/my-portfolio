import React, { useEffect, useRef } from "react";

interface VideoCommonProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  speed?: number;
  onLoaded?: (duration: number) => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onEnded?: () => void;
}

const VideoCommon: React.FC<VideoCommonProps> = ({
  src,
  className,
  autoPlay,
  loop,
  speed = 1,
  onLoaded,
  onTimeUpdate,
  onEnded,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);

  return (
    <video
      ref={videoRef}
      preload="auto"
      className={className}
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
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoCommon;
