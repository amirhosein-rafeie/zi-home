import { Switch } from "@mui/material";

const ShopFilters = () => {
  return (
    <div className="w-[288px] min-h-[460px] rounded-2xl p-6 flex-col border border-neutral-200">
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300"></div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300">
        <div className="faq-section">
          <details className="faq-item">
            <summary> دسته بندی</summary>
          </details>
        </div>
      </div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300">
        <div className="faq-section">
          <details className="faq-item">
            <summary> دسته بندی</summary>
          </details>
        </div>
      </div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300">
        <div className="faq-section">
          <details className="faq-item">
            <summary> دسته بندی</summary>
          </details>
        </div>
      </div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300">
        <span>فقط کالا های موجود</span>
        <Switch color="primary" />
      </div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300">
        <span>کالاهای تخفیف دار</span>
        <Switch color="primary" />
      </div>
      <div className="flex flex-row justify-between p-1 items-center min-h-[50px] w-60 border-b border-neutral-300">
        <span>ارسال امروز</span>
        <Switch color="primary" />
      </div>
    </div>
  );
};

export default ShopFilters;
