import { Filter } from "@/assets/icons/theIcons/myIcons";
import { Button } from "@mui/material";
import React from "react";
import SliderNav from "../home-components/hero-section/SliderNav";
import { products } from "@/data/products";
import Card from "../Card";

function gridChange() {
  const grid = document.getElementById("myGrid");
  const button = document.getElementById("filter-btn");

  button.addEventListener("click", () => {
    if (grid.classList.contains("grid-cols-4")) {
      grid.classList.remove("grid-cols-4");
      grid.classList.add("grid-cols-3");
      document.getElementById("myGrid").style.position = "relative";
    } else {
      grid.classList.remove("grid-cols-3");
      grid.classList.add("grid-cols-4");
      document.getElementById("myGrid").style.position = "";
    }
  });
}

const ShopBar = () => {
  return (
    <div className="pl-[108px] pr-[108px] flex flex-col gap-[8px] ">
      <div className="pl-[108px] pr-[108px] flex flex-row gap-[8px] ">
        <div>
          <Button
            variant="contained"
            color="primary"
            id="filter-btn"
            className="rounded-[8px] py-2 px-4 !h-10"
            onClick={gridChange}
          >
            <Filter className="stroke-white" /> فیلترها
          </Button>
        </div>
        <div className="px-5 py-2 h-10">
          <SliderNav />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2" id="myGrid">
        {products.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default ShopBar;
