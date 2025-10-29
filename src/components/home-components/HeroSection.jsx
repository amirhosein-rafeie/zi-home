import Popular from "./hero-section/Popular";
import SpecialSlider from "./hero-section/SpecialSlider";
import TopSales from "./hero-section/TopSales";
import WeblogSlider from "./hero-section/WeblogSlider";

function HeroSection() {
  return (
    <div className="mt-8">
      <SpecialSlider />
      <Popular />
      <TopSales />
      <WeblogSlider />
    </div>
  );
}

export default HeroSection;
