import React, { useEffect, useRef, useState } from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { BiErrorCircle } from "react-icons/bi";

interface VideoCommonProps {
  src?: string;
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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed, src]);

  if (!src || src === "") {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gray-100 overflow-hidden h-full ${className}`}
      >
        <IoVideocamOutline className="text-gray-400 text-3xl mb-2" />
        <p className="text-sm text-gray-500">No video</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gray-100 overflow-hidden h-full ${className}`}
      >
        <BiErrorCircle className="text-red-500 text-3xl mb-2" />
        <p className="text-sm text-red-500">Unable to load video</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <video
        ref={videoRef}
        preload="auto"
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        loop={loop}
        muted
        playsInline
        onLoadStart={() => {
          setIsLoading(true);
          setIsError(false);
        }}
        onLoadedMetadata={(e) => {
          onLoaded?.(e.currentTarget.duration);
          setIsLoading(false);
        }}
        onError={() => {
          setIsError(true);
          setIsLoading(false);
        }}
        onTimeUpdate={(e) =>
          onTimeUpdate?.(e.currentTarget.currentTime, e.currentTarget.duration)
        }
        onEnded={onEnded}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoCommon;
