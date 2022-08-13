import {
  Dispatch,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";
import { logInData } from "../../Pages/Login/LoginContainer";
import { Container, Error, InputContainer, Label } from "./styles";

type InputVariationOptions = {
  [key: string]: string;
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
  setShowPassword?: Dispatch<SetStateAction<boolean>>;
  showPassword?: boolean;
}

const InputVariation: InputVariationOptions = {
  error: "var(--negative)",
  default: "gray",
  focus: "var(--info)",
  filled: "var(--success)",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error = null, icon: Icon, label, setShowPassword, showPassword, name, ...rest },
  ref
) => {
  const [variation, setVariation] = useState("default");
  const [value, setValue] = useState("");
  const [hideIcon, setHideIcon] = useState(false);

  useEffect(() => {
    if (error) {
      setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    setHideIcon(true);
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      setVariation("filled");
    }
    setHideIcon(false);
  }, [error, value]);

  return (
    <Container>
      {!!label && <Label>{label}</Label>}
      <InputContainer borderColor={InputVariation[variation]} color={InputVariation[variation]}>
        <input
          name={name}
          placeholder={rest.placeholder}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={(e) => setValue(e.currentTarget.value)}
          ref={ref}
          {...rest}
        />
        {!hideIcon && Icon && (
          <Icon
            color={InputVariation[variation]}
            onClick={() => setShowPassword?.(!showPassword)}
          />
        )}
      </InputContainer>
      {!!error && <Error>{error.message}</Error>}
    </Container>
  );
};

const Input = forwardRef(InputBase);

export default Input;
