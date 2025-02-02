import React from "react";

interface VideoCommonProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  onLoaded?: (duration: number) => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onEnded?: () => void; // เพิ่ม event เมื่อวิดีโอเล่นจบ
}

const VideoCommon: React.FC<VideoCommonProps> = ({
  src,
  className,
  autoPlay,
  loop,
  onLoaded,
  onTimeUpdate,
  onEnded,
}) => {
  return (
    <video
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
