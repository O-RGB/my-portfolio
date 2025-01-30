import React from "react";

interface VideoCommonProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

const VideoCommon: React.FC<VideoCommonProps> = ({
  src,
  className,
  autoPlay,
  loop,
}) => {
  return (
    <video
      className={className}
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      muted
      playsInline
    />
  );
};

export default VideoCommon;
