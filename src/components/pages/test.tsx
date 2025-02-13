"use client"
import React, { useEffect, useState } from "react";
import { fetchAndCacheVideo } from "../lib/indexedDb";
import BannerSection from "../sections/banner-section";

interface TestProps {}

const Test: React.FC<TestProps> = ({}) => {
  const [videoSrc, setVideoSrc] = useState<string>();
  const [hide, setHide] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    async function loadVideo() {
      const url = await fetchAndCacheVideo(
        "banner-video",
        "/images/banner/b-banner.mp4"
      );
      if (url) setVideoSrc(url);
    }
    loadVideo();

    return () => {
      if (videoSrc) {
        URL.revokeObjectURL(videoSrc);
      }
    };
  }, []);
  return (
    <>
      <BannerSection
        videoSrc={videoSrc}
        videoEnd={hide}
        onVideoEnd={setHide}
      ></BannerSection>
    </>
  );
};

export default Test;
