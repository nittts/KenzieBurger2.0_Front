import { RegisterContainer as Container, RegisterContent } from "./styles";
import Input from "../../Components/Input";
import { FaLock, FaLockOpen, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/Authorization";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import registerSchema from "../../Schemas/RegisterSchema";
import API from "../../Services/API";
import { useToast } from "@chakra-ui/react";

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

export default function RegisterContainer() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<RegisterData>({ resolver: yupResolver(registerSchema) });

  const handleLogIn = ({ name, email, password }: RegisterData) => {
    API.post("/register", { name, email, password })
      .then((res) => {
        toast({
          title: "Conta criada! ^^",
          description: "Criamos sua conta com sucesso, proceda para realizar login.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login");
      })
      .catch((err) => {
        toast({
          title: "Falha ao criar a conta, corrija seus dados",
          description: "Houve um erro ao registrar, tente novamente.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Container>
      <RegisterContent>
        <div className="heading">
          <h2>Login</h2> <button onClick={() => navigate("/login")}>Retornar para o login</button>
        </div>
        <form className="ipt-container" onSubmit={handleSubmit(handleLogIn)}>
          <Input
            label="Nome"
            placeholder="Insira seu nome..."
            error={errors.name}
            {...register("name")}
          />
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
            placeholder="Insira sua senha..."
            type={showPassword ? "text" : "password"}
            icon={showPassword ? FaLockOpen : FaLock}
            setShowPassword={setShowPassword}
            showPassword={showPassword}
            error={errors.password}
            {...register("password")}
          />
          <Input
            label="Confirmar Senha"
            placeholder="Confirme sua senha..."
            type={showPassword ? "text" : "password"}
            icon={showPassword ? FaLockOpen : FaLock}
            setShowPassword={setShowPassword}
            showPassword={showPassword}
            error={errors.confirm_password}
            {...register("confirm_password")}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </RegisterContent>
    </Container>
  );
}
