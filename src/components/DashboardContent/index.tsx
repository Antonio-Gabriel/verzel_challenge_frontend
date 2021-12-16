import { useAuthentication } from "../../hooks/useAuthentication";
import { Container, Content } from "./styles";

export function DashboardContent() {
  const { user } = useAuthentication();

  return (
    <Container>
      <Content>
        <header>
          <div className="text">
            <h2>Bem vindo de volta</h2>
            <p>Lista dos módulos e cursos</p>
          </div>

          <div className="user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
            </svg>
            <div className="desc">
              <span>{user.username}</span>
              <p>Admin</p>
            </div>
          </div>
        </header>
      </Content>
    </Container>
  );
}
