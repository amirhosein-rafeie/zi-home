import { Typography } from "@mui/material";
import contactBanner from "@/assets/images/contactBanner.png";
import { HomeHouseFavorite } from "@/assets/icons/theIcons/myIcons";
import ContactForm from "@/components/features/contactForm";
import Header from "@/components/home-components/Header";
import Footer from "@/components/home-components/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-cover bg-gradient-to-l from-white via-50% to-black max-w-full ">
        <img src={contactBanner} />
      </div>
      <br />
      <br />
      <div className="pl-[108px] pr-[108px]  flex justify-start pt-20">
        <HomeHouseFavorite className="stroke-primary-600" />
        <Typography variant="h6" color="primary">
          با زی‌هوم در ارتباط باشید
        </Typography>
      </div>
      <div className="pl-[108px] pr-[108px] text-neutral-950">
        <p>
          ما همیشه آماده پاسخگویی به سوالات شما هستیم . اگر درباره محصولات ،
          نحوه خرید ، ارسال سفارش یا هر موضوع دیگری سوالی دارید ، تیم پشتیبانی
          زی هوم در کنار شماست. با ما از طریق فرم تماس زیر تماس بگیرید و همچنین
          میتوانید به آدرس ZIHOME@.com ایمیل بزنید یا از طریق واتس آپ ما در گوشه
          سمت راست پایین این صفحه با ما چت کنید.ما قصد داریم ظرف 1-2 روز کاری به
          شما پاسخ دهیم رضایت شما الویت ماست .
        </p>
      </div>
      <br />
      <ContactForm />
      <br />
      <Footer />
    </div>
  );
};

export default Contact;
