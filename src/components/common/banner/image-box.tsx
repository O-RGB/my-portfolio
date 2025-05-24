import React, { useState } from "react";
import ImageCommon from "../image";
import VideoCommon from "../video";

interface ImageBoxProps {
  srcImage?: string;
  srcVideo?: string;
  className?: string;
  children?: React.ReactNode;
  onVideoEnd?: () => void;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  srcImage,
  srcVideo,
  className = "h-[300px] md:h-[40vw] max-h-[700px]",
  children,
  onVideoEnd,
}) => {
  const [onEnd, setEnd] = useState<boolean>(false);

  const onEnded = () => {
    setEnd(true);
    onVideoEnd?.();
  };

  return (
    <>
      <div
        className={`relative w-full ${className} overflow-hidden rounded-layout transition-all duration-1000`}
      >
        {srcImage && (
          <div className="absolute top-0 left-0 bottom-0 bg-slate-200 w-full overflow-hidden rounded-layout">
            <ImageCommon
              src={srcImage}
              objectFit="cover"
              className={`h-full ${
                srcVideo ? (onEnd ? "opacity-100" : "opacity-0") : ""
              }`}
            ></ImageCommon>
          </div>
        )}

        {srcVideo && (
          <div className="absolute top-0 left-0 bottom-0 w-full h-full">
            {/* <Suspense fallback={<p>Loading...</p>}> */}
            <VideoCommon
              onEnded={onEnded}
              src={srcVideo}
              className={`w-full h-full object-cover ${
                onEnd ? "opacity-0" : "opacity-100"
              } transition-all duration-1000`}
              loop={false}
              autoPlay
            ></VideoCommon>
            {/* </Suspense> */}
          </div>
        )}

        {children && (
          <div className="absolute top-0 w-full h-full flex items-center justify-center">
            <div className="relative">{children}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageBox;
