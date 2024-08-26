/** @format */

import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .max(20, "Password lenght don't be 20 elements")
    .min(8, "Password should have a minimum length of 8 characters")
    .matches(
      /^[a-zA-Z0-9]{8,30}$/,
      "Password can only contain alphanumeric characters"
    )
    .required("Password is required"),
});
