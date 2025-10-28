const SlidesNav = ({ activeCategory, onSelectCategory }) => {
  const categories = [
    { id: "decor", label: "دکوراسیون" },
    { id: "kitchen", label: "آشپزخانه" },
    { id: "electric", label: "لوازم برقی" },
    { id: "equipment", label: "لوازم و تجهیزات" },
    { id: "accessories", label: "اکسسوری منزل" },
  ];

  return (
    <div className="flex flex-col">
      <div className="relative flex py-5 items-center">
        <div className="text-gray-500 flex flex-row pl-[108px] ml-2">
          <span className="flex flex-row cursor-pointer hover:text-primary-600">
            مشاهده همه
          </span>
        </div>

        <div className="flex-grow border-t border-gray-300"></div>
        <div className="text-primary-600 pr-[108px] mr-2">
          <span>پرفروش ترین</span>
        </div>
      </div>

      <div className="flex flex-row justify-end text-neutral-900 gap-5 pr-[108px] cursor-pointer">
        
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`pr-1  ${
              activeCategory === cat.id
                ? "text-primary-600"
                : "hover:text-primary-600 hover:border-b-2 hover:border-[#DC2655]"
            }`}
          >
            
            <span>{cat.label}</span>
            
          </div>
        ))}
        <div className="border-r-5 rounded-r-2xl border-[#DC2655]"> </div>
      </div>
    </div>
  );
};

export default SlidesNav;
