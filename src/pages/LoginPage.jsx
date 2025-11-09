import { setPhoneNumber } from "@/redux/authSlice";
import { TextField, Button } from "@mui/material";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";

import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export const loginData = [
  { phoneNumber: "091212345", pass: "12345" },
  { phoneNumber: "091245789", pass: "12345" },
  { phoneNumber: "091956635", pass: "12345" },
];

const initialValues = {
  phoneNumber: "",
};

const validationSchema = yup.object({
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="w-[496px] h-[407px] flex justify-center items-center bg-pink-200 rounded-2xl pt-12 pb-12 pr-10 pl-10">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          if (loginData.find((e) => e.phoneNumber === values.phoneNumber)) {
            dispatch(setPhoneNumber(values.phoneNumber));
            navigate(`password/${values.phoneNumber}`);
            console.log("salam");
          } else {
            alert("شماره تماس یافت نشد");
          }
        }}
        validationSchema={validationSchema}
        className="flex flex-col gap-12 justify-center "
      >
        {(errors, touched) => (
          <Form>
            <div className="flex flex-col gap-3">
              <p>ورود | ثبت نام</p>
              <p>درود</p>
            </div>
            <div className="flex flex-col gap-1">
              <label> لطفا شماره موبایل خود را وارد کنید</label>
              <Field
                name="phoneNumber"
                type="text"
                as={TextField}
                variant="outlined"
                color="black"
                label="phoneNumber"
                fullWidth
                errors={
                  Boolean(errors.phoneNumber) && Boolean(touched.phoneNumber)
                }
                className="border-1 rounded-xl w-[408px] h-[48px]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className="bg-primary-600 rounded-xl h-[48px] w-[408px]"
             
              >
                ثبت
              </Button>
              <p>
                با ورود به <span className="text-primary-600">زی هوم</span> شما
                شرایط استفاده و{" "}
                <span className="text-primary-600">قوانین حریم خصوصی</span> ما
                را میپذیرید
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>

    // <div className="w-[496px] h-[407px] flex justify-center items-center bg-pink-200 rounded-2xl pt-12 pb-12 pr-10 pl-10">
    //   <form
    //     onSubmit={formik.handleSubmit}
    //     className="flex flex-col gap-12 justify-center "
    //   >
    //     <div className="flex flex-col gap-3">
    //       <p>ورود | ثبت نام</p>
    //       <p>درود</p>
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <label> لطفا شماره موبایل خود را وارد کنید</label>
    //       <input
    //         className="border-1 rounded-xl w-[408px] h-[48px]"
    //         id="phoneNumber"
    //         name="phoneNumber"
    //         placeholder="09126996755"
    //         type="text"
    //         onChange={(e) => setValue(e.target.value)}
    //         value={value}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <button
    //         onClick={handleClick}
    //         type="submit"
    //         className="bg-primary-600 rounded-xl h-[48px] w-[408px]"
    //       >
    //         تایید
    //       </button>
    //       <p>
    //         با ورود به <span className="text-primary-600">زی هوم</span> شما
    //         شرایط استفاده و{" "}
    //         <span className="text-primary-600">قوانین حریم خصوصی</span> ما را
    //         میپذیرید
    //       </p>
    //     </div>
    //   </form>
    // </div>
  );
}
