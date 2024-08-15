import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";

function AboutUsSection() {
  return (
    <div>
      <Header title="" subtitle="Tim Kami" />
      <div className="flex justify-between items-center gap-8 flex-col md:flex-row">
        <div>
          <img src="/images/team_image.png" alt=" team image" />
        </div>
        <div>
          <p>
          Kami adalah tim profesional yang berfokus pada layanan perbaikan dan pemeliharaan perangkat Apple Anda. Dengan keahlian kami, kami memastikan bahwa perangkat Apple Anda selalu dalam kondisi terbaik, siap mendukung produktivitas dan kreativitas Anda.
          </p>
          <p>
          Kami juga menyediakan solusi strategis untuk meningkatkan bisnis Anda melalui teknologi. Kami berkomitmen untuk membantu Anda mencapai tujuan bisnis dengan layanan berkualitas yang kami tawarkan, memastikan perangkat Apple Anda selalu berfungsi dengan optimal.
          </p>

          <div className="flex gap-4 mt-8">
            <MainButton text="Tentang Kami" />
            <MainButton
              text="Cerita kami"
              classes="bg-white hover:bg-white border border-primary text-primary font-semibold"
              iconRoute="/images/play_icon.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
