import notfound from "@/assets/images/404.png";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }
  return (
    
      <div className="flex flex-col justify-center items-center pt-20">
        <div className="flex">
          <img src={notfound} width={690} />
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-2xl">خطا 404!</h1>
            <h2>صفحه یافت نشد</h2>
            <p>این صفحه وجود ندارد یا حذف شده است</p>
          </div>
          <div>
            <button
              onClick={goHome}
              className="bg-primary-600 rounded-xl w-[183px] h-10 text-white border-none"
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default NotFound;
