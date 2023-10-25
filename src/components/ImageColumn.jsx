"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const pics = ["11", "12", "13", "14"];
const ImageColumn = ({ clicked }) => {
  const columnContainer = {
    translate: {
      y: ["0vh", "101.34vh"],
      opacity: 0.5,
      transition: {
        y: {
          delay: 1.5,
          duration: 6,

          ease: "linear",
          repeat: "Infinity",
          repeatType: "loop",
        },
        opacity: {
          delay: 3,
          duration: 1,

          ease: "linear",
        },
      },
    },

    exit: {
      y: "139.34vh",

      transition: {
        duration: 1.5,
        ease: [0.91, 0.13, 0.4, 0.77],
      },
    },
  };
  const imageColumn = {
    translate: {
      y: ["-100vh", "0vh"],
      height: ["400vh", "100vh"],
      opacity: 1,

      transition: {
        duration: 1.5,
        opacity: {
          duration: 0,
        },
        height: {
          duration: 2.5,
        },
        ease: [0.91, 0.13, 0.4, 0.77],
      },
    },
  };
  return (
    <>
      {!clicked && (
        <div className="w-1/5  relative mr-[1.34vh]">
          <motion.div
            variants={columnContainer}
            animate="translate"
            exit="exit"
            className="w-full  absolute bottom-0 flex flex-col gap-[1.34vh]"
          >
            <div className="h-[100vh]   w-full flex flex-col justify-between items-center">
              {pics.map((pic, index) => (
                <div key={index} className="w-full h-[24vh] relative">
                  <Image
                    src={`/img/${pic}.jpg`}
                    fill={true}
                    alt="image"
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <motion.div
              layout
              variants={imageColumn}
              className="h-[400vh] opacity-0 w-full flex flex-col justify-between items-center"
            >
              {pics.map((pic, index) => (
                <div key={index} className="w-full h-[24vh] relative">
                  <Image
                    src={`/img/${pic}.jpg`}
                    fill={true}
                    alt="image"
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ImageColumn;