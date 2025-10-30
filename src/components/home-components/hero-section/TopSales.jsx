import { useState } from "react";
import { products } from "@/data/products";
import { categories, CATEGORY_MAP } from "@/data/categories";
import etebariLeft from "@/assets/images/etebariLeft.png";
import etebariRight from "@/assets/images/etebariRight.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Card from "@/components/Card";

export default function TopSales() {
  const [activeCategory, setActiveCategory] = useState(CATEGORY_MAP.kitchen);
  const productsTopSales = products.filter(
    (el) => el.category === activeCategory
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <div className="relative flex py-5 items-center">
          <div className="text-primary-600 pr-[108px] mr-2">
            <span>پرفروش ترین</span>
          </div>

          <div className="grow border-t border-gray-300"></div>
          <div className="text-gray-500 flex flex-row pl-[108px] ml-2">
            <span className="flex flex-row cursor-pointer hover:text-primary-600">
              مشاهده همه
            </span>
          </div>
        </div>
        <div className="text-xs sm:text-sm md:text-lg flex text-neutral-900 gap-2 md:gap-3 lg:gap-5 pr-[108px] pl-[108px] py-5 cursor-pointer">
          <div className="border-r-4 rounded-r border-[#DC2655] "> </div>
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pr-1 ${
                activeCategory === cat.id
                  ? "text-primary-600 hover:border-b-2 hover:border-primary-600 focus:outline-primary-600 active:outline-primary-600"
                  : "hover:text-primary-600 hover:border-b-2 hover:border-primary-600 focus:outline-primary-600 active:outline-primary-600"
              }`}
            >
              <span>{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

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
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
              },
              900: {
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
            {productsTopSales.map((item) => (
              <SwiperSlide
                key={item.id}
                className="flex justify-center items-center"
              >
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lg:flex space-y-3.5 lg:gap-3 w-full mt-20 mb-0 sm:mb-10 md:mb-50 lg:mb-20 mx-auto">
          <img src={etebariLeft} className="w-full lg:w-1/2 h-50 lg:h-84" />
          <img src={etebariRight} className="w-full lg:w-1/2 h-50 lg:h-84" />
        </div>
      </div>
    </div>
  );
}
