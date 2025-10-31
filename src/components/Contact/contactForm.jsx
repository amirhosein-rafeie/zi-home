import { Button } from "@mui/material";
import {
  Call,
  Download,
  EmailLetterStyle2,
  Instagram,
  Linkedin,
  MarkerPin1,
  Support,
  Twitter,
  Youtube,
} from "../../assets/icons/theIcons/myIcons";
import Leaflet from "./Leaflet";

const ContactForm = () => {
  return (
    <div className="pl-[108px] pr-[108px]">
      <div className="flex flex-col ">
        <div className="text-[20px] text-neutral-950 flex justify-start font-bold">
          <span>چرا زی هوم؟ </span>
        </div>
        <div className="flex justify-between">
          <span>
            لطفا قبل از تماس یا ارسال ایمیل، ابتدا
            <span className=" text-primary-600 cursor-pointer hover:bg-primary-600 hover: rounded-4xl hover:text-white">
              سوالات متداول
            </span>
            را مشاهده کنید
          </span>
          <div>
            <Button
              variant="outlined"
              className="text-primary-600 border-primary-600 active:bg-primary-600 active:text-white rounded-[8px]"
            >
              سوالات متداول
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="mozo">
            موضوع <span className="text-primary-600">*</span>
          </label>
          <input
            type="text"
            name="mozo"
            className="p-2 max-w-[1/2] max-h-12 border rounded-[8px] border-neutral-300 active:outline-primary-400 focus:outline-primary-600"
            placeholder="موضوع خود را انتخاب کنید"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="serialNumber">شماره سفارش</label>
          <input
            type="number"
            name="serialNumber"
            className="p-2 max-w-[1/2] max-h-12 border rounded-[8px] border-neutral-300 active:outline-primary-400 focus:outline-primary-600"
            placeholder="123456789"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">
            نام و نام خانوادگی <span className="text-primary-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="p-2 max-w-[1/2] max-h-12 border rounded-[8px] border-neutral-300 active:outline-primary-400 focus:outline-primary-600"
            placeholder="امیرستایش خرم دل کفیلی اول"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">
            ایمیل <span className="text-primary-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="p-2 max-w-[1/2] max-h-12 border rounded-[8px] border-neutral-300 active:outline-primary-400 focus:outline-primary-600"
            placeholder="salammandeveloperam@gmail.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="number">
            شماره تماس <span className="text-primary-600">*</span>
          </label>
          <input
            type="number"
            name="number"
            className="p-2 max-w-[1/2] max-h-12 border rounded-[8px] border-neutral-300 active:outline-primary-400 focus:outline-primary-600"
            placeholder="09029024555"
          />
        </div>
        <div></div>
      </div>
      <br />
      <div className="flex flex-col ">
        <label htmlFor="payam" className="text-xl font-bold">
          متن پیام
        </label>
        <textarea
          name="payam"
          className="p-2 max-h-[226px] max-w-full border border-neutral-300 rounded-[8px]  active:outline-primary-400 focus:outline-primary-600"
          placeholder="متن پیام خود را بنویسید..."
        ></textarea>
      </div>
      <br />
      <br />
      <div className="p-2 border border-dashed  border-neutral-300 rounded-[8px] max-w-full min-h-[354px] hover:border-primary-400 flex flex-col gap-2 justify-center items-center ">
        <span className="text-neutral-400">
          حداکثر ۵ تصویر حداکثر یک مگابایت،یک ویدیو MP4 حداکثر ۵۰ مگابایت
        </span>
        <Button
          component="label"
          variant="outlined"
          className="hover:text-pink-700 hover:stroke-primary-700"
          color="primary"
        >
          <Download /> افزودن فایل
          <input type="file" hidden />
        </Button>
      </div>
      <br />
      <br />
      <div className="p-2  flex flex-col gap-3 w-full h-[804px] border border-neutral-200 rounded-2xl ">
        <div className="flex flex-col items-center gap-2 pt-10">
          <span className="text-[18px] font-bold text-neutral-950">
            زی هوم، همراه شما تا رسیدن به انتخابی ایده آل
          </span>

          <span className="text-neutral-800 text-[16px]">
            همین حالا با ما در تماس باشید
          </span>

          <span className="flex flex-row-reverse">
            <Call />
            0214412356985
          </span>
        </div>
        <div className=" flex justify-center !items-center">
          <div className="w-270 h-80 border border-neutral-900 rounded-[12px] ">
            <Leaflet />
          </div>
        </div>
        <div className="pl-[110px] pr-[110px] flex flex-col gap-3 justify-start">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row text-neutral-950 stroke-neutral-950 gap-1">
              <Support /> <span>پشتیبانی ۲۴ ساعته</span>
            </div>
            <span>۰۲۱-۲۲۳۳۴۴۵۵ ۰۲۱-۲۲۳۳۴۴۵۵</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row text-neutral-950 stroke-neutral-950 gap-1">
              <EmailLetterStyle2 /> <span>ایمیل</span>
            </div>
            <span>info@zihome.come</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row text-neutral-950 stroke-neutral-950 gap-1">
              <MarkerPin1 /> <span> آدرس شعبه حضوری </span>
            </div>
            <span>تهران، مجتمع تجاری تفریحی ایران مال، طبقه منفی ۳، واحد۳</span>
          </div>
          <div className="relative flex py-5 items-center  ">
            <div className="flex-grow border-t border-gray-100"></div>
          </div>
          <div className="flex flex-row justify-end">
            <div className="flex flex-row gap-10">
              <div>
                <span className="text-[15px] text-neutral-600">
                  شبکه های اجتماعی
                </span>
              </div>
              <div className="flex flex-row gap-1">
                <div>
                  <Youtube className="!w-10 !h-10 stroke-neutral-600" />
                </div>
                <div>
                  <Instagram className="!w-10 !h-10 stroke-neutral-600" />
                </div>
                <div>
                  <Twitter className="!w-10 !h-10 stroke-none fill-neutral-600" />
                </div>
                <div>
                  <Linkedin className="!w-10 !h-10 stroke-neutral-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ContactForm;
