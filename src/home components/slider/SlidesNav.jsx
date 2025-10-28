import React from "react";
import { ArrowLeft } from "../../assets/icons/theIcons/myIcons";

const SlidesNav = () => {
  return (
    <div className="flex flex-col ">
      <div className="relative flex py-5 items-center  ">
        <div className="text-primary-600 pr-[108px] mr-2">
          <span> محبوب ترین</span>
        </div>
        <div className="flex-grow border-t border-gray-500"></div>

        <div className="text-gray-500 flex flex-row pl-[108px] ml-2">
          <span className="flex flex-row">
            مشاهده همه <ArrowLeft />
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-start text-neutral-900  gap-5 pr-[108px] cursor-pointer ">
        <div className="border-r-4 rounded-r border-primary-600 hover:text-primary-600 pr-1">
          <span>دکوراسیون</span>
        </div>
        <div className="hover:text-primary-600 border-hidden hover:border-b-primary-600">
          <span>آشپزخانه</span>
        </div>
        <div className="hover:text-primary-600 hover:border-b-primary-600">
          <span>لوازم برقی</span>
        </div>
        <div className="hover:text-primary-600 hover:border-b-primary-600">
          <span>لوازم و تجهیزات</span>
        </div>
        <div className="hover:text-primary-600 hover:border-b-primary-600">
          <span>اکسسوری منزل</span>
        </div>
      </div>
    </div>
  );
};

export default SlidesNav;
