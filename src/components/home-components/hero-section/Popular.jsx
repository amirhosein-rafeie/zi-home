import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import choobineBanner from "../../../assets/images/choobineBanner.png";
import { categories, CATEGORY_MAP } from "../../../data/categories";
import { products } from "../../../data/products";
import Card from "../../Card";

const Popular = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORY_MAP.decor);
  const productsPopular = products.filter(
    (el) => el.category === activeCategory
  );

  return (
    <div>
      <div className="flex flex-col">
        <div className="relative flex py-5 items-center">
          <div className="text-primary-600 pr-[108px] mr-2">
            <span>محبوب ترین</span>
          </div>

          <div className="grow border-t border-gray-300"></div>
          <div className="text-gray-500 flex flex-row pl-[108px] ml-2">
            <span className="flex flex-row cursor-pointer hover:text-primary-600">
              مشاهده همه
            </span>
          </div>
        </div>
        <div className="flex flex-row text-neutral-900 gap-5 pr-[108px] cursor-pointer">
          <div className="border-r-4 rounded-r border-[#DC2655] "> </div>
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pr-1 ${
                activeCategory === cat.id
                  ? "text-primary-600"
                  : "hover:text-primary-600 hover:border-b-2 hover:border-[#DC2655]"
              }`}
            >
              <span>{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
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
              {productsPopular.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex justify-center items-center"
                >
                  <Card item={item} />
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

export default Popular;
