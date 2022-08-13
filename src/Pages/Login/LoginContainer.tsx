import { LoginContainer as Container, LoginContent } from "./styles";
import Input from "../../Components/Input";
import { FaLock, FaLockOpen, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/Authorization";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import logInSchema from "../../Schemas/LogInSchema";

export interface logInData {
  email: string;
  password: string;
}

export default function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { signIn } = useAuth();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<logInData>({ resolver: yupResolver(logInSchema) });

  const handleLogIn = (data: logInData) => {
    console.log(data);
    const { email, password } = data;
    signIn(email, password)
      .then((res) => navigate("/dashboard"))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <LoginContent>
        <h2>Login</h2>
        <form className="ipt-container" onSubmit={handleSubmit(handleLogIn)}>
          <Input
            label="Email"
            placeholder="Insira seu Email..."
            icon={FaUser}
            setShowPassword={setShowPassword}
            error={errors.email}
            {...register("email")}
          />
          <Input
            label="Senha"
            placeholder="Insira sua senha"
            type={showPassword ? "text" : "password"}
            icon={showPassword ? FaLockOpen : FaLock}
            setShowPassword={setShowPassword}
            showPassword={showPassword}
            error={errors.password}
            {...register("password")}
          />
          <button>Logar</button>
          <p>
            Crie sua conta para saborear muitas delicias e <br /> matar sua fome!
          </p>
          <button onClick={() => navigate("/register")}>Cadastrar</button>
        </form>
      </LoginContent>
    </Container>
  );
}
