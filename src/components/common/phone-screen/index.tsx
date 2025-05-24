import React, { useEffect } from "react";
import IPhoneFrame from "./iphone";
import IPadFrame from "./ipad";
import MacBoockFrame from "./mac";
import { ApplePosition, AppleSereenType } from "@/types/general.type";
import AndroidFrame from "./android";

interface PhoneScreenProps {
  layout?: AppleSereenType;
  children?: React.ReactNode;
  mode?: ApplePosition;
  className?: string;
}

const PhoneScreen: React.FC<PhoneScreenProps> = ({
  layout = "iphone",
  mode = "portrait",
  children,
  className,
}) => {
  const rotate = mode === "landscape" ? "rotate-90" : "";
  const width =
    layout === "iphone"
      ? `w-[45%] h-[95%] rounded-[10%]`
      : layout === `ipad`
      ? `w-[66%] h-[94%] rounded-[3%]`
      : layout === `macbook`
      ? `w-[80%] h-[52%] rounded-[3%] rounded-[3%] overflow-hidden mb-[5.3%]`
      : layout === "android"
      ? `w-[45%] h-[98%] rounded-[8%]`
      : ``;

  useEffect(() => {}, [layout]);
  return (
    <div className="min-h-full min-w-full">
      <div
        className={`${rotate} ${className} relative flex items-center justify-center aspect-square`}
      >
        <div
          className={`${width} absolute aspect-square overflow-hidden shadow-xl drop-shadow-md`}
        >
          {children}
        </div>

        <div
          className={`${
            layout !== "iphone" ? "hidden" : "block"
          } w-full h-full`}
        >
          <IPhoneFrame />
        </div>
        <div
          className={`${layout !== "ipad" ? "hidden" : "block"} w-full h-full`}
        >
          <IPadFrame />
        </div>
        <div
          className={`${
            layout !== "macbook" ? "hidden" : "block"
          } w-full h-full`}
        >
          <MacBoockFrame />
        </div>
        <div
          className={`${
            layout !== "android" ? "hidden" : "block"
          } w-full h-full`}
        >
          <AndroidFrame />
        </div>
      </div>
    </div>
  );
};

export default PhoneScreen;
