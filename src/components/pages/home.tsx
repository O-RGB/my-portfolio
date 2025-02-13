"use client";
import React, { useState, useEffect } from "react";
import ContainerLayout from "../layout/container";
import GapContant from "../layout/gap-contant";
import BannerSection from "../sections/banner-section";
import AboutMeModal from "../modals/about-me-modal";
import AboutMeSection from "../sections/about-me-section";
import WorkExperienceSection from "../sections/work-experience-section";
import useSectionStore from "@/stores/section-store";
import SkillsSection from "../sections/skills-section";
import ProjectSection from "../sections/projects";
import { fetchAndCacheVideo } from "../lib/indexedDb";
import useVideoStore from "@/stores/video-sotre";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [hide, setHide] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const loadAllVideos = useVideoStore((state) => state.loadAllVideos);
  const setSection = useSectionStore((state) => state.setSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleHashChange = (e?: any) => {
      // ป้องกันการเลื่อนแบบ default ของบราวเซอร์
      e?.preventDefault();

      // หน่วงเวลาเล็กน้อยเพื่อให้แน่ใจว่าบราวเซอร์ไม่ได้เลื่อนก่อน
      setTimeout(() => {
        const hash = window.location.hash.replace("#", "");
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 50);
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    loadAllVideos();
  }, []);

  return (
    <GapContant>
      <ContainerLayout>
        <GapContant>
          <div id="banner" className="scroll-section">
            <BannerSection videoEnd={hide} onVideoEnd={setHide}></BannerSection>
          </div>
          <div id="about" className="scroll-section">
            <AboutMeSection setReadMore={setOpen}></AboutMeSection>
          </div>
        </GapContant>
      </ContainerLayout>
      <ContainerLayout>
        <GapContant>
          <div id="experience" className="scroll-section relative">
            <WorkExperienceSection></WorkExperienceSection>
          </div>
        </GapContant>
      </ContainerLayout>
      <ContainerLayout className="w-full overflow-hidden">
        <GapContant>
          <div id="skills" className="scroll-section">
            <SkillsSection></SkillsSection>
          </div>
          <div id="project" className="scroll-section">
            <ProjectSection></ProjectSection>
          </div>
        </GapContant>
      </ContainerLayout>
    </GapContant>
  );
};

export default Home;
