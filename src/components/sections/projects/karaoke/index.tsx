import AnimatedCard from "@/components/common/anime/anime-card";
import CardBox from "@/components/common/card";
import CardContant from "@/components/common/card/card-contant";
import PhoneScreen from "@/components/common/phone-screen";
import VideoCommon from "@/components/common/video";
import useVideoStore, { videoPaths } from "@/stores/video-sotre";
import React from "react";

interface NextKaraokeProps {}

const NextKaraoke: React.FC<NextKaraokeProps> = ({}) => {
  // const videos = useVideoStore((state) => state.videoUrls);
  return (
    <div className="grid grid-cols-1 gap-contant">
      <CardBox
        className="card-limit-height relative flex items-center justify-center"
        highlight={false}
      >
        <AnimatedCard
          start={{ x: -100 }}
          className="w-[65vw] md:w-[40vw] xl:w-[550px] h-fit"
          transition={{ ease: "easeInOut", duration: 2 }}
        >
          <PhoneScreen layout={"ipad"} mode="landscape">
            <VideoCommon
              loop
              src={videoPaths["karaoke-ipad-screen"]}
              className="w-full h-full p-0.5"
              autoPlay
            ></VideoCommon>
          </PhoneScreen>
        </AnimatedCard>

        <div
          className={`absolute 
            w-[40vw]      md:w-[28vw]     xl:w-[350px] 
            bottom-[15vw] md:bottom-[8vw] xl:bottom-[100px] 
            -right-[2vw]  md:right-[15vw] xl:right-48  
            z-20  h-fit`}
        >
          <AnimatedCard start={{ x: 100 }}>
            <PhoneScreen layout={"iphone"}>
              <VideoCommon
                loop
                src={videoPaths["karaoke-iphone-remote"]}
                className=" w-full h-full p-[1vw] md:p-2 pt-[3.5vw] md:pt-8 scale-[1.05] bg-[#64758c]"
                autoPlay
              ></VideoCommon>
            </PhoneScreen>
          </AnimatedCard>
        </div>
      </CardBox>
      <CardBox highlight={false} className="card-limit-height">
        <CardContant
          title="Next Karaoke Midi + Soundfont"
          description={
            <div className="">
              <div>
                Next Karaoke เป็นเว็บแอปพลิเคชันคาราโอเกะที่ใช้เทคโนโลยี MIDI
                และ Soundfont พร้อมด้วยระบบจัดการสถานะที่มีประสิทธิภาพ และรองรับ
                การควบคุมระยะไกล เพื่อเพิ่มความสะดวกในการใช้งาน
              </div>
              <div className="br" />
              <div className="font-bold">เทคโนโลยีที่ใช้</div>
              <div className="br" />
              <div>
                <div>
                  <span className="font-bold">SpessaSynth </span>
                  ไลบรารีที่ใช้สำหรับเล่น MIDI และ Soundfont บนเว็บ
                  รองรับการประมวลผลเสียงในตัว
                  ทำให้ไม่ต้องใช้ซอฟต์แวร์ภายนอกช่วยเล่นไฟล์เสียง
                  โดยพึ่งเริ่มต้นการพัฒนาได้ไม่นาน เป็น Libary
                  ที่ยังต้องปรับปรุ่งเรื่องประสิทธิภาพหลาย ๆ ส่วน แต่ใน Next
                  Karaoke มีการเพิ่ม Libary สำรองไว้ Js-synthesizer
                  สามารถใช้งานได้โดยใช้ทรัพยากรณ์น้อยกว่าและมีประสิทธ์ภาพสูงกว่า
                  แต่น่าเสียดายที่มี Fetures น้อยกว่า
                  แต่ก็เป็นทางเลือกที่ดีสำหรับผู้ใช้มือถือสเปคต่ำก็สามารถใช้งานได้โดยไม่กระตุก
                </div>

                <div>
                  <span className="font-bold">Zustand </span> ไลบรารีสำหรับ
                  จัดการสถานะของแอป (State Management) ที่มีขนาดเล็กแต่ทรงพลัง
                  ใช้เพื่อจัดเก็บสถานะต่าง ๆ เช่น เพลงที่กำลังเล่น เวลา
                  และการตั้งค่าต่าง ๆ เนื่องจากว่า Next Karaoke
                  มีการทำงานคล้ายกับ Desktop Application
                  ดังนั้นจะมีเพียงหน้าจอเดียว (Single-Screen Application)
                  และต้องมีการจัดการ State ที่ดีด้วย
                </div>
                <div>
                  <span className="font-bold">PeerJS </span>
                  ไลบรารีที่ใช้ WebRTC สำหรับสร้างการเชื่อมต่อแบบ Peer-to-Peer
                  ใช้สำหรับ การควบคุมระยะไกล
                  ทำให้สามารถเชื่อมต่อและสั่งงานจากอุปกรณ์อื่น เช่น
                  เปลี่ยนเพลงหรือควบคุมการเล่นผ่านมือถือหรือแท็บเล็ต
                </div>
              </div>
              <div className="br" />
              <div className="font-bold">ความท้าทาย</div>
              <div className="br" />
              {/* <div>
                <span>
                  <span className="font-bold">การออกแบบ</span>
                </span>
              </div> */}
            </div>
          }
          tags={["Midi", "Soundfont", "Next.js", "Zustand", "PeerJs"]}
        ></CardContant>
      </CardBox>
    </div>
  );
};

export default NextKaraoke;
