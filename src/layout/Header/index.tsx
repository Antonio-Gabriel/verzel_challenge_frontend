import {
  Button,
  Container,
  Logo,
  NavigationItem,
  NavigationLink,
  NavigationMenu,
} from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <header>
          <Logo to="#">Verzel</Logo>
          <nav className="navigation">
            <NavigationMenu>
              <NavigationItem>
                <NavigationLink exact to="/" activeClassName="is_active">
                  Home
                </NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink to="/course" activeClassName="is_active">
                  Calendário de aulas
                </NavigationLink>
              </NavigationItem>
            </NavigationMenu>

            <div className="buttons">
              <Button to="/create-account">Criar Conta</Button>
              <Button to="/signin">Entrar</Button>
            </div>
          </nav>
        </header>
      </Container>
    </>
  );
}
