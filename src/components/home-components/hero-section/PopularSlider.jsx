import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SlidesNav from "./SlidesNav";
import SlidesNav1 from "./SlidesNav1";
import Special from "./Special";
import { productsByCategory } from "../../../data/categoryData";
import etebariBanner from "../../../assets/images/etebariBanner.png";
import choobineBanner from "../../../assets/images/choobineBanner.png";
import { productsByCategory1 } from "../../../data/categoryData1";

const PopularSlider = () => {
  const [activeCategory, setActiveCategory] = useState("kitchen");
  const [activeCategory1, setActiveCategory1] = useState("decor");
  const products = productsByCategory[activeCategory] || [];
  const products1 = productsByCategory1[activeCategory1] || [];

  return (
    <div>
      <div>
        <SlidesNav
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <br />
        <div className="pl-[108px] pr-[108px]">
          <div className="lg:bg-white flex items-center w-full">
            <Swiper
              key={activeCategory}
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              breakpoints={{
                360: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                  centeredSlides: false,
                },
              }}
              navigation={false}
              loop
              autoplay={{ delay: 2500 }}
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

          <div className="w-[1264px] h-[346px] mt-20 mx-auto">
            <img
              src={etebariBanner}
              alt="banner"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div>
        <SlidesNav1
          activeCategory={activeCategory1}
          onSelectCategory={setActiveCategory1}
        />
        <br />
        <div className="pl-[108px] pr-[108px]">
          <div className="lg:bg-white flex items-center w-full">
            <Swiper
              key={activeCategory}
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              breakpoints={{
                360: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                  centeredSlides: false,
                },
              }}
              navigation={false}
              loop
              autoplay={{ delay: 2500 }}
              className="h-full w-full"
            >
              {products1.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex justify-center items-center"
                >
                  <Special item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-[1264px] h-[346px] mt-20 mx-auto">
            <img
              src={choobineBanner}
              alt="banner"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSlider;
