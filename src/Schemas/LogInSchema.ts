import * as yup from "yup";

const logInSchema = yup.object().shape({
  email: yup.string().required("Email Obrigatório").email("Email Inválido"),
  password: yup.string().required("Senha Obrigatória"),
});

export default logInSchema;
