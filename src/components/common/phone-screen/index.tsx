import React, { useEffect } from "react";
import ImageCommon from "../image";
import IPhoneFrame from "./iphone";
import IPadFrame from "./ipad";
import MacBoockFrame from "./mac";

type LayoutScreen = "IPHONE" | "IPAD" | "MAC";

interface PhoneScreenProps {
  layout?: LayoutScreen;
  children?: React.ReactNode;
}

const PhoneScreen: React.FC<PhoneScreenProps> = ({
  layout = "IPHONE",
  children,
}) => {
  const width =
    layout === "IPHONE"
      ? `aspect-[10/21] w-[45%] md:w-[230px] rounded-[10%]`
      : layout === `IPAD`
      ? `aspect-[10/14] w-[66%] md:w-[340px] rounded-[3%]`
      : layout === `MAC`
      ? `aspect-[16/10.5] w-[80%] rounded-[3%] overflow-hidden mb-[5%]`
      : ``;

  useEffect(() => {}, [layout]);
  return (
    <div className="relative flex items-center justify-center w-full h-full scale-[0.8]">
      <div
        className={`${width} absolute flex items-center justify-center overflow-hidden`}
      >
        {children}
      </div>
      {layout === "IPHONE" ? (
        <IPhoneFrame />
      ) : layout === "IPAD" ? (
        <IPadFrame />
      ) : layout === "MAC" ? (
        <MacBoockFrame />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PhoneScreen;
