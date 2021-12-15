import { Button, Container, Content, HeroDescription } from "./styles";

export function Hero() {
  return (
    <>
      <Container>
        <Content>
          <div className="hero-text">
            <span>PROGRAMANDO SEU FUTURO!</span>
            <h1>Aprenda programação sem pagar nada</h1>
            <p>
              Nossa missão é formar novos desenvolvedores de sistemas (Os
              famosos DEVs) de uma forma fácil e com muito profissionalismo.
            </p>

            <div>
              <Button to="/create-account">Criar Conta</Button>
            </div>
          </div>

          <HeroDescription>
            <li>
              <div className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                </svg>
              </div>
              <article>
                <strong>200</strong>
                <span>Total de aulas</span>
              </article>
            </li>
            <li>
              <div className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"></path>
                </svg>
              </div>
              <article>
                <strong>200</strong>
                <span>Total de módulos</span>
              </article>
            </li>
          </HeroDescription>
        </Content>
      </Container>
    </>
  );
}
