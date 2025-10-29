import Popular from "./hero-section/Popular";
import SpecialSlider from "./hero-section/SpecialSlider";
import TopSales from "./hero-section/TopSales";
import WeblogSlider from "./hero-section/WeblogSlider";

function HeroSection() {
  return (
    <>
      <SpecialSlider />
      <Popular />
      <TopSales />
      <WeblogSlider />
    </>
  );
}

export default HeroSection;
