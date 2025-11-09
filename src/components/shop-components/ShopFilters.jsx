import { ArrowDown1, KKK } from "@/assets/icons/theIcons/myIcons";
import { categories } from "@/data/categories";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Slider,
  Switch,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ShopFilters = ({ onClose }) => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="w-[288px] h-[460px] rounded-2xl p-6 flex-col border border-neutral-200 text-neutral-900">
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300">
        <span>فیلتر ها</span>
        <KKK onClick={onClose} className="cursor-pointer" />
      </div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300">
        <div>
          <Accordion sx={{ boxShadow: "none", border: `none`, width: `full` }}>
            <AccordionSummary
              expandIcon={
                <ArrowDown1 className="!w-10 !h-10 stroke-neutral-900" />
              }
            >
              <Typography component="span">دسته بندی</Typography>
            </AccordionSummary>
            <AccordionDetails className="grid grid-cols-2 gap-3">
              {categories.map((item) => {
                return <Button variant="outlined">{item.label}</Button>;
              })}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300">
        <div>
          <Accordion sx={{ boxShadow: "none", border: `none`, width: `100%` }}>
            <AccordionSummary
              expandIcon={
                <ArrowDown1 className="!w-10 !h-10 stroke-neutral-900" />
              }
            >
              <Typography component="span">محدوده قیمت</Typography>
            </AccordionSummary>
            <AccordionDetails className="grid grid-cols-2 gap-3">
              <Box sx={{ width: 160 }}>
                <Slider
                  getAriaLabel={() => "Minimum distance"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  disableSwap
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300">
        <div>
          <Accordion sx={{ boxShadow: "none", border: `none`, width: `full` }}>
            <AccordionSummary
              expandIcon={
                <ArrowDown1 className="!w-10 !h-10 stroke-neutral-900" />
              }
            >
              <Typography component="span">برند </Typography>
            </AccordionSummary>
            <AccordionDetails className="grid grid-cols-2 gap-3">
              {categories.map((item) => {
                return (
                  <Button variant="outlined" className="whitespace-nowrap">
                    {item.brand}
                  </Button>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300 bg-white">
        <span>فقط کالا های موجود</span>
        <Switch color="primary" />
      </div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300 bg-white">
        <span>کالاهای تخفیف دار</span>
        <Switch color="primary" />
      </div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300 bg-white">
        <span>ارسال امروز</span>
        <Switch color="primary" />
      </div>
    </div>
  );
};

export default ShopFilters;
