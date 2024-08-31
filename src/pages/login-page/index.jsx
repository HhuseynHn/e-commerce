/** @format */

import { useFormik } from "formik";
import { loginValidationSchema } from "../../scheme/login-validation";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage(props) {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(true);
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
      } else {
        console.log("Dogru deyil");
      }
    },
  });

  let homPge = "<< Got to Home";
  let logPage = "Go to Login >>";
  // formik.handleSubmit;
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Hello");
        }}>
        <div className=" flex gap-x-2 justify-center mb-80">
          <Button className="border border-cyan-300 bg-white text-cyan-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-100 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700">
            <Link to="/home">{homPge} </Link>
          </Button>
          <Button
            className="border border-cyan-300 bg-white text-cyan-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-100 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700"
            onClick={() => setOpenModal(true)}>
            {logPage}
          </Button>
        </div>
        <Modal
          show={openModal}
          size="md"
          popup
          onClose={() => setOpenModal(false)}
          initialFocus={emailInputRef}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {t("Sign in to our platform")}
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value={t("Your email")} />
                </div>
                <TextInput
                  id="email"
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
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value={t("Your password")} />
                </div>
                <TextInput
                  id="password"
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
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">{t("Remember me")}</Label>
                </div>
                <a
                  href="#"
                  className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                  {t("Lost Password?")}
                </a>
              </div>
              <div className="w-full">
                <Button
                  type="submit"
                  className="border border-cyan-300 bg-white text-cyan-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-100 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700">
                  {t("Log in to your account")}
                </Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                {t("Not registered?")}&nbsp;
                <a
                  href="#"
                  className="text-cyan-700 hover:underline dark:text-cyan-500">
                  {t("Create account")}
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </form>

      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            name="email"
            ref={emailInputRef}
            placeholder="name@company.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        <TextInput
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
        )}

        <button type="submit">OKK</button>

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
    </>
  );
}

export default withTranslation()(LoginPage);
