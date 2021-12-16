import { ChangeEvent, SyntheticEvent, useState } from "react";
import { IModules } from "../../types/IModules";

import { Form } from "../HeroAuth/styles";
import { Input } from "../Input";
import { toast } from "react-toastify";
import { Container, Content } from "./styles";

export function ContentModules() {
  const [data, setData] = useState<IModules>({
    id: 0,
    name: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function handleCreateModule(event: SyntheticEvent) {
    event.preventDefault();

    if (!data.name) {
      toast.error("Preencha o campo módulo para registrar!");

      return;
    }

    
  }

  return (
    <Container>
      <Content>
        <header>
          <div className="content">
            <h2>Módulos</h2>
          </div>

          <Form autoComplete="off" onSubmit={handleCreateModule}>
            <Input
              name="name"
              value={data.name}
              onChange={handleInputChange}
              placeholder="Cadastre um módulo"
              type="text"
            />

            <div className="buttons">
              <button type="submit">Cadastrar</button>
              <button type="button"> Actualizar</button>
            </div>
          </Form>
        </header>

        <table>
          <thead>
            <tr>
              <th>Módulo</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conceito de sistemas</td>
              <td>Editar</td>
              <td>Deletar</td>
            </tr>
            <tr>
              <td>Data</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
