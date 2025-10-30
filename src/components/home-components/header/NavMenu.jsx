import {
  BathBathroom,
  BenchTreeCloud,
  Box,
  BuildingWallBricks,
  ChairStand,
  Cup2,
  CurtainsBlinds,
  Favorite,
  Justify,
  MedalPrizeReward,
  Sofa,
  StarsLightSparkle,
  StoveInductionPot,
  TageOffer,
  ToolsWenchRuler,
} from "../../../assets/icons/theIcons/myIcons";
import heroimage from "../../../assets/images/heroimage.png";

const NavMenu = () => {
  return (
    <div>
      <div className="bg-white text-gray-900 w-full h-[78px] flex items-center justify-start flex-1 pr-[108px] gap-4">
        <div className="group relative flex h-full items-center   hover:text-primary-600 transition-colors ease-in cursor-pointer hover:bg-white">
          <span className="flex flex-row hover:text-primary-600 gap-1.5">
            <Justify className=" hover:stroke-primary-600 " />
            دسته بندی کالاها
          </span>
          <div className=" hidden group-hover:block absolute top-full right-0 bg-white text-right w-full h-[474px]">
            <div className=" p-2  hover:text-primary-600 transition-colors ease-in text-gray-900">
              <span className="flex flex-row gap-2">
                <Sofa /> مبلمان
              </span>
            </div>
            <div className=" p-2 hover:text-primary-600 transition-colors ease-in text-gray-900 ">
              <span className="flex flex-row gap-2">
                <CurtainsBlinds /> دکوراسیون داخلی
              </span>
            </div>
            <div className="p-2 relative group/sub hover:text-primary-600 transition-colors ease-in text-gray-900 ">
              <span className="flex flex-row gap-2">
                <StoveInductionPot /> لوازم آشپزخانه
              </span>
              <div className="hidden group-hover/sub:block absolute top-0 right-full bg-white whitespace-nowrap text-right z-10">
                <div className="italic text-gray-900">
                  <span>subsub</span>
                </div>
                <div className="italic text-gray-900">
                  <span>subsub</span>
                </div>
                <div className="italic text-gray-900">
                  <span>subsub</span>
                </div>
                <div className="italic text-gray-900">
                  <span>subsub</span>
                </div>
                <div className="italic text-gray-900">
                  <span>subsub</span>
                </div>
              </div>
            </div>
            <div className=" p-2 hover:text-primary-600 transition-colors ease-in text-gray-900 ">
              <span className="flex flex-row gap-2">
                <BathBathroom /> سرویس خواب و حمام
              </span>
            </div>
            <div className="p-2  hover:text-primary-600 transition-colors ease-in text-gray-900 ">
              <span className="flex flex-row gap-2">
                <ChairStand /> نور پرازی و روشنایی
              </span>
            </div>
            <div className=" p-2 hover:text-primary-600 transition-colors ease-in text-gray-900 ">
              <span className="flex flex-row gap-2">
                <Box /> لوازم سازماندهی
              </span>
            </div>
            <div className=" p-2 hover:text-primary-600 transition-colors ease-in text-gray-900 ">
              <span className="flex flex-row gap-2">
                <ToolsWenchRuler /> ابزار و تجهیزات خانه
              </span>
            </div>
            <div className=" p-2 hover:text-primary-600 transition-colors ease-in text-gray-900 ">
              <span className="flex flex-row gap-2">
                <BenchTreeCloud /> فضای باز و باغچه
              </span>
            </div>
            <div className=" p-2 hover:text-primary-600 transition-colors ease-in text-gray-900 ">
              <span className="flex flex-row gap-2">
                <BuildingWallBricks /> خدمات
              </span>
            </div>
            <div className=" p-2 hover:text-primary-600 transition-colors ease-in text-gray-900 ">
              <span className="flex flex-row gap-2">
                <TageOffer /> محصولات ویژه
              </span>
            </div>
          </div>
        </div>

        <div className=" hover:text-primary-600 transition-colors ease-in cursor-pointer hover:bg-white">
          <span className="flex flex-row hover:text-primary-600 gap-1.5">
            <StarsLightSparkle className=" hover:stroke-primary-600 " />
            شگفت انگیزها
          </span>
        </div>
        <div className=" hover:text-primary-600 transition-colors ease-in cursor-pointer hover:bg-white">
          <span className="flex flex-row hover:text-primary-600 gap-1.5">
            <MedalPrizeReward className=" hover:stroke-primary-600 " />
            ترند ترین
          </span>
        </div>
        <div className=" hover:text-primary-600 transition-colors ease-in cursor-pointer hover:bg-white">
          <span className="flex flex-row hover:text-primary-600 gap-1.5">
            <Cup2 className=" hover:stroke-primary-600 " />
            پرفروش ترین
          </span>
        </div>
        <div className=" hover:text-primary-600 transition-colors ease-in cursor-pointer hover:bg-white">
          <span className="flex flex-row hover:text-primary-600 gap-1.5">
            <Favorite className=" hover:stroke-primary-600 " />
            محبوب ترین
          </span>
        </div>
        <div className=" hover:text-primary-600 transition-colors ease-in cursor-pointer hover:bg-white">
          <span className="flex flex-row hover:text-primary-600 gap-1.5">
            پیشنهاد شما
          </span>
        </div>
      </div>
      <div
        style={{
          background: `url(${heroimage}) center center no-repeat`,
          backgroundSize: "cover",
        }}
        className="h-[700px] w-full"
      />
    </div>
  );
};

export default NavMenu;
