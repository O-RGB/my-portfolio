import React from "react";
import ButtonCommon from "../button";
import { FaPlus } from "react-icons/fa";
import { IButtomTitle } from "./types/card.type";
import Tag from "../tags";

interface CardBoxProps {
  children?: React.ReactNode;
  className?: string;
  moreDetail?: boolean;
  highlight?: boolean;
  onClick?: () => void;
  bottom?: IButtomTitle;
}

const CardBox: React.FC<CardBoxProps> = ({
  children,
  className,
  moreDetail = false,
  highlight = true,
  onClick,
  bottom,
}) => {
  return (
    <div>
      <div
        className={`relative p-6 ${
          highlight ? "bg-[#efe9e2]" : "bg-gray-100"
        } dark:bg-white/10 rounded-layout overflow-hidden ${className}`}
      >
        {children}

        {moreDetail && (
          <div className="absolute bottom-4 right-4">
            <ButtonCommon
              onClick={onClick}
              icon={<FaPlus></FaPlus>}
              isCircle
            ></ButtonCommon>
          </div>
        )}
      </div>
      {bottom && (
        <div className={`${bottom ? "pb-10 lg:pb-0" : ""}`}>
          {bottom.tag && bottom.tag.length > 0 && (
            <div className="flex gap-2 pt-4">
              {bottom.tag.map((tag, tkey) => (
                <React.Fragment key={`tag-ele-${tkey}`}>
                  <Tag {...tag}></Tag>
                </React.Fragment>
              ))}
            </div>
          )}
          {bottom.title && (
            <div className="text-3xl font-bold pt-3">{bottom.title}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CardBox;
