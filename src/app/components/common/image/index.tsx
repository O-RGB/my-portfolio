import React, { useState } from "react";
import Image from "next/image";
import { IoImageOutline } from "react-icons/io5";
import { BiErrorCircle } from "react-icons/bi";

interface ImageCommonProps {
  src?: string;
  alt?: string;
  className?: string;
  layout?: any;
  width?: number;
  height?: number;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

const ImageCommon: React.FC<ImageCommonProps> = ({
  src,
  alt = "Image",
  className = "",
  layout,
  height,
  width = 200,
  objectFit = "cover",
}) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  if (isError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gray-100 w-full overflow-hidden ${className}`}
        style={{ height }}
      >
        <BiErrorCircle className="text-red-500 text-3xl mb-2" />
        <p className="text-sm text-red-500">Unable to load image</p>
      </div>
    );
  }

  if (!src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gray-100 w-full overflow-hidden ${className}`}
        style={{ height }}
      >
        <IoImageOutline className="text-gray-400 text-3xl mb-2" />
        <p className="text-sm text-gray-500">No image</p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse">
          {/* <div className="flex items-center justify-center h-full">
            <svg
              className="animate-spin h-8 w-8 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div> */}
        </div>
      )}
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          className={`transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          unoptimized
          onError={handleError}
          onLoadingComplete={handleLoadComplete}
          style={{ objectFit }}
        />
      </div>
    </div>
  );
};

export default ImageCommon;
