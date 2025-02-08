import CardBox from "@/components/common/card";
import ImageCommon from "@/components/common/image";
import ModalCommon from "@/components/common/modal";
import Tag from "@/components/common/tags";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";

interface GaysornurbanresortProps {}

const Gaysornurbanresort: React.FC<GaysornurbanresortProps> = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <ModalCommon isOpen={open} onClose={() => setOpen(false)}>
        test
      </ModalCommon>
      <div
        ref={ref}
        className="relative grid grid-cols-3 gap-contant h-28 md:h-32"
      >
        <motion.div
          className="w-full h-full col-span-2"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : undefined}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 2, delay: 0.1 }}
        >
          <CardBox
            className="relative duration-300 !p-0 w-full h-full flex items-center justify-center"
            highlight={false}
          >
            <ImageCommon
              src="/images/project/gur/icon.png"
              containerClassName="w-full h-14 p-6"
              objectFit="contain"
            ></ImageCommon>
          </CardBox>
        </motion.div>
        <motion.div
          className="w-full h-full col-span-1"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : undefined}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 2, delay: 0.2 }}
        >
          <CardBox
            className="relative w-full h-full !p-4 flex items-center justify-center gap-2"
            highlight={false}
          >
            <ImageCommon
              src="/images/skills/frontend/nextjs.png"
              containerClassName="w-14 h-14 hidden dark:block"
              objectFit="contain"
            ></ImageCommon>
            <ImageCommon
              src="/images/skills/frontend/nextjs-dark.png"
              containerClassName="w-14 h-14 block dark:hidden"
              objectFit="contain"
            ></ImageCommon>
            <ImageCommon
              src="/images/skills/backend/php.png"
              containerClassName="w-14 h-14"
              objectFit="contain"
            ></ImageCommon>
          </CardBox>
        </motion.div>
      </div>
      <motion.div
        className="w-full h-full col-span-2"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : undefined}
        transition={{ ease: [0.4, 0, 0.2, 1], duration: 2 }}
      >
        <CardBox
          moreDetail
          className="w-full h-full flex flex-col gap-4"
          highlight={false}
          onClick={() => setOpen(true)}
        >
          <div className="flex gap-2">
            <Tag label="2023"></Tag>
            <Tag label="Google Sheets"></Tag>
            <Tag label="Google App Script"></Tag>
          </div>
          <div className="text-2xl">Lorem ipsum dolor sit,</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos delectus
          repudiandae iusto pariatur modi suscipit. Quo aliquam nihil repellat
          deleniti, recusandae molestiae qui, temporibus blanditiis nisi
          accusamus, repudiandae dolor voluptate!...
        </CardBox>
      </motion.div>
    </>
  );
};

export default Gaysornurbanresort;
