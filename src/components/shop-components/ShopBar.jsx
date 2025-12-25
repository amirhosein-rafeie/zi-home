import { Filter } from "@/assets/icons/theIcons/myIcons";
import { Button } from "@mui/material";
import React, { useState } from "react";
import SliderNav from "../home-components/hero-section/SliderNav";
import { products } from "@/data/products";
import Card from "../Card";
import ShopFilters from "./ShopFilters";
// const grid = document.getElementById("myGrid");

const ShopBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const filterFunction = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="pl-[108px] pr-[108px] flex flex-col gap-[8px] ">
      <div className="pl-[108px] pr-[108px] flex flex-row gap-[8px] ">
        <div>
          <Button
            variant="contained"
            color="primary"
            id="filter-btn"
            className={`rounded-[8px] py-2 px-4 !h-10 ${
              isVisible ? "!hidden" : ""
            } `}
            onClick={filterFunction}
          >
            <Filter className="stroke-white" /> فیلترها
          </Button>
        </div>
        <div
          className={`px-5 py-2 h-10 ${
            isVisible ? "!flex !justify-end" : "!flex !justify-end"
          }
            `}
        >
          <SliderNav />
        </div>
      </div>
      <div className="flex flex-row">
        {isVisible && <ShopFilters onClose={filterFunction} />}
        <div
          className={`grid gap-2 ${
            isVisible ? "grid-cols-3" : "grid-cols-4"
          }  `}
          id="myGrid"
        >
          {products.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopBar;
