import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import yakhCat from "@/assets/images/productImages/yakhCat.png";
import serviceTeflon from "@/assets/images/productImages/serviceTeflon.png";
import flaCat from "@/assets/images/productImages/flaCat.png";
import moblemanCraft from "@/assets/images/moblemanCraft.png";
import microwave from "@/assets/images/productImages/microwave.png";

const ShopSlider = () => {
  return (
    <div className="pl-[108px] pr-[108px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={9}
        slidesPerView={1}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation
        loop
        autoplay={{ delay: 1500 }}
        className="h-[220px] w-full "
        style={{
          "--swiper-navigation-size": "0px",
        }}
      >
        <SwiperSlide>
          <div className=" border-b-2 border-b-neutral-400 rounded-2xl">
            <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
              <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                <img
                  className="object-cover top-[-0.5px] w-[177px] h-[125px]"
                  src={yakhCat}
                />
                <div>
                  <span>یخچال و فریز</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-b-2 border-b-neutral-300 rounded-2xl">
            <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
              <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                <img
                  className="object-cover top-[-0.5px] w-[177px] h-[125px]"
                  src={serviceTeflon}
                />
                <div>
                  <span>سرویس قابلمه</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-b-2 border-b-neutral-300 rounded-2xl">
            <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
              <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                <img
                  className="object-cover top-[-0.5px] w-[177px] h-[125px]"
                  src={flaCat}
                />
                <div>
                  <span>قاشق چنگال</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-b-2 border-b-neutral-300 rounded-2xl">
            <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
              <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                <img
                  className="object-cover top-[-0.5px] w-[177px] h-[125px]"
                  src={moblemanCraft}
                />
                <div>
                  <span> دکوراسیون</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-b-2 border-b-neutral-300 rounded-2xl">
            <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
              <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                <img
                  className="object-cover top-[-0.5px] w-[177px] h-[125px]"
                  src={microwave}
                />
                <div>
                  <span> لوازم برقی</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-b-2 border-b-neutral-300 rounded-2xl">
            <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
              <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                <div>
                  <span>محصولات دیگر</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShopSlider;
