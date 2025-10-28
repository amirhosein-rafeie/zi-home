import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SlidesNav from "./SlidesNav";

import productData from "../../../data/ProductData";
import etebariBanner from "../../../assets/images/etebariBanner.png";
import Card from "./Card";

const TopSales = () => {
  return (
    <div>
      <SlidesNav />
      <br />
      <div className=" pl-[108px] pr-[108px]">
        <div className=" lg:bg-white flex w-full">
          <Swiper
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
            autoplay={{ delay: 1500 }}
            className="h-full w-full"
          >
            {productData.map((item) => (
              <SwiperSlide
                key={item.id}
                className="flex justify-center items-center"
              >
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-[1264px] h-[346px] mt-20">
          <img src={etebariBanner} />
        </div>
      </div>
    </div>
  );
};
export default TopSales;
