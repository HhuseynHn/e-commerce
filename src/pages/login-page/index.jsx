/** @format */

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../scheme/login-validation";

export function LoginPage() {
  const handleSubmit = (values) => {
    console.log("Form data", values);
  };

  const formik = useFormik({
    initialValues: {
      email: "example@email.com",
      password: "Password123",
    },
    validationSchema: loginValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="flex justify-center mb-[50px]">
        <form className="flex max-w-md w-[300px] flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <p className="text-red-600">Error email</p>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <p className="text-red-600">Error password</p>

          <button
            type="submit"
            className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 bg-black">
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
