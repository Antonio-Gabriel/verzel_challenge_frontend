import { Container } from "./styles";

type ICategoryProps = {
  icon: any;
  text: string;
};

export function Category({ icon, text }: ICategoryProps) {
  return (
    <Container>
      <div className="icon">{icon}</div>
      <span>{text}</span>
    </Container>
  );
}
