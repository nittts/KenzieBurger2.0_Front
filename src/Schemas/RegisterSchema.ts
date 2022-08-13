import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatório"),
  email: yup.string().required("Email Obrigatório").email("Email Inválido"),
  password: yup.string().required("Senha Obrigatória").min(6, "minimo de seis caractéres"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha Obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export default registerSchema;
