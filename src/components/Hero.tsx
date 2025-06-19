"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="hero-banner bg-[#CBCBCB] container m-auto px-[20px] overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[180px]"
        >
          Framer Motion
        </motion.h1>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-right"
        >
          <h2 className="font-[200] text-[90px]">LUNDEV</h2>
          <div>
            <p>Web Design</p>
            <p>
              Don&apos;t forget to subscribe to the channel to continuously
              <br />
              update interesting videos
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative h-[780px]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute -top-[100px] left-0  w-[100%] z-10"
        >
          <Image
            width={780}
            height={780}
            className="m-auto h-[780px] w-[780px]"
            src="/images/mouth.png"
            alt="Mouth"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="image relative w-[100%] h-[600px]"
        >
          <Image
            sizes="100vw"
            fill
            className="w-[100%] h-[600px] bg-cover inset-0 absolute"
            src="/images/banner.png"
            alt="Banner"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
