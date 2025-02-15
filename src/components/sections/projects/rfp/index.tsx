import AnimatedCard from "@/components/common/anime/anime-card";
import CardBox from "@/components/common/card";
import CardContant from "@/components/common/card/card-contant";
import HeaderTitle from "@/components/common/contant/header-title";
import Quotes from "@/components/common/contant/quotes";
import ImageCommon from "@/components/common/image";
import { images } from "@/config/value";
import React from "react";

interface RfpProjectProps {}

const RfpProject: React.FC<RfpProjectProps> = ({}) => {
  const title = "Request for Proposal (RFP)";
  const titleBottom = "ระบบสร้างเอกสารสำหรับจัดซื้อจัดจ้าง";

  const first =
    "หลังจากเริ่มงานได้ 1 ปีกว่า ๆ ก็เริ่มมีโปรเจกต์ที่ใหญ่ขึ้น ระบบนี้มีความซับซ้อนค่อนข้างสูงและมีการแยกเว็บไซต์ทั้งผู้สร้าง Proposal และผู้เสนอราคาออกจากกัน โดยในส่วนนี้จะมีการเชื่อมต่อกับ API ต่าง ๆ ที่ซับซ้อนอย่างมาก";

  const nodeJs = "Node.js ";
  const nodeJsContant =
    "ในด้าน Backend ผมไม่ได้มีส่วนร่วมในการวางแผนโครงสร้างระบบแต่แรก โดยที่ผมเข้าร่วมโปรเจกต์ในช่วงที่ทีม Backend ได้พัฒนาส่วนใหญ่ไปแล้วประมาณ 70% เมื่อเข้ามา ผมจึงมีหน้าที่ในการปรับปรุงและแก้ไขโค้ดที่มีอยู่แล้ว เพื่อให้สามารถรองรับฟังก์ชันการทำงานใหม่ๆ ได้อย่างมีประสิทธิภาพมากขึ้น";
  const gql = "GraphQL ";
  const gqlContant =
    "หลังจากที่ผมได้ทำงานกับ Backend ไปสักพัก ผมเริ่มใช้ GraphQL ได้ดีขึ้น ซึ่งช่วยให้การดึงข้อมูลและการส่งข้อมูลเป็นเรื่องง่ายและรวดเร็วขึ้น การเลือกข้อมูลที่ต้องการได้อย่างแม่นยำช่วยลดภาระระบบและเพิ่มประสิทธิภาพในการทำงานของ Backend ได้มากขึ้น";
  const nextJs = "Next.Js ";
  const nextJsContant =
    "ระบบนี้มีความซับซ้อนสูงและปลอดภัย ส่วนใหญ่การเก็บข้อมูลจะอยู่ฝั่ง Backend เป็นหลัก แต่ก็ยังมีบางส่วนที่เป็นการตั้งค่าเล็ก ๆ น้อย ๆ ใน Frontend แม้ว่าผมจะมีประสบการณ์กับ React แล้ว แต่ในโปรเจกต์นี้ผมยังไม่ได้ใช้ State Management ยังเลือกใช้ React Contaxt อยู่ ก็ยังพบกับปัญหาเรื่อง Re-Render อยู่บ้างแต่ก็พยายามปรับปรุงให้ดีที่สุด";

  const contantModal = (
    <>
      {first}
      <div className="br"></div>
      <div>
        <Quotes
          isPerson={false}
          title={nodeJs}
          reference={nodeJsContant}
        ></Quotes>
        <div className="br"></div>
        <Quotes isPerson={false} title={gql} reference={gqlContant}></Quotes>
        <div className="br"></div>
        <Quotes
          isPerson={false}
          title={nextJs}
          reference={nextJsContant}
        ></Quotes>
      </div>
    </>
  );
  const contant = (
    <>
      {first}
      <div className="br"></div>
      <div>
        <div>
          <span className="font-bold">{nodeJs} </span>
          {nodeJsContant}
        </div>
        <div className="br"></div>
        <div>
          <span className="font-bold">{gql} </span>
          {gqlContant}
        </div>
        <div>
          <span className="font-bold">{nextJs} </span>
          {nextJsContant}
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="relative grid grid-cols-3 gap-contant h-20 ">
        <AnimatedCard
          delay={0.1}
          className="w-full h-full col-span-2"
          start={{ x: 100 }}
        >
          <CardBox
            className="relative duration-300 !p-0 w-full h-full flex items-center justify-center"
            highlight={false}
          >
            <ImageCommon
              src={images.projects.gaysorn.images.icon}
              containerClassName="w-full h-14 p-5"
              objectFit="contain"
            ></ImageCommon>
          </CardBox>
        </AnimatedCard>

        <AnimatedCard
          delay={0.2}
          className="w-full h-full col-span-1"
          start={{ x: 100 }}
        >
          <CardBox
            className="relative w-full h-full !p-4 flex items-center justify-center gap-2"
            highlight={false}
          >
            <ImageCommon
              src={images.skills.frontend.images.nextjs}
              containerClassName="w-14 h-14 hidden dark:block"
              objectFit="contain"
            ></ImageCommon>
            <ImageCommon
              src={images.skills.frontend.images.nextjsDark}
              containerClassName="w-14 h-14 block dark:hidden"
              objectFit="contain"
            ></ImageCommon>
            <ImageCommon
              src={images.skills.backend.images.php}
              containerClassName="w-14 h-14"
              objectFit="contain"
            ></ImageCommon>
          </CardBox>
        </AnimatedCard>
      </div>

      <AnimatedCard className="w-full h-full col-span-2" start={{ x: 100 }}>
        <CardBox
          moreDetail
          className="h-full flex flex-col gap-4"
          highlight={false}
        >
          <CardContant
            tags={["Next.js", "Nest.Js", "GraphQL"]}
            moreDetail={
              <>
                <HeaderTitle
                  className="pb-8"
                  title={title}
                  detail={titleBottom}
                ></HeaderTitle>
                {contantModal}
              </>
            }
            title={title}
            description={contant}
          ></CardContant>
        </CardBox>
      </AnimatedCard>
    </>
  );
};

export default RfpProject;
