import { Typography } from "@mui/material";
import {
  CreditCards,
  Globe,
  Goal,
  LoveEmoji,
  MedalReward,
  Support,
  Truck,
} from "../../assets/icons/theIcons/myIcons";

import AboutBanner from "../../assets/images/AboutHero.jpg";
import mapBanner from "../../assets/images/mapBanner.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const About = () => {
  return (
    <div>
      <div className="w-full h-[700px] flex justify-stretch">
        <img src={AboutBanner} />
      </div>
      <div className="pl-[108px] pr-[108px] text-primary-600 flex justify-start pt-20">
        <Globe />
        <Typography variant="h6">زی هوم، داستان ما</Typography>
      </div>
      <br />
      <div className="pl-[108px] pr-[108px] text-neutral-950">
        <p>
          زی هوم از دل یک ایده ساده اما عمیق متولد شد؛ اینکه خانه چیزی فراتر از
          یک فضاست،، بلکه بازتابی از شخصیت، سلیقه و سبک زندگی شماست. ما باور
          داریم که خانه باید جایی باشد که با ورود به آن، حس آرامش، راحتی و لحظات
          خوش زندگی را در آن تجربه کنید. به همین دلیل، زی هوم با هدف ارائه‌ی
          لوازم خانه باکیفیت، شیک و کاربردی شکل گرفت تا فضایی دلنشین و متفاوت را
          برای شما خلق کند. ما معتقدیم که زیبایی خانه در جزئیات آن نهفته است؛ از
          جنس و رنگ مبلمان گرفته تا نورپردازی و اکسسوری‌ها، همه چیز باید با دقت
          و هماهنگی انتخاب شود تا فضایی گرم و صمیمی شکل بگیرد. ما باور داریم که
          هر خانه، داستان منحصربه‌فرد خود را دارد و هر وسیله‌ای که در آن قرار
          می‌گیرد، بخشی از این داستان را روایت می‌کند. از طراحی مدرن و مینیمال
          گرفته تا سبک‌های کلاسیک و سنتی، ما مجموعه‌ای از محصولات را گردآوری
          کرده‌ایم تا بتوانید با هر سلیقه و سبکی، خانه‌ای خاص و زیبا بسازید. در
          زی هوم، ما تنها به امروز فکر نمی‌کنیم؛ ما به دنبال خلق تجربه‌ای
          ماندگار هستیم. هدف ما این است که زی هوم به انتخاب اول شما برای خرید
          لوازم خانه تبدیل شود. ما با اشتیاق و انگیزه، به دنبال این هستیم که
          محصولاتمان نه‌تنها نیازهای شما را برآورده کنند، بلکه حس خوب زندگی را
          به خانه‌ی شما بیاورند به زی هوم خوش آمدید ، جایی که خانه، معنا پیدا می
          کند .
        </p>
      </div>
      <div className="text-[20px] text-neutral-950 flex justify-center font-bold">
        <span>چرا زی هوم؟ </span>
      </div>
      <br />

      <div className="pl-[108px] pr-[108px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={9}
          slidesPerView={1}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation
          loop
          autoplay={{ delay: 1500 }}
          className="h-[220px] w-full "
          style={{
            "--swiper-navigation-size": "0px",
          }}
        >
          <SwiperSlide>
            <div className=" border-b-2 border-b-neutral-400 rounded-2xl">
              <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
                <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                  <Truck className="!w-[80px] !h-[80px] stroke-neutral-400" />
                  <div>
                    <span>ارسال سریع و آسان</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-b-2 border-b-neutral-300 rounded-2xl">
              <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
                <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                  <Support className="!w-[80px] !h-[80px] stroke-neutral-400" />
                  <div>
                    <span>پشتیبانی سریع و تخصصی </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-b-2 border-b-neutral-300 rounded-2xl">
              <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
                <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                  <CreditCards className="!w-[80px] !h-[80px] stroke-neutral-400" />
                  <div>
                    <span> امکان خرید اقساطی</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-b-2 border-b-neutral-300 rounded-2xl">
              <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
                <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                  <MedalReward className="!w-[80px] !h-[80px] stroke-neutral-400" />
                  <div>
                    <span> تخفیفات و پیشنهادات ویژه</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-b-2 border-b-neutral-300 rounded-2xl">
              <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
                <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                  <LoveEmoji className="!w-[80px] !h-[80px] stroke-neutral-400" />
                  <div>
                    <span> خریدی به صرفه </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-b-2 border-b-neutral-300 rounded-2xl">
              <div className="  border min-w-[288px] min-h-[218px] border-neutral-200 rounded-2xl  pt-6 pb-6 pl-4 pr-4 flex flex-col   justify-center items-center">
                <div className="flex flex-col justify-center items-center text-20 whitespace-nowrap stroke-[80px]">
                  <Goal className="!w-[80px] !h-[80px] stroke-neutral-400" />
                  <div>
                    <span>دقیق و کار امد!</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <br />
      <br />
      <div className="pl-[318px] pr-[318px]">
        <img src={mapBanner} />
      </div>
      <div className="flex flex-col pl-[108px] pr-[108px] gap-3">
        <div className="text-[16px] font-bold flex flex-col gap-2 justify-start">
          <span className="text-neutral-950 ">اهداف زی هوم</span>
          <div className="text-neutral-500 flex flex-col gap-4">
            <p>
              مأموریت ما در زی هوم، فراتر از فروش محصولات است. ما می‌خواهیم به
              شما کمک کنیم تا خانه‌ای بسازید که بازتابی از سلیقه و سبک زندگی‌تان
              باشد. برای ما مهم است که هر گوشه از خانه‌تان حس خوبی به شما بدهد؛
              از انتخاب رنگ‌ها و بافت‌ها گرفته تا هماهنگی مبلمان و اکسسوری‌ها.
            </p>
            <p>
              ما به دنبال این هستیم که خرید لوازم خانه را به تجربه‌ای ساده،
              دلنشین و بدون دغدغه تبدیل کنیم. به همین دلیل، خدمات پشتیبانی قوی،
              ارسال سریع و ضمانت کیفیت را در دستور کار خود قرار داده‌ایم. شما
              می‌توانید با خیال راحت خرید کنید، چون ما به کیفیت محصولاتمان
              اطمینان داریم.
            </p>
          </div>
        </div>

        <div className="text-[16px] font-bold  flex flex-col justify-start gap-2">
          <span className="text-neutral-950 ">چشم انداز زی هوم</span>
          <div className="text-neutral-500 flex flex-col gap-4">
            <p>
              ما در زی هوم، فراتر از یک فروشگاه آنلاین هستیم؛ ما به دنبال این
              هستیم که خانه‌ی شما را به فضایی آرام، زیبا و منحصربه‌فرد تبدیل
              کنیم. هدف ما این است که زی هوم به انتخاب اول و مورد اعتماد شما
              برای خرید لوازم خانه تبدیل شود. ما معتقدیم که خرید برای خانه نباید
              صرفاً یک کار روزمره و خسته‌کننده باشد؛ بلکه باید تجربه‌ای
              هیجان‌انگیز، دلنشین و الهام‌بخش باشد. وقتی شما محصولی از زی هوم
              انتخاب می‌کنید، در واقع بخشی از شخصیت و سبک زندگی خود را به خانه
              می‌آورید و ما این فرصت را افتخار بزرگی برای خود می‌دانیم.
            </p>
            <p>
              ما به آینده‌ای فکر می‌کنیم که در آن، هر خانه به واسطه‌ی محصولات زی
              هوم، به فضایی گرم، صمیمی و زیبا تبدیل شود. چشم‌انداز ما این است که
              ترکیبی از زیبایی، کیفیت و راحتی را برای شما به ارمغان بیاوریم. ما
              به‌طور مداوم به دنبال بهبود محصولات، به‌روزرسانی طراحی‌ها و
              ارائه‌ی جدیدترین ترندهای دکوراسیون داخلی هستیم تا خانه‌ی شما همیشه
              به‌روز و هماهنگ با سبک زندگی‌تان باشد. ما باور داریم که هر گوشه از
              خانه، باید بازتابی از حس خوب و آرامش درونی شما باشد.
            </p>
            <p>
              برای ما، موفقیت تنها در فروش محصولات خلاصه نمی‌شود؛ بلکه رضایت و
              لبخند شما پس از تحویل سفارش، مهم‌ترین دستاورد ماست. به همین دلیل،
              ما تلاش می‌کنیم تا با ارائه‌ی خدمات حرفه‌ای، ارسال سریع، پشتیبانی
              قوی و ضمانت کیفیت، تجربه‌ای بی‌نقص از خرید آنلاین را برای شما
              فراهم کنیم. زی هوم فقط یک فروشگاه نیست؛ ما در کنار شما هستیم تا
              خانه‌ی رؤیایی‌تان را به واقعیت تبدیل کنیم. این مسیر را با هم طی
              می‌کنیم، چرا که باور داریم زیبایی و آرامش، حق شماست.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
