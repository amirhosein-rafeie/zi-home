import { Container, Typography } from "@mui/material";

const FirstNav = () => {
  return (
    <div className="bg-gray-900 ">
      <Container className="bg-gray-900 flex top-0 flex-row justify-between">
        <Typography className="text-[14px] flex justify-start items-center">
          خرید بیش از یک میلیون تومان ارسال رایگان | خدمات رایگان
        </Typography>
        <Typography className="text-[14px] flex justify-end items-center">
          50% تخفیف | فروش بهاره
        </Typography>
      </Container>
    </div>
  );
};

export default FirstNav;
