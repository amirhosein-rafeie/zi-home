import Popular from "./hero-section/Popular";
import SpecialSlider from "./hero-section/SpecialSlider";
import TopSales from "./hero-section/TopSales";
import WeblogSlider from "./hero-section/WeblogSlider";
import heroimage from "@/assets/images/heroimage.png";

function HeroSection() {
  return (
    <div>
      <div
        style={{
          background: `url(${heroimage}) center center no-repeat`,
          backgroundSize: "cover",
        }}
        className="h-[700px] w-full"
      />
      <div className="mt-8">
        <SpecialSlider />
        <Popular />
        <TopSales />
        <WeblogSlider />
      </div>
    </div>
  );
}

export default HeroSection;
