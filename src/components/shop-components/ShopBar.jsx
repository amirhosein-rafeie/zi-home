import { Filter } from "@/assets/icons/theIcons/myIcons";
import { Button } from "@mui/material";
import React from "react";
import SliderNav from "../home-components/hero-section/SliderNav";

const ShopBar = () => {
  return (
    <div className="pl-[108px] pr-[108px] flex flex-row gap-[8px] ">
      <div>
        <Button
          variant="contained"
          color="primary"
          className="rounded-[8px] py-2 px-4 !h-10"
        >
          <Filter className="stroke-white" /> فیلترها
        </Button>
      </div>
      <div className="px-5 py-2 h-10">
        <SliderNav />
      </div>
    </div>
  );
};

export default ShopBar;
  