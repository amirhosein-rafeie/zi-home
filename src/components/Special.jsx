const Special = ({ item }) => {
  return (
    <div className="bg-white w-full max-w-[288px] mx-auto border border-[#D1D4D4] rounded-2xl shadow flex justify-center items-center flex-col pt-6 pr-4 pb-6 pl-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-full max-w-64 h-32 sm:h-40 rounded-b-lg object-contain"
      />

      <div className="gap-6 w-full h-40 grid  grid-rows-2 grid-cols-1">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-0 gap-y-0 pr-3">
          <div className="w-1/4">
            <img src={item.icon} />
            <p>{item.score}</p>
          </div>
          <div>
            <h3 className="pr-4  text-pretty xl:whitespace-nowrap">
              {item.title}
            </h3>
            <h4 className=" text-[#676F71] truncate pr-2 invisible md:visible">
              {item.model}
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:gap-3 xl:gap-5">
          <div className="gap-1">
            <p className="line-through text-[#676F71] text-pretty xl:whitespace-nowrap">
              {item.prevprice}
            </p>
            <p className="text-[#292C2D] text-clip">{item.price}</p>
          </div>
          <div>
            <p className="bg-[#F87171] w-[54px] text-xl h-8 rounded-3xl border-[#FDF2F6] border-2 text-[#FFFFFF] pt-1 pb-1 pr-3 pl-5">
              {item.off}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
