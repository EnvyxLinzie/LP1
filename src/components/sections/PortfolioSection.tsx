import React from "react";
import Header from "../common/Header";
import PortfolioCard from "../cards/PortfolioCard";
import MainButton from "../common/MainButton";
import { motion } from "framer-motion";

function PortfolioSection() {
  const data = [
    {
      bgClass: "bg-bg-1",
      title: "Konsultasi Kerusakan",
    },
    {
      bgClass: "bg-bg-2",
      title: "Perbaikan",
      hasDotOnBackground: true,
    },
    {
      bgClass: "bg-bg-3",
      title: "Device Kembali Normal",
    },
  ];
  return (
    <section className="relative">
      <Header title="" subtitle="Apa yang Kami Lakukan" />
      <p className="text-center text-customGray mt-8">
      Kami telah menyelesaikan berbagai proyek yang menunjukkan kemampuan kami dalam memberikan solusi teknologi yang andal dan nyaman digunakan. 
      </p>
      <p className="text-center text-customGray mb-8">
      Setiap proyek yang kami selesaikan membuktikan bahwa layanan kami dapat membantu meningkatkan kenyamanan dan efisiensi penggunaan perangkat, yang telah diakui oleh klien kami.
      </p>
      <div className="flex gap-16 flex-col md:flex-row items-center">
        {data.map((pfl, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="w-full hover:cursor-pointer"
          >
            <PortfolioCard key={index} {...pfl} />
          </motion.div>
        ))}
      </div>

      <div className="absolute top-16 right-0 hidden md:block">
        <img src="/images/rectangular_dots.png" alt="rectangular dots" />
      </div>

      <div className="flex justify-center mt-8">
        <MainButton
          text="Konsultasi Sekarang"
          classes="bg-white border border-primary hover:bg-white text-primary font-bold"
        />
      </div>
    </section>
  );
}

export default PortfolioSection;
