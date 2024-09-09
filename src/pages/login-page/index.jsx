/** @format */

import { useFormik } from "formik";
import { loginValidationSchema } from "../../scheme/login-validation";
import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillWarning } from "react-icons/ai";

function LoginPage(props) {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(false);
  const emailInputRef = useRef(null);

  const { t } = props;

  const notify = () =>
    toast.success(t("Successfully"), {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const formik = useFormik({
    initialValues: {
      email: "example@email.com",
      password: "Password123",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      const existUser = { email: "huseyn@email.com", password: "Paswrd123456" };

      if (
        values.email == existUser.email &&
        values.password == existUser.password
      ) {
        notify();
        setTimeout(() => {
          navigate("/home");
        }, 1000);
        {
          setErrorMessage(false);
        }
      } else {
        setErrorMessage(true);
        console.log("Dogru deyil");
      }
    },
  });

  return (
    <>
      <div className=" pt-10 pb-5 bg-gray-100  shadow-inner mb-8 dark:bg-slate-600 mx-auto rounded-xl min-w-72 w-3/12 flex items-center flex-col gap-y-6">
        <h2 className="text-xl font-bold dark:text-white">{t("Login Now")}</h2>
        <form
          action=""
          className="gap-y-7 w-full flex justify-center flex-col items-center"
          onSubmit={formik.handleSubmit}>
          <div className="flex-col w-5/6">
            {errorMessage ? (
              <div className="text-red-500 p-1 rounded-lg text-sm mt-1 flex items-center gap-x-1 bg-red-200">
                <AiFillWarning />
                <p>{t("The email or password is incorrect!!!")}</p>
              </div>
            ) : (
              ""
            )}
            <Label className="block" htmlFor="email" value={t("User name:")} />

            <div>
              <TextInput
                id="email"
                className="w-full"
                name="email"
                ref={emailInputRef}
                placeholder="name@company.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="flex-col w-5/6">
            <Label htmlFor="email" value="Password:" />
            <div className="w-full">
              <TextInput
                id="password"
                className="w-full"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>
          </div>

          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="outlined"
              size="large"
              sx={{ width: "100%", padding: "6px 95px", fontSize: "14px" }}>
              {t("Login")}
            </Button>
          </Stack>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>
      </div>
    </>
  );
}

export default withTranslation()(LoginPage);
