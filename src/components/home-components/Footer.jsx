import backfooter from "@/assets/images/backfooter.png";
import resane from "@/assets/images/resane.png";
import etehadie from "@/assets/images/etehadie.png";
import Enamad from "@/assets/images/Enamad.png";
import lines from "@/assets/images/lines.png";
import box from "@/assets/images/box.svg";
import checkmark from "@/assets/images/checkmark.svg";
import truck from "@/assets/images/truck.svg";
import zihome from "@/assets/images/zihome.svg";
import youtube from "@/assets/images/youtube.svg";
import twitter from "@/assets/images/twitter.svg";
import instagram from "@/assets/images/instagram.svg";
import linkedin from "@/assets/images/linkedin.svg";
import { DotaDota } from "@/assets/icons/theIcons/myIcons";

function Footer() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${backfooter})` }}
        className="w-full h-[590px] bg-cover flex flex-col relative z-0"
      >
        <div className=" pl-[218px] flex justify-end">
          <DotaDota className="absolute z-10  w-25! h-25! cursor-pointer " />
        </div>

        <div className="h-16"></div>
        <div className="flex justify-start pr-[108px]">
          <img src={zihome} />
        </div>
        <div className="h-8"></div>
        <div className="h-[230px] w-full flex flex-row justify-between pl-[108px] pr-[108px] ">
          <div className="flex flex-col gap-2">
            <div className="text-neutral-950 flex justify-start text-[16px] font-bold">
              <span>درباره زی هوم</span>
            </div>
            <div className="bg-linear-to-b from-neutral-800 via-neutral-600 to-neutral-400 bg-clip-text text-transparent w-[500px]">
              <span>
                فروشگاه ما با ارایه مجموعه ای متنوع از محصولات خانه، تجربه ای
                آسان و مطمئن برای خرید آنلاین فراهم کرده است. با ضمانت کیفیت،
                ارسال سریع و پشتیبانی حرفه ای، همراه شما هستیم.برای کسب اطلاعات
                بیشتر درباره خدمات و شرایط فروش،کلیک کنید.
              </span>
            </div>
            <div className="flex justify-start text-neutral-700">
              <span>مشاهده بیشتر...</span>
            </div>
            <div className="h-8"></div>
            <div className="w-[500px] h-[62px] flex-col">
              <div className="flex justify-start h-[22px] w-[500px]">
                <span>تلفن پشتیبانی: ۴۴۳۴۹۸۶۷-۰۲۱</span>
              </div>
              <div className="flex justify-between flex-row items-center">
                <span className="text-neutral-900">همراه ما باشید</span>
                <div className="flex flex-row gap-1">
                  <div className="w-10 h-10">
                    {" "}
                    <img src={youtube} />{" "}
                  </div>
                  <div className="w-10 h-10">
                    {" "}
                    <img src={instagram} />{" "}
                  </div>
                  <div className="w-10 h-10">
                    {" "}
                    <img src={twitter} />{" "}
                  </div>
                  <div className="w-10 h-10">
                    {" "}
                    <img src={linkedin} />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[62px] flex flex-row justify-between"></div>
          </div>
          <div className="w-[600px] h-[196px] flex flex-row gap-4 ">
            <div className="flex flex-col w-[180px]">
              <span className="h-[38px] text-neutral-900">محصولات</span>
              <div className="flex flex-col text-neutral-600 gap-3">
                <span>مبلمان </span>
                <span>دکوراسیون</span>
                <span>لوارم آشپزخانه</span>
                <span>ابزار خانه</span>
                <span>سرویس خواب</span>
              </div>
            </div>
            <div className="flex flex-col w-[179px]">
              <span className="h-[38px] text-neutral-900">خدمات مشتریان</span>
              <div className="flex flex-col text-neutral-600 gap-3">
                <span>پیگیری سفارش</span>
                <span>شرایط و قوانین </span>
                <span>روش های ارسال</span>
                <span>سوالات متداول</span>
              </div>
            </div>
            <div className="flex flex-col w-[184px]">
              <span className="h-[38px] text-neutral-900">درباره ما</span>
              <div className="flex flex-col text-neutral-600 gap-3">
                <span>معرفی فروشگاه</span>
                <span>تماس با ما</span>
                <span>همکاری با ما</span>
                <span>وبلاگ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-12"></div>

        <div className="w-full h-px bg-neutral-400  "></div>

        <div className="flex flex-row justify-between gap-9  pt-6 pl-[108px] pr-[108px] ">
          <div className="w-[856px] h-[104px] rounded-2xl bg-[#FFFFFF] flex flex-row gap-6 items-center">
            <div>
              <img src={truck} className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-neutral-900">ارسال سریع</span>
              <span className="text-[14px] text-neutral-500">
                در کمترین زمان ممکن
              </span>
            </div>
            <div>
              <img src={lines} className="w-[110px]" />
            </div>
            <div>
              <img src={checkmark} className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-neutral-900">
                ضمانت بازگشت کالا
              </span>
              <span className="text-[14px] text-neutral-500">
                حداکثر ۱۰ روز کاری
              </span>
            </div>
            <div>
              <img src={lines} className="w-[110px]" />
            </div>
            <div>
              <img src={box} className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-neutral-900">اصالت کالا</span>
              <span className="text-[14px] text-neutral-500">
                از بهترین برندها
              </span>
            </div>
          </div>
          <div className="flex flex-row  gap-4">
            <div className="w-[99.33px] h-[102px] ">
              <img src={etehadie} className="rounded-2xl" />
            </div>
            <div className="w-[99.33px] h-[102px]">
              <img src={resane} className="rounded-2xl" />
            </div>
            <div className="w-[99.33px] h-[102px]">
              <img src={Enamad} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row top-0 bg-neutral-900 w-full h-[54px] justify-between items-center ">
        <div className="pr-[108px] text-neutral-300">
          <span>
            کلیه حقوق این سایت متعلق به شرکت آریا گستر ( فروشگاه زی هوم) می
            باشد.
          </span>
        </div>
        <div className="pl-[108px] text-neutral-300 ">
          <span>Zihome.com.2025 @ copyright</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
