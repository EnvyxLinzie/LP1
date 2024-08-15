import React, { useState } from "react";
import { motion } from "framer-motion";
import MainButton from "../common/MainButton";

function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative mt-32 md:mt-8 ">
      <div className="px-2">
        <p className="text-dark text-[28px] text-center  md:text-[64px] font-extrabold">
          Bikin Usaha Servicemu Semakin Dikenal
        </p>
        <p className="text-customGray text-[20px] text-center">
          Konsultasi, Kirim Barang, Service Selesai | Customer Senang
        </p>
      </div>
      <div className="flex justify-center my-8">
        <MainButton text="Konsultasi Sekarang" />
      </div>

      <div className="flex justify-center">
        <motion.img
          src={
            !isHovered
              ? `/images/hero_image_empty.png`
              : "/images/hero_image.png"
          }
          alt="hero image"
          style={{
            opacity: !isHovered ? 0.8 : 1,
            transition: "opacity 0.3s ease",
          }}
          transition={{
            ease: [0.7, 0, 0.3, 1],
          }}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setIsHovered(true)}
          className="cursor-pointer transition-all duration-100 ease-in-out"
        />
      </div>

      <div className="absolute top-32 left-8 hidden md:block">
        <img src="/images/blue_gradient_ball.png" alt="blue gradient ball" />
      </div>
      <div className="absolute top-0 right-0">
        <img
          src="/images/red_gradient_ball_half.png"
          alt="blue gradient ball"
        />
      </div>
    </div>
  );
}

export default HeroSection;
