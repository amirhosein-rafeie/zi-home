// import { useContext, useEffect } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useNavigate } from "react-router-dom";

// const schema = yup.object({
//   username: yup.string().required("Username is required"),
//   password: yup
//     .string()
//     .min(4, "Bitarbiat Password must be at least 4 characters")
//     .required("Password is required"),
// });

// function LoginForm() {
//   const { login, loginError, isLoading, token } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   useEffect(() => {
//     if (token) {
//       navigate("/dashboard");
//     }
//   }, [token, navigate]);

//   const onSubmit = async (data) => {
//     const success = await login(data.username, data.password);
//     if (success) {
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               type="password"
//               {...register("password")}
//               placeholder="Enter your password"
//               disabled={isLoading}
//             />
//             {errors.password && (
//               <p className="error-message">{errors.password.message}</p>
//             )}
//           </div>

//           {loginError && <p className="error-message">{loginError}</p>}

//           <button type="submit" disabled={isLoading} className="submit-button">
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;
import React from "react";
import { useSelector } from "react-redux";

export default function PasswordPage() {
  const { phoneNumber } = useSelector((state) => state.auth);

  return <div>{phoneNumber}</div>;
}
