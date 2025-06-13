import React, { useState } from "react";
import VideoCommon from "../../common/video";
import ImageCommon from "@/components/common/image";
import CardBox from "@/components/common/card";
import PhoneScreen from "@/components/common/phone-screen";
import { images } from "@/config/value";
import { videoPaths } from "@/stores/video-sotre";
import ModalCommon from "@/components/common/modal";
import Tag from "@/components/common/tags";
import SegmentedControl from "@/components/common/segmented-control";
import { FaAndroid, FaApple } from "react-icons/fa";
import { AppleSereenType } from "@/types/general.type";

interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  const grid = "grid grid-cols-1 md:grid-cols-2 gap-contant h-full";
  const card = "relative flex items-center justify-center";
  const contantPading = "w-full p-3 md:p-0 lg:p-16";

  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<AppleSereenType>("android");

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <ModalCommon isOpen={open} onClose={handleCloseModal}>
        test
      </ModalCommon>
      <div className="flex flex-col gap-contant relative">
        <span className="text-clamp-lg font-bold">Project</span>

        <div className="flex flex-col gap-contant">
          <div className={grid}>
            <CardBox
              highlight={false}
              moreDetail
              className={`${card} bg-[url(/images/project/gaysorn/gur-light.png)] dark:bg-[url(/images/project/gaysorn/gur-dark-2.png)] duration-300 bg-cover bg-no-repeat bg-center`}
              onClick={handleOpenModal}
              bottom={{
                tag: [
                  {
                    label: "PHP Backend",
                  },
                  {
                    label: "Google Sheets",
                  },
                ],
                title: "Gaysorn Urban Resort",
              }}
            >
              <div
                className={`${contantPading}  transition-all cursor-pointer duration-300`}
              >
                <PhoneScreen mode={"portrait"} layout={"iphone"}>
                  <div className="relative w-full h-full ">
                    <VideoCommon
                      src={videoPaths["gaysorn-preview"]}
                      autoPlay
                      loop
                    ></VideoCommon>
                  </div>
                </PhoneScreen>
              </div>
            </CardBox>

            <CardBox
              highlight={false}
              moreDetail
              className={`${card} `}
              bottom={{
                tag: [
                  {
                    label: "Node.js",
                  },
                  {
                    label: "GraphQL",
                  },
                  {
                    label: "Next.Js",
                  },
                ],
                title: "Request for Proposal (RFP)",
              }}
            >
              <div className={contantPading}>
                <PhoneScreen mode={"portrait"} layout={"macbook"}>
                  <div className="relative w-full h-full p-[0.5%]">
                    <ImageCommon
                      src={images.projects.rfp.images.awardScreen}
                    ></ImageCommon>
                  </div>
                </PhoneScreen>
              </div>
            </CardBox>
          </div>
          <div className={grid}>
            <CardBox
              highlight={false}
              className={`${card}`}
              moreDetail
              bottom={{
                tag: [
                  {
                    label: "Next.Js",
                  },
                  {
                    label: "MIDI",
                  },
                  {
                    label: "P2P Remote",
                  },
                ],
                title: "Next Karaoke",
              }}
            >
              <div className="flex aspect-square h-full w-full relative">
                <div className="m-auto w-[60vw] md:w-[30vw] xl:w-[400px] h-fit">
                  <PhoneScreen layout={"ipad"} mode="landscape">
                    <VideoCommon
                      loop
                      src={videoPaths["karaoke-ipad-screen"]}
                      className="w-full h-full p-0.5"
                      autoPlay
                    ></VideoCommon>
                  </PhoneScreen>
                </div>

                <div
                  className={`absolute 
            w-[35vw]      md:w-[20vw]      xl:w-[250px] 
            bottom-[15vw] md:bottom-[5vh] xl:bottom-[80px] 
            -right-6       md:-right-6       xl:-right-6  
            z-20  h-fit`}
                >
                  <PhoneScreen layout={"iphone"}>
                    <VideoCommon
                      loop
                      src={videoPaths["karaoke-iphone-remote"]}
                      className=" w-full h-full  p-1.5 pt-3 bg-[#64758c]"
                      autoPlay
                    ></VideoCommon>
                  </PhoneScreen>
                </div>
              </div>
            </CardBox>
            <CardBox
              highlight={false}
              moreDetail
              className={`${card} bg-[url(/images/project/land-4-thai/l4t-light.png)] dark:bg-[url(/images/project/land-4-thai/l4t-dark.png)] duration-300 bg-cover bg-no-repeat bg-center`}
              bottom={{
                tag: [
                  {
                    label: "React Native",
                  },
                  {
                    label: "Expo",
                  },
                ],
                title: "LAND4THAI",
              }}
            >
              {/* <div className="absolute top-4 w-full flex justify-center items-center">
                <SegmentedControl
                  defaultValue="android"
                  onChange={(e) => setOpen2(e as any)}
                  options={[
                    {
                      label: "Apple",
                      value: "iphone",
                      icon: <FaApple></FaApple>,
                    },
                    {
                      label: "Android",
                      value: "android",
                      icon: <FaAndroid></FaAndroid>,
                    },
                  ]}
                ></SegmentedControl>
              </div> */}
              <div className={`${contantPading}`}>
                <PhoneScreen layout={open2}>
                  <ImageCommon
                    src={images.projects.land4Thai.images.screen}
                    containerClassName="w-full h-full"
                  ></ImageCommon>
                </PhoneScreen>
              </div>
            </CardBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
