import { ChangeEvent, SyntheticEvent, useState } from "react";

import { Input } from "../Input";
import { Button } from "../Button";
import { toast } from "react-toastify";

import { IAuthentication } from "../../types/IAuthentication";
import { useAuthentication } from "../../hooks/useAuthentication";

import { Container, Content, Form, Header } from "./styles";

export function HeroAuth() {
  const { signIn, user } = useAuthentication();

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

  async function handleAuthUser(event: SyntheticEvent) {
    event.preventDefault();

    try {
      await signIn({
        email: data.email,
        password: data.password,
      })
        .then((_) => {
          if (user) {
            toast.success("Welcome");

            console.clear();
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            toast.error("Usuário ou senha errada!.");

            console.clear();

            return;
          }
        });
    } catch (error) {
      toast.error("Ocorreu um erro");
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

            <Form autoComplete="off" onSubmit={handleAuthUser}>
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
