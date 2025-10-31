import { ArrowLeft3 } from "../../../assets/icons/theIcons/myIcons";
import { useState } from "react";
const WeblogCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const paragraphStyle = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  return (
    <div
      className={`w-72 transition-all ease-in duration-700 min-h-94 border-[1px] border-neutral-300 border-b-neutral-300   rounded-[16px] flex flex-col border-b-[5px] ${
        isOpen === true ? "border-amber-900" : ""
      }`}
    >
      <div>
        <div className="w-[288px] flex flex-col">
          <img src={item.image} />
        </div>
        <div className="w-[288px] p-4 flex flex-col">
          <div className=" w-[256px]">
            <div>
              <span variant="" className="text-neutral-950">
                {item.title}
              </span>
            </div>
            <div className="text-neutral-600 ">
              <p style={isOpen ? null : paragraphStyle}>{item.exp}</p>
            </div>
          </div>

          <div className="flex flex-row justify-between w-[256px]">
            <div className="text-neutral-500">
              <span>{item.date}</span>
            </div>
            <div>
              <ArrowLeft3 onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeblogCard;
