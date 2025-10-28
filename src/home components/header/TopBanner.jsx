import { Typography } from "@mui/material";
import SecondNav from "./SecondNav";
import NavMenu from "./NavMenu";
import heroimage from "C:/Users/AmirK/projects/bootcamp/Zhome/test zi-home/test-zi-home/src/assets/images/heroimage.png";

import TopSales from "../slider/TopSales";
import { ArrowLeft } from "../../assets/icons/theIcons/myIcons";
import WeblogSlider from "../slider/WeblogSlider";

const TopBanner = () => {
  return (
    <div>
      <div className="bg-gray-900 flex top-0 flex-row justify-between h-10">
        <Typography className="text-[14px] flex items-center text-white pr-[108px] mr-2">
          خرید بیش از یک میلیون تومان ارسال رایگان | خدمات رایگان
        </Typography>
        <Typography className="text-[14px] flex  items-center text-white pl-[108px] ml-2">
          50% تخفیف | فروش بهاره
        </Typography>
      </div>
      <SecondNav />
      <NavMenu />
      <div className="w-full h-[700px]">
        <img src={heroimage} />
      </div>
      <br />
      <br />
      <br />
      <TopSales />
      <br />
      <br />
      <WeblogSlider />
    </div>
  );
};

export default TopBanner;
