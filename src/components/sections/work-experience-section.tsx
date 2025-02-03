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
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga assumenda eius voluptatibus, sed dicta quisquam alias eum hic inventore modi, obcaecati facere, consequuntur unde commodi voluptate illo adipisci quidem."
        }
      ></TitleBox>
      <TitleBox
        number={"2"}
        title={"IT One"}
        bottomTitle="( ฝึกงาน )"
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga assumenda eius voluptatibus, sed dicta quisquam alias eum hic inventore modi, obcaecati facere, consequuntur unde commodi voluptate illo adipisci quidem."
        }
      ></TitleBox>
      <TitleBox
        number={"3"}
        title={"Digixworks"}
        bottomTitle="( ปัจจุบัน )"
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga assumenda eius voluptatibus, sed dicta quisquam alias eum hic inventore modi, obcaecati facere, consequuntur unde commodi voluptate illo adipisci quidem."
        }
      ></TitleBox>
    </div>
  );
};

export default WorkExperienceSection;
