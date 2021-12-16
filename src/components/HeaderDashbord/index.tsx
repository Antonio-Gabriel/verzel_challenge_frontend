import { useAuthentication } from "../../hooks/useAuthentication";

import {
  Logo,
  Button,
  Container,
  NavigationItem,
  NavigationLink,
  NavigationMenu,
} from "./styles";

export function HeaderDashboard() {
  const { signOut } = useAuthentication();

  return (
    <Container>
      <header>
        <Logo to="#">Verzel</Logo>
        <nav className="navigation">
          <NavigationMenu>
            <NavigationItem>
              <NavigationLink exact to="/dashboard" activeClassName="is_active">
                Dashboard
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink exact to="/modules" activeClassName="is_active">
                Criar Módulos
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink exact to="/lessons" activeClassName="is_active">
                Adicionar aulas
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink exact to="/profile" activeClassName="is_active">
                Meu perfil
              </NavigationLink>
            </NavigationItem>
          </NavigationMenu>
        </nav>
        <div className="buttons">
          <Button to="/dashboard" onClick={signOut}>
            Terminar sessão
          </Button>
        </div>
      </header>
    </Container>
  );
}
