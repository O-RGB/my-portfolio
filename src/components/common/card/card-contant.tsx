import React, { useState } from "react";
import ButtonCommon from "../button";
import TruncateText from "../html/truncate-text";
import Tag from "../tags";
import ModalCommon from "../modal";

interface CardContantProps {
  tags?: string[];
  title?: React.ReactNode;
  description?: React.ReactNode;
  moreDetail?: React.ReactNode;
}

const CardContant: React.FC<CardContantProps> = ({
  description,
  tags,
  moreDetail,
  title,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <ModalCommon isOpen={open} onClose={handleCloseModal}>
        {moreDetail}
      </ModalCommon>
      <div className="flex flex-col gap-4 h-full">
        <div className="flex flex-wrap gap-2 h-fit">
          {tags?.map((ls, i) => {
            return (
              <React.Fragment key={`tag-contant-${i}`}>
                <Tag label={ls}></Tag>
              </React.Fragment>
            );
          })}
        </div>

        <TruncateText title={title} description={description}></TruncateText>

        {moreDetail && (
          <div className="h-fit">
            <ButtonCommon
              onClick={handleOpenModal}
              label="อ่านเพิ่มเติม"
            ></ButtonCommon>
          </div>
        )}
      </div>
    </>
  );
};

export default CardContant;
