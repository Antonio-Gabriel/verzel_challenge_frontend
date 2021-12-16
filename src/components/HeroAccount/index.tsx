import { ChangeEvent, useState } from "react";

import { IUserAccount } from "../../types/IUserAccount";
import { Input } from "../Input";
import { Button } from "../Button";

import { Container, Content, Form, Header } from "./styles";

export function HeroAccount() {
  const [data, setData] = useState<IUserAccount>({
    username: "",
    email: "",
    password: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Container>
      <Content>
        <div className="text">
          <h1>Crie uma conta para poder navegar na plataforma</h1>
          <p>Bom ter você de volta</p>
        </div>
        <div className="auth">
          <div className="card">
            <Header>
              <h2>Criar conta</h2>
            </Header>

            <Form autoComplete="off">
              <Input
                name="username"
                value={data.username}
                onChange={handleInputChange}
                placeholder="Username"
                type="email"
                required
              />
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
