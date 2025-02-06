import React from "react";
import ImageBox from "../common/banner/image-box";
import CardBox from "../common/card";
import HeaderTitle from "../common/contant/header-title";
import TitleBox from "../common/contant/title-box";

interface WorkExperienceSectionProps {}

const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({}) => {
  return (
    <div className="flex flex-col gap-contant relative">
      <span className="text-clamp-lg font-bold">Work Experience</span>
      <TitleBox
        number={"1"}
        title={"Mahasarakham University"}
        bottomTitle="( วิทยาการคอมพิวเตอร์ )"
        description={`เริ่มศึกษาตั้งแต่ปี 2020 - 2023 โดยเริ่มจากการเรียนรู้ Problem Solving แล้วต่อยอดไปยัง Algorithms และ Object-Oriented Programming (OOP) จากนั้นจึงศึกษาภาษาและเทคโนโลยีต่าง ๆ เช่น Angular, Java, และ Python (Web & AI)`}
      ></TitleBox>
      <TitleBox
        number={"2"}
        title={"IT One"}
        bottomTitle="( ฝึกงาน )"
        description={`เมื่อขึ้นชั้นปีที่ 4 ได้ฝึกงานที่ IT One รับผิดชอบ Frontend (Angular) ในการเพิ่มและปรับปรุงหน้าจอของระบบที่มีอยู่แล้ว และ Backend (C#) ในการตรวจสอบและแก้ไข Bug ที่ได้รับรายงานจากผู้ใช้งาน`}
      ></TitleBox>
      <TitleBox
        number={"3"}
        title={"Digixworks"}
        bottomTitle="( ปัจจุบัน )"
        description={
          "เริ่มต้นด้วยรับผิดชอบพัฒนา Frontend เป็นหลักในปีแรกโดยใช้ NextJs เป็นหลักและมี React Native (Mobile App) บ้าง หลังจากเริ่มเข้าที่เข้าทางก็หันมาจัดการ Backend (NestJs)"
        }
      ></TitleBox>
    </div>
  );
};

export default WorkExperienceSection;
