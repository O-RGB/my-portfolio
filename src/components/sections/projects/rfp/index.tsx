import CardBox from "@/components/common/card";
import CardContant from "@/components/common/card/card-contant";
import ImageCommon from "@/components/common/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface RfpProjectProps {}

const RfpProject: React.FC<RfpProjectProps> = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });

  return (
    <>
      <div ref={ref} className="relative grid grid-cols-3 gap-contant h-20 ">
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
              src="/images/project/gaysorn/gaysorn-icon.png"
              containerClassName="w-full h-14 p-5"
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
          className="h-full flex flex-col gap-4"
          highlight={false}
        >
          <CardContant
            tags={["test", "2020"]}
            moreDetail={<>test</>}
            title={<>Lorem ipsum dolor sit amet</>}
            description={
              <>
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
              </>
            }
          ></CardContant>
        </CardBox>
      </motion.div>
    </>
  );
};

export default RfpProject;
