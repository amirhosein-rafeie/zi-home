import { Container } from "@mui/material";
import batman from "../images/batMan.png";
import Mahsool from "./Mahsool";

const mahsoolat = [
  { id: 1, image: batman, title: "سلام دختری؟", price: "120$" },
  { id: 2, image: batman, title: "سلام دختری؟", price: "120$" },
  { id: 3, image: batman, title: "سلام دختری؟", price: "120$" },
  { id: 4, image: batman, title: "سلام دختری؟", price: "120$" },
  { id: 5, image: batman, title: "سلام دختری؟", price: "120$" },
  { id: 6, image: batman, title: "سلام دختری؟", price: "120$" },
  { id: 7, image: batman, title: "سلام دختری؟", price: "120$" },
  { id: 8, image: batman, title: "سلام دختری؟", price: "120$" },
  { id: 9, image: batman, title: "سلام دختری؟", price: "120$" },
];

const TopSalesSlider = () => {
  return (
    <Container>
      <div className="mt-4 flex w-full snap-x gap-5 overflow-x-auto pb-5">
        {mahsoolat.map((mahsool) => (
          <Mahsool
            key={mahsool.id}
            price={mahsool.price}
            image={mahsool.image}
            title={mahsool.title}
          />
        ))}
      </div>
    </Container>
  );
};

export default TopSalesSlider;
