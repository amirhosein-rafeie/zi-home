import kitchen from "../assets/images/kitchen.png";
import decoration from "../assets/images/decoration.jpg";
import light from "../assets/images/light.png";
import electric from "../assets/images/electric.png";

export const CATEGORY_MAP = {
  decor: 1,
  kitchen: 2,
  electric: 3,
  equipment: 4,
  accessories: 5,
  light: 6,
};

export const categories = [
  { id: CATEGORY_MAP.decor, label: "دکوراسیون", image: decoration },
  { id: CATEGORY_MAP.kitchen, label: "آشپزخانه", image: kitchen },
  { id: CATEGORY_MAP.electric, label: "لوازم برقی", image: electric },
  { id: CATEGORY_MAP.light, label: "نور و روشنایی", image: light },
  { id: CATEGORY_MAP.equipment, label: "لوازم و تجهیزات", image: "" },
  { id: CATEGORY_MAP.accessories, label: "اکسسوری منزل", image: "" },
];
