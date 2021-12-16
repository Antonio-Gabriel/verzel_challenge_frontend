import { Container } from "./styles";

type ICardProps = {
  title: string;
  total: number;
};

export function Card({ title, total }: ICardProps) {
  return (
    <Container className="card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
      >
        <path d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z"></path>
        <path d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z"></path>
      </svg>

      <span>{title}</span>
      <strong>{total}</strong>
    </Container>
  );
}
