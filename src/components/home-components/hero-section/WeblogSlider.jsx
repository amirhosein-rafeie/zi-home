import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft } from "../../../assets/icons/theIcons/myIcons";
import WeblogCard from "./WeblogCard";
import weblogData from "../../../data/weblogData";

const WeblogSlider = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="relative flex py-5 items-center  ">
          <div className="text-primary-600 pr-[108px] mr-2">
            <span> محبوب ترین</span>
          </div>
          <div className="grow border-t border-gray-500"></div>

          <div className="text-gray-500 flex flex-row pl-[108px] ml-2">
            <span className="flex flex-row">
              مشاهده همه <ArrowLeft />
            </span>
          </div>
        </div>
      </div>
      <div className=" min-h-[376px] flex gap-6 pl-[108px] pr-[108px]">
        <Swiper
          modules={[Pagination, Navigation]}
          dir="rtl"
          grabCursor={true}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          className="slider-container"
        >
          {weblogData.map((e) => (
            <SwiperSlide
              key={e.id}
              className="flex justify-center items-center"
            >
              <WeblogCard item={e} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default WeblogSlider;
