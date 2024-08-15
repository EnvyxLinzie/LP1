import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const data = [
    {
      imageUrl: "/images/lady.png",
      name: "Angel Rose",
      role: "Manajer IT",
      review:
        "Layanan dari tim ini benar-benar luar biasa. Perangkat Apple kami selalu dalam kondisi prima berkat keahlian mereka. Sangat direkomendasikan!",
    },
    {
      imageUrl: "/images/lady.png",
      name: "Rina Amelia",
      role: "Desainer Grafis",
      review:
        "Saya sangat terbantu dengan solusi yang diberikan. Tidak hanya perbaikan, tapi juga saran untuk menjaga performa perangkat kami. Profesional dan cepat!"
    },
    {
      imageUrl: "/images/lady.png",
      name: "Angel Rose",
      role: "CEO Startup",
      hasDotOnBackground: true,
      review:
        "Tim ini tidak hanya memperbaiki masalah perangkat kami, tapi juga memberikan layanan yang ramah dan informatif. Mereka paham betul apa yang dibutuhkan pelanggan."
    },
  ];
  return (
    <section className="relative">
      <Header title="" subtitle="Apa Kata Mereka Tentang Kami" />
      <div className="flex gap-16 flex-col md:flex-row items-center mt-16">
        {data.map((datum, index) => (
          <TestimonialCard key={index} {...datum} />
        ))}
      </div>

      {/* <div className="absolute top-0 left-0 hidden md:block">
        <img src="/images/blue_rectangular_dots.png" alt="rectangular dots" />
      </div> */}
    </section>
  );
}

export default TestimonialSection;
