import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { IModules } from "../../types/IModules";

import { Form } from "../HeroAuth/styles";
import { Input } from "../Input";
import { toast } from "react-toastify";
import { Container, Content } from "./styles";
import {
  createModule,
  deleteModule,
  GetAllModulesWithLessons,
  updateModule,
} from "../../services/modulesService";

export function ContentModules() {
  const [modules, setModules] = useState<IModules[]>([]);

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

  useEffect(() => {
    GetAllModulesWithLessons().then((data) => setModules(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleCreateModule(event: SyntheticEvent) {
    /// Create Module
    event.preventDefault();

    try {
      if (!data.name) {
        toast.error("Preencha o campo módulo para registrar!");

        return;
      }

      await createModule(data)
        .then((response) => {
          if (response.id) {
            setData({
              id: 0,
              name: "",
            });

            toast.success("Conta criada com sucesso");

            GetAllModulesWithLessons().then((data) => setModules(data));
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.error("Módulo já existe");

            console.clear();

            return;
          }

          toast.error("Erro!, tente mais tarde");
        });
    } catch (error) {
      toast.error("Erro!, tente mais tarde");
    }
  }

  async function handleUpdateModule(event: SyntheticEvent) {
    /// Updata Module

    event.preventDefault();

    try {
      if (!data.name) {
        toast.error("Preencha o campo módulo para registrar!");

        setData({
          name: "",
          id: 0,
        });

        return;
      }

      if (data.id !== 0) {
        await updateModule(data)
          .then((response) => {
            if (response.id) {
              setData({
                id: 0,
                name: "",
              });

              toast.success("Módulo actualizada com sucesso!");

              GetAllModulesWithLessons().then((data) => setModules(data));
            }
          })
          .catch((error) => {
            if (error.response.status === 400) {
              toast.error("Módulo já existe");

              console.clear();

              return;
            }

            toast.error("Erro!, tente mais tarde");
          });
      } else {
        toast.error("Erro!, informe um valor verdadeiro!");
      }
    } catch (error) {
      toast.error("Erro!, tente mais tarde");
    }
  }

  function handlerDeleteModule() {
    /// Delete Module

    // eslint-disable-next-line no-restricted-globals
    const message = confirm("Desejas deletar este módulo?");
    if (message) {
      deleteModule(Number(data.id))
        .then((_) => {
          toast.success("Módulo eliminado com sucesso!");

          GetAllModulesWithLessons().then((data) => setModules(data));
        })
        .catch((_) => {
          console.clear();

          toast.error("Erro!, tente mais tarde");
        });
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
              <button type="button" onClick={handleUpdateModule}>
                Actualizar
              </button>
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
            {!!modules.length ? (
              modules.map((module) => (
                <tr key={module.id}>
                  <td>{module.name}</td>
                  <td
                    onClick={() => {
                      setData({
                        id: module.id,
                        name: module.name,
                      });
                    }}
                  >
                    Editar
                  </td>
                  <td
                    onClick={() => {
                      setData({
                        id: module.id,
                        name: "",
                      });

                      handlerDeleteModule();
                    }}
                  >
                    Deletar
                  </td>
                </tr>
              ))
            ) : (
              <>
                <td>Sem módulo</td>
                <td></td>
                <td></td>
              </>
            )}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
