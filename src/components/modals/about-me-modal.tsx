import React from "react";
import ImageBox from "../common/banner/image-box";
import HeaderTitle from "../common/contant/header-title";
import Quotes from "../common/contant/quotes";
import ModalCommon from "../common/modal";

interface AboutMeModalProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const AboutMeModal: React.FC<AboutMeModalProps> = ({
  open = false,
  setOpen,
}) => {
  return (
    <>
      <ModalCommon
        isOpen={open}
        onClose={() => {
          setOpen?.(false);
        }}
      >
        <div className="break-words flex flex-col gap-4">
          <HeaderTitle
            className="pb-4"
            title="About Me"
            detail={`สวัสดีครับ ผม "ส้มโอ"`}
          ></HeaderTitle>

          <div className="flex flex-col gap-4">
            <span>
              มีประสบการณ์ในสายนี้มา 2 ปีแล้ว ส่วนใหญ่จะใช้ Next.js และ NestJS
              ในการพัฒนาเว็บไซต์ และในบางงานก็มีใช้ PHP เป็น Backend บ้าง
              และมีประสบการณ์การเขียน App ด้วย React Native
            </span>

            <ImageBox
              className="h-[200px] w-full"
              srcImage="/images/about-me/about-me-modal.jpg"
            ></ImageBox>

            <Quotes
              title={`"The biggest risk is not taking any risk."`}
              reference="Mark Zuckerberg"
            ></Quotes>
            <span>
              ในด้านการทำงานผมจะเป็นคนละเอียดอ่อนในการทำงานและเขียนโค้ด
              จะเขียนโค้ดที่ Reuse
              ให้ได้มากที่สุดและคำนึงถึงทีมเมื่อมีการส่งต่อให้ทีมอ่านโค้ดและแก้ไขต่อไปได้
            </span>
            <span>
              ปัจจุบัน ผมกำลังมองหาความท้าทายใหม่ๆ ที่จะช่วยเสริมทักษะในการเป็น
              Full-Stack Developer รวมถึงการเรียนรู้เครื่องมือใหม่ๆ เช่น CI/CD
              เพื่อให้กระบวนการพัฒนาเว็บไซต์มีความสะดวกและรวดเร็วมากขึ้น
            </span>
          </div>
        </div>
      </ModalCommon>
    </>
  );
};

export default AboutMeModal;
