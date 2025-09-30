"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const images = [
  "img-20250629-wa0064.jpg",
  "img-20250629-wa0065.jpg",
  "img-20250629-wa0068.jpg",
  "img-20250629-wa0078 (1).jpg",
  "img-20250629-wa0078.jpg",
  "img-20250629-wa0079.jpg",
  "img-20250629-wa0087.jpg",
  "img-20250629-wa0091.jpg",
  "img-20250629-wa0093.jpg",
  "img-20250629-wa0110.jpg",
  "img-20250630-wa0017.jpg",
  "img-20250630-wa0018.jpg",
  "img-20250630-wa0022.jpg",
  "img-20250630-wa0028.jpg",
  "img-20250630-wa0034.jpg",
  "img-20250630-wa0035.jpg",
  "img-20250630-wa0036.jpg",
  "img-20250630-wa0037.jpg",
  "img-20250630-wa0043.jpg",
  "img-20250630-wa0044.jpg",
  "img-20250630-wa0045.jpg",
];

export default function A3ImageCarousel() {
  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-full ">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          speed={4000}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex justify-center items-center w-full h-[600px] rounded-lg overflow-hidden p-6">
                <Image
                  src={`/A3/${img}`}
                  alt={`Foto ${idx + 1}`}
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                  priority={idx === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
