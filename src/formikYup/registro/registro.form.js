import * as Yup from "yup";

export function initialValues() {
  return  {
    Nombre: "",
    Apellido: "",
    Username: "",
    UserPlan: "Gratis",
    UserRole: "Cliente",
    email: "",
    password: "",
    Img_url:"",
    Cargo: "",
    Empresa: ""
  };
}

export function validationSchema() {
  return Yup.object({
    Nombre: Yup.string().required(true),
    Apellido: Yup.string().required(true),
    Username: Yup.string().required(true),
    email: Yup.string().required(true),
    password: Yup.string().required(true),
  });
}