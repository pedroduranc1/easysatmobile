import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email Invalido").required("Required"),
  password: Yup.string().required("Required"),
});
