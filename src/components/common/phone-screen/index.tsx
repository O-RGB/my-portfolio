import React, { useEffect } from "react";
import ImageCommon from "../image";
import IPhoneFrame from "./iphone";
import IPadFrame from "./ipad";
import MacBoockFrame from "./mac";
import { ApplePosition, AppleSereenType } from "@/types/general.type";

interface PhoneScreenProps {
  layout?: AppleSereenType;
  children?: React.ReactNode;
  mode?: ApplePosition;
}

const PhoneScreen: React.FC<PhoneScreenProps> = ({
  layout = "iphone",
  mode = "portrait",
  children,
}) => {
  const rotate = mode === "landscape" ? "rotate-90" : "";
  const width =
    layout === "iphone"
      ? `w-[45%] h-[95%] rounded-[10%]`
      : layout === `ipad`
      ? `w-[66%] h-[94%] rounded-[3%]`
      : layout === `macbook`
      ? `w-[80%] h-[52%] rounded-[3%] rounded-[3%] overflow-hidden mb-[5.3%]`
      : ``;

  useEffect(() => {}, [layout]);
  return (
    <div>
      <div
        className={`${rotate} relative flex items-center justify-center aspect-square `}
      >
        <div className={`${width} absolute aspect-square overflow-hidden`}>
          {children}
        </div>
        {layout === "iphone" ? (
          <IPhoneFrame />
        ) : layout === "ipad" ? (
          <IPadFrame />
        ) : layout === "macbook" ? (
          <MacBoockFrame />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PhoneScreen;
