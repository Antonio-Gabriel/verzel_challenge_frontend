import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

import { IUserAccount } from "../../types/IUserAccount";
import { Input } from "../Input";
import { Button } from "../Button";

import { createUserAccount } from "../../services/userService";
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

  async function handleCreateUserAccount(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      if (!data.email || !data.username || !data.password) {
        toast.error("Preencha devidamente os campos");

        return;
      }

      if (data.password.length < 6) {
        toast.error("Senha precisa conter no mínimo 6 caracteres");

        return;
      }

      await createUserAccount({ ...data, state: true })
        .then((responnse) => {
          if (responnse.id) {
            setData({
              email: "",
              username: "",
              password: "",
            });

            toast.success("Conta criada com sucesso");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.error("Usuário ou email já existe");

            console.clear();

            return;
          }

          toast.error("Erro!, tente mais tarde");
        });
    } catch (error) {
      toast.error("Erro!, tente mais tarde");
    }
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

            <Form autoComplete="off" onSubmit={handleCreateUserAccount}>
              <Input
                name="username"
                value={data.username}
                onChange={handleInputChange}
                placeholder="Username"
                type="text"
              />
              <Input
                name="email"
                value={data.email}
                onChange={handleInputChange}
                placeholder="Email address"
                type="email"
              />
              <Input
                name="password"
                value={data.password}
                onChange={handleInputChange}
                placeholder="Password"
                isPassword
                type="password"
              />

              <Button text="Criar conta" width={100} height={4} />
            </Form>
          </div>
        </div>
      </Content>
    </Container>
  );
}
