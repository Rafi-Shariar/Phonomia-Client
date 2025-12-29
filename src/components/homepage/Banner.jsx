import React from "react";
import image1 from "../../assets/banner images/Banner-1.jpg";
import image2 from "../../assets/banner images/Banner-2.jpg";
import image3 from "../../assets/banner images/Banner-3.jpg";
import image4 from "../../assets/banner images/Banner-4.jpg";
import image5 from "../../assets/banner images/Banner-5.jpg";
import image6 from "../../assets/banner images/Banner-6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Banner = () => {
  return (
    <section className="grid grid-cols-12 gap-4 h-[40vh] md:h-[50vh] px-2 lg:px-1 pt-2 md:pt-6">
      <section className="hidden md:grid col-span-3 grid-rows-5 gap-4">
        <div className="row-span-2  rounded-lg overflow-hidden">
          <img src={image1} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="row-span-3  rounded-lg overflow-hidden">
          <img src={image2} alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="col-span-12 md:col-span-6 rounded-lg overflow-hidden h-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          <SwiperSlide>
            <img src={image3} className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="hidden md:block col-span-3 rounded-lg overflow-hidden h-full">
        <img src={image6} alt="" className="w-full h-full object-cover" />
      </section>
    </section>
  );
};

export default Banner;
