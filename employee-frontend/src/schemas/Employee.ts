import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  dept: yup.string().required("Department is required"),
  active: yup.boolean(),
  number: yup
    .number()
    .required("Employee number is required")
    .min(0, "Number must be positive"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  address: yup
    .string()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters"),
  photo: yup.mixed().required("Photo is required"),
});
