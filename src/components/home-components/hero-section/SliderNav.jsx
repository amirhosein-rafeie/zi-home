import { categories } from "@/data/categories";
function SliderNav({ activeCategory, onSelectCategory }) {
  return (
    <div className="w-full flex flex-row text-neutral-900 gap-5 pr-[108px] cursor-pointer">
      <div className="border-r-4 rounded-r border-[#DC2655] "> </div>
      {categories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`pr-1 ${
            activeCategory === cat.id
              ? "text-primary-600 active:border-primary-600 "
              : "hover:text-primary-600 hover:border-b-2 hover:border-primary-600 active:border-primary-600 focus:border-amber-300 "
          }`}
        >
          <span>{cat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default SliderNav;
