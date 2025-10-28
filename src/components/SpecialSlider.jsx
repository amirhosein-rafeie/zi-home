import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import products from "../data/data";
import productCategory from "../data/dataa";

import Special from "./Special";
import backContainer from "../assets/images/backkol.png";
import frame from "../assets/images/frame.png";
import group from "../assets/images/Group.svg";
import offer from "../assets/images/offer.png";

import Timer from "./Timer";

const SpecialSlider = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#DC2655] lg:bg-white lg:flex justify-center h-[480px] lg:h-[380px] ">
          <div className=" visible lg:hidden flex gap-10 justify-between">
            <div className="visible bg-[#DC2655] lg:hidden h-23 pt-4 bottom-0 right-1/2 pl-3">
              <Timer />
            </div>
            <div className="invisible sm:visible">
              <img src={offer} width={400} />
            </div>
          </div>

          <div
            className="hidden lg:flex w-1/4 h-full relative"
            style={{
              background: `url(${backContainer}) center center`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute flex  items-center -space-x-19 top-36 -left-12 z-10">
              <img src={group} alt="group icon" className="w-[90px] " />
              <img
                src={group}
                alt="group icon"
                className="w-[90px] opacity-70"
              />
            </div>
            <div className="absolute z-20 top-70 lg:top-73 right-7.5 left-9">
              <Timer />
            </div>
          </div>

          <div className="bg-primary-600 lg:bg-white flex w-full lg:w-3/4 h-3/4 lg:h-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                  centeredSlides: false,
                },
              }}
              navigation={false}
              loop
              autoplay={{ delay: 1500, reverseDirection: true }}
              className="h-full w-full"
            >
              {products.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex justify-center items-center"
                >
                  <Special item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full py-8">
          <h1 className="text-xl mb-6 text-center">دسته بندی محصولات</h1>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
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
            className="h-[220px] w-full"
            style={{
              "--swiper-navigation-size": "18px",
              "--swiper-navigation-color": "black",
            }}
          >
            {productCategory.map((item) => (
              <SwiperSlide
                key={item.id}
                className="bg-white border border-[#D1D4D4] rounded-2xl shadow flex flex-col justify-center items-center"
              >
                <div className="flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-44 h-32 rounded-b-lg flex justify-center object-contain items-center aspect-square"
                  />
                </div>
                <h3 className="mt-2 text-center">{item.title}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex">
          <img src={frame} className="w-full" />
        </div>
      </div>
    </div>
  );
};
export default SpecialSlider;
