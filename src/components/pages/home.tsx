"use client";
import React, { useEffect } from "react";
import ContainerLayout from "../layout/container";
import GapContant from "../layout/gap-contant";
import BannerSection from "../sections/banner-section";
import AboutMeSection from "../sections/about-me-section";
import WorkExperienceSection from "../sections/work-experience-section";
import useSectionStore from "@/stores/section-store";
import SkillsSection from "../sections/skills-section";
import ProjectSection from "../sections/projects";
import { LiquidGlass } from "../common/glass";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const setSection = useSectionStore((state) => state.setSection);
  const setScrolling = useSectionStore((state) => state.setScrolling);
  const setScrollPosition = useSectionStore((state) => state.setScrollPosition);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setScrolling?.(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrolling?.(false);
      }, 200);

      setScrollPosition?.(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = (e?: any) => {
      e?.preventDefault();

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

  return (
    <GapContant>
      <ContainerLayout>
        <GapContant>
          <div id="banner" className="scroll-section">
            <BannerSection></BannerSection>
          </div>
          <div id="about" className="scroll-section">
            <AboutMeSection></AboutMeSection>
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
          {/* <SlowMotionAnimation></SlowMotionAnimation> */}
          {/* <SlowMotionVideoAnimation videoSrc="/frames/84172d868b0c83a12c2fa4111fef774f.mp4"></SlowMotionVideoAnimation> */}
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
