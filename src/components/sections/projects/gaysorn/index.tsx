import AnimatedCard from "@/components/common/anime/anime-card";
import CardBox from "@/components/common/card";
import CardContant from "@/components/common/card/card-contant";
import HeaderTitle from "@/components/common/contant/header-title";
import Quotes from "@/components/common/contant/quotes";
import ImageCommon from "@/components/common/image";
import { images } from "@/config/value";
import React from "react";

interface GaysornurbanresortProps {}

const Gaysornurbanresort: React.FC<GaysornurbanresortProps> = ({}) => {
  const title = "Gaysorn Urban Resort";
  const titleBottom = "ระบบจองโต๊ะ จองห้องประชุมออนไลน์";

  const first =
    "เป็นโปรเจกต์แรกที่ผมได้เริ่มทำงานในสายอาชีพนี้ ซึ่งเป็นครั้งแรกที่ได้ใช้ Next.js และ Tailwind CSS ในการพัฒนา โดยใช้เวลาทั้งหมด 1 เดือนในการทำโปรเจกต์นี้ ทำให้ผมได้เรียนรู้และพัฒนาทักษะใหม่ๆ ในการทำงาน";

  const phpTitle = "PHP Backend ";
  const php =
    "ในโปรเจกต์นี้ผมรับผิดชอบการพัฒนาระบบ Backend ทั้งหมด ซึ่งรวมถึงการคำนวณและจัดการข้อมูลเกี่ยวกับการจองโต๊ะหรือห้องประชุม โดยระบบจะคำนวณสถานะการว่างหรือไม่ว่างของห้องหรือโต๊ะเพื่อให้ผู้ใช้สามารถจองได้อย่างถูกต้องและไม่ซ้ำกัน";
  const googleSheetsTitle = "Google Sheets ";
  const googleSheets =
    "ลูกค้าต้องการให้ข้อมูลการจองโต๊ะแสดงใน Google Sheets แต่เนื่องจาก Google Sheets ไม่สามารถรับข้อมูลพร้อมกันจากหลายๆ Request ได้ ผมจึงบันทึกข้อมูลในฐานข้อมูลก่อนเพื่อป้องกันข้อมูลซ้ำ จากนั้นส่ง Index และข้อมูลไปยัง Google Sheets โดยบันทึกที่ตำแหน่งที่ต้องการ วิธีนี้ช่วยให้การจัดการข้อมูลในทั้งฐานข้อมูลและ Google Sheets มีประสิทธิภาพและลดปัญหาขัดแย้งได้ครับ";

  const contantModal = (
    <>
      {first}
      <div className="br"></div>
      <div>
        <Quotes isPerson={false} title={phpTitle} reference={php}></Quotes>
        <div className="br"></div>
        <Quotes
          isPerson={false}
          title={googleSheetsTitle}
          reference={googleSheets}
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
          <span className="font-bold">{phpTitle} </span>
          {php}
        </div>
        <div className="br"></div>
        <div>
          <span className="font-bold">{googleSheetsTitle} </span>
          {googleSheets}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="relative grid grid-cols-3 gap-contant h-20 lg:h-24">
        <AnimatedCard
          delay={0.1}
          start={{ x: 100 }}
          className="w-full h-full col-span-2"
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
          start={{ x: 100 }}
          className="w-full h-full col-span-1"
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
          className="w-full h-full flex flex-col gap-4"
          highlight={false}
        >
          <CardContant
            tags={["Php", "Next.js", "Tailwind", "Google Sheets"]}
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
            title={`${title} ${titleBottom}`}
            description={contant}
          ></CardContant>
        </CardBox>
      </AnimatedCard>
    </>
  );
};

export default Gaysornurbanresort;
