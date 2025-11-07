import { setPhoneNumber } from "@/redux/authSlice";
// import { Button, TextField } from "@mui/material";
// import { Field, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { useFormik } from "formik";

export const loginData = [
  { phone: "091212345", pass: "12345" },
  { phone: "091245789", pass: "12345" },
];

export default function LoginPage() {
  const [value, setValue] = useState("");
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },

    validationSchema: yup.object({
      phoneNumber: yup
        .string()
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
    }),
    onSubmit: () => {
      if (loginData.find((e) => e.phone === value)) {
        dispatch(setPhoneNumber(value));
        navigate(`password/${value}`);
      } else {
        alert("شماره تماس یافت نشد");
      }
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (loginData.find((e) => e.phone === value)) {
      dispatch(setPhoneNumber(value));
      navigate(`password/${value}`);
    } else {
      alert("شماره تماس یافت نشد");
    }
  };

  return (
    <div className="w-[496px] h-[407px] flex justify-center items-center bg-pink-200 rounded-2xl pt-12 pb-12 pr-10 pl-10">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-12 justify-center "
      >
        <div>
          <p>ورود|ثبت نام</p>
          <p>درود</p>
        </div>
        <div>
          <label> لطفا شماره موبایل خود را وارد کنید</label>
          <input
            className="border-1 rounded-xl w-[408px] h-[48px]"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="09126996755"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>

        <button
          onClick={handleClick}
          type="submit"
          className="bg-primary-600 rounded-xl h-[48px]"
        >
          تایید
        </button>
        <p>
          با ورود به <span className="text-primary-600">زی هوم</span> شما شرایط
          استفاده و <span className="text-primary-600">قوانین حریم خصوصی</span>{" "}
          ما را میپذیرید
        </p>
      </form>
    </div>

    // <div className="bg-white flex items-center justify-center">
    //   <Formik>
    //     {() => (
    //       <Form>
    //         <Field
    //           value={value}
    //           onChange={(e) => setValue(e.target.value)}
    //           as={TextField}
    //         />
    //         <Button onClick={handleClick}>Login</Button>
    //       </Form>
    //     )}
    //   </Formik>
    // </div>
  );
}
