import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
  };
}

export const ResetSchema = Yup.object().shape({
  email: Yup.string().email("Email Invalido").required("Required"),
});
