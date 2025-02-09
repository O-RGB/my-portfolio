import ButtonCommon from "@/components/common/button";
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
        className="relative grid grid-cols-3 gap-contant h-20 md:h-28"
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
              containerClassName="w-full h-14 p-4 md:p-6"
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
          className="w-full h-full flex flex-col gap-4"
          highlight={false}
          onClick={() => setOpen(true)}
        >
          <div className="flex gap-2 h-fit">
            <Tag label="2023"></Tag>
            <Tag label="Google Sheets"></Tag>
            <Tag label="Google App Script"></Tag>
          </div>
          <div className="relative h-full overflow-hidden md:fade-bottom">
            <div className="md:absolute inset-0 overflow-y-hidden flex flex-col gap-4">
              <span className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, autem molestias
              </span>

              <span className="line-clamp-[10] md:line-clamp-[10] xl:line-clamp-[15]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus qui corrupti aliquid, quae illo blanditiis, natus,
                maxime vero fugit reiciendis mollitia perspiciatis laboriosam.
                Suscipit, quis quasi! Quasi ex deserunt repellat. lines Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quisquam impedit sequi? Dolorum deleniti aliquam exercitationem
                ullam vitae
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus qui corrupti aliquid, quae illo blanditiis, natus,
                maxime vero fugit reiciendis mollitia perspiciatis laboriosam.
                Suscipit, quis quasi! Quasi ex deserunt repellat. lines Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quisquam impedit sequi? Dolorum deleniti aliquam exercitationem
                ullam vitae
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus qui corrupti aliquid, quae illo blanditiis, natus,
                maxime vero fugit reiciendis mollitia perspiciatis laboriosam.
                Suscipit, quis quasi! Quasi ex deserunt repellat. lines Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quisquam impedit sequi? Dolorum deleniti aliquam exercitationem
                ullam vitae
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus qui corrupti aliquid, quae illo blanditiis, natus,
                maxime vero fugit reiciendis mollitia perspiciatis laboriosam.
                Suscipit, quis quasi! Quasi ex deserunt repellat. lines Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quisquam impedit sequi? Dolorum deleniti aliquam exercitationem
                ullam vitae
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus qui corrupti aliquid, quae illo blanditiis, natus,
                maxime vero fugit reiciendis mollitia perspiciatis laboriosam.
                Suscipit, quis quasi! Quasi ex deserunt repellat. lines Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quisquam impedit sequi? Dolorum deleniti aliquam exercitationem
                ullam vitae
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus qui corrupti aliquid, quae illo blanditiis, natus,
                maxime vero fugit reiciendis mollitia perspiciatis laboriosam.
                Suscipit, quis quasi! Quasi ex deserunt repellat. lines Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quisquam impedit sequi? Dolorum deleniti aliquam exercitationem
                ullam vitae
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus qui corrupti aliquid, quae illo blanditiis, natus,
                maxime vero fugit reiciendis mollitia perspiciatis laboriosam.
                Suscipit, quis quasi! Quasi ex deserunt repellat. lines Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quisquam impedit sequi? Dolorum deleniti aliquam exercitationem
                ullam vitae
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus qui corrupti aliquid, quae illo blanditiis, natus,
                maxime vero fugit reiciendis mollitia perspiciatis laboriosam.
                Suscipit, quis quasi! Quasi ex deserunt repellat. lines Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quisquam impedit sequi? Dolorum deleniti aliquam exercitationem
                ullam vitae
                <br />
                <br />
              </span>
            </div>
          </div>

          <div className="h-fit">
            <ButtonCommon label="อ่านเพิ่มเติม"></ButtonCommon>
          </div>
        </CardBox>
      </motion.div>
    </>
  );
};

export default Gaysornurbanresort;
