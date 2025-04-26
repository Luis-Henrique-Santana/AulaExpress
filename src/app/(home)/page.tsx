'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { slides } from "@/consts/slides";
import Image from "next/image";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  return (
    <main className="h-page w-full bg-[radial-gradient(circle_at_bottom,var(--quaternary),var(--primary))] flex justify-center items-center">
        <section className="w-[70%] h-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
          >
              {slides.map(slide => (
                <SwiperSlide key={slide.alt}>
                  <div className="flex justify-center w-full">
                    <Image
                    src={slide.src}
                    alt={slide.alt}
                    sizes='100vw'
                    style={{ width: "90%", height: "500px" }}
                    width={500}
                    height={300}
                    className="rounded-2xl shadow-XXL"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
    </main>
  );
}
