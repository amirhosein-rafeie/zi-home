import kitchen from "../assets/images/kitchen.png";
import decoration from "../assets/images/decoration.jpg";
import light from "../assets/images/light.png";
import electric from "../assets/images/electric.png";

import yakhCat from "@/assets/images/productImages/yakhCat.png";
import serviceTeflon from "@/assets/images/productImages/serviceTeflon.png";
import flaCat from "@/assets/images/productImages/flaCat.png";

export const CATEGORY_MAP = {
  decor: 1,
  kitchen: 2,
  electric: 3,
  equipment: 4,
  accessories: 5,
  light: 6,
};


export const categories = [
  {
    id: CATEGORY_MAP.decor,
    label: "دکوراسیون",
    image: decoration,
    brand: "Etsy",
  },
  {
    id: CATEGORY_MAP.kitchen,
    label: "آشپزخانه",
    image: kitchen,
    brand: "Le Creuset",
  },
  {
    id: CATEGORY_MAP.electric,
    label: "لوازم برقی",
    image: electric,
    brand: "Samsung",
  },
  {
    id: CATEGORY_MAP.light,
    label: "نور و روشنایی",
    image: light,
    brand: "Panasonic",
  },
  {
    id: CATEGORY_MAP.equipment,
    label: "لوازم و تجهیزات",
    image: "",
    brand: "Craftsman",
  },
  {
    id: CATEGORY_MAP.accessories,
    label: "اکسسوری منزل",
    image: "",
    brand: "Chumbak",
  },
];

export const KITCHEN_MAP = {
  refrigerator: 1,
  pot: 2,
  flatware: 3,
};
export const kitchenCat = [
  { id: KITCHEN_MAP.refrigerator, label: "یخچال فریزر", image: yakhCat },
  { id: KITCHEN_MAP.pot, label: "سرویس قابلمه", image: serviceTeflon },
  { id: KITCHEN_MAP.flatware, label: "قاشق و چنگال و کارد", image: flaCat },
];
