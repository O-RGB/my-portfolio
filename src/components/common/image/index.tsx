import React, { useState } from "react";
import Image from "next/image";
import { IoImageOutline } from "react-icons/io5";
import { BiErrorCircle } from "react-icons/bi";

interface ImageCommonProps {
  src?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  containerClassName?: string;
}

const ImageCommon: React.FC<ImageCommonProps> = ({
  src,
  alt = "Image",
  className = "",
  imageClassName = "",
  objectFit = "cover",
  containerClassName = "",
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
        className={`relative flex flex-col items-center justify-center bg-gray-100 overflow-hidden h-full ${className}`}
      >
        <BiErrorCircle className="text-red-500 text-3xl mb-2" />
        <p className="text-sm text-red-500">Unable to load image</p>
      </div>
    );
  }

  if (!src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gray-100 overflow-hidden h-full ${className}`}
      >
        <IoImageOutline className="text-gray-400 text-3xl mb-2" />
        <p className="text-sm text-gray-500">No image</p>
      </div>
    );
  }

  return (
    <div className={`relative h-full ${containerClassName}`}>
      <div className={`relative w-full h-full ${className}`}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className={`${imageClassName} transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          style={{ objectFit }}
          unoptimized
          onError={handleError}
          onLoad={handleLoadComplete}
        />
      </div>
    </div>
  );
};

export default ImageCommon;
