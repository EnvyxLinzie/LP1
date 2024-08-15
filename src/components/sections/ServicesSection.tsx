import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ServiceCard from "../cards/ServiceCard";

function ServicesSection() {
  const data = [
    {
      iconRoute: "/images/tv_icon.png",
      title: "Support All Apple Device",
    },
    {
      iconRoute: "/images/cog_icon.png",
      title: "100% Produk Normal Setelah Service",
    },
    {
      iconRoute: "/images/pen_icon.png",
      title: "Ketilitian Yang Bagus",
    },
    {
      iconRoute: "/images/tv_alt_icon.png",
      title: "Kepuasan Costumer Tujuan Kami",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row gap-8 items-center">
      <div>
        <p className="text-primary  text-[24px] font-semibold text-center md:text-left">
        Layanan Kami
        </p>
        <p className="text-dark text-[24px] md:text-[55px] font-semibold text-center md:text-left">
        Solusi Cepat dan Tepat
        </p>
        <p className="text-customGray">
        Kami menyediakan layanan perbaikan dan pemeliharaan perangkat Apple dengan fokus pada kecepatan dan ketepatan. 
        </p>
        <p className="text-customGray">
        Dengan strategi yang kreatif dan layanan terbaik, kami membantu meningkatkan kinerja perangkat Anda, memastikan kelancaran operasional dan mendukung produktivitas Anda.
        </p>
        <Link href="/" className="text-primary flex gap-4 font-bold mt-4">
          Baca Selengkapnya <ArrowRight color="#377DFF" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {data.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
