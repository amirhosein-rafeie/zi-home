import React from "react";
import batman from "../images/batMan.png";

const Mahsool = ({ price, title }) => {
  return (
    <div>
      <div className="min-w-[80%] md:min-w-[40%]">
        <div
          style={{ backgroundImage: "url(" + { batman } + ")" }}
          className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-gray-500/30"
        ></div>
        <div>{title}</div>
        <div>{price}</div>
      </div>
      ;
    </div>
  );
};

export default Mahsool;
