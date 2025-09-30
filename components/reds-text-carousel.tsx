"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function RedsTextCarousel() {
  const messages = [
    "Próximo juego con Tiburones a las 3 PM",
    "¡Vamos Reds! Unidos por la victoria",
    "No te pierdas el partido este Sabado!",
    "Sigue las estadísticas y el ranking en nuestra web",
    
  ];
  return (
    <div className="w-full bg-[#c8102e] py-2 flex items-center">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        allowTouchMove={false}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={6000}
        cssMode={false}
        style={{ width: "100%" }}
      >
        {messages.map((msg, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center items-center w-full">
              <span className="text-white text-lg font-bold tracking-wide">
                {msg}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
