import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import { Input } from "../Input";
import { IAuthentication } from "../../types/IAuthentication";

import { Container, Content, Form, Header } from "./styles";
import { Button } from "../Button";

export function HeroAuth() {
  let history = useHistory();

  const [data, setData] = useState<IAuthentication>({
    email: "",
    password: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function handleAuthUser(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Content>
        <div className="text">
          <h1>Faça login para continuar navegar na plataforma</h1>
          <p>Bom ter você de volta</p>
        </div>
        <div className="auth">
          <div className="card">
            <Header>
              <h2>Fazer Login</h2>
            </Header>

            <Form autoComplete="off">
              <Input
                name="email"
                value={data.email}
                onChange={handleInputChange}
                placeholder="Email address"
                type="email"
                required
              />
              <Input
                name="password"
                value={data.password}
                onChange={handleInputChange}
                placeholder="Password"
                isPassword
                type="password"
                required
              />

              <Button text="Entrar" width={100} height={4} />
            </Form>
          </div>
        </div>
      </Content>
    </Container>
  );
}
