import { ToastProps } from "@chakra-ui/react";
import { Container, Container2 } from "./StyledToastBase";

interface IChakraToastProps extends ToastProps {
  title?: string;
  description?: string;
  variation?: string;
}

export default function ChakraToast({ title, description, variation, ...rest }: IChakraToastProps) {
  return (
    <Container>
      <h1>teste</h1>
    </Container>
  );
}
