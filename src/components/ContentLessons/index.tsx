import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";

import { Form } from "../HeroAuth/styles";
import { Input } from "../Input";
import { toast } from "react-toastify";

import { ILessons } from "../../types/ILessons";
import { IModules } from "../../types/IModules";

import { Container, Content, Select } from "./styles";
import { GetAllModulesWithLessons } from "../../services/modulesService";
import {
  createLessons,
  deleteLessons,
  GetAllLessons,
  updateLessons,
} from "../../services/lessonsService";

export function ContentLessons() {
  const [modules, setModules] = useState<IModules[]>([]);
  const [lessons, setLessons] = useState<ILessons[]>([]);

  const [data, setData] = useState<ILessons>({
    id: 0,
    name: "",
    start_date: "",
    module: 0,
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    setData({ ...data, module: Number(event.target.value) });
  }

  useEffect(() => {
    GetAllModulesWithLessons().then((data) => setModules(data));
    GetAllLessons().then((data) => setLessons(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleCreateLesson(event: SyntheticEvent) {
    /// Create Module
    event.preventDefault();

    //console.log(data);

    try {
      if (!data.name || !data.start_date) {
        toast.error("Preencha o campo módulo para registrar!");

        return;
      }

      await createLessons(data)
        .then((response) => {
          if (response.id) {
            setData({
              id: 0,
              name: "",
              start_date: "",
              module: 0,
            });

            toast.success("Aula criada com sucesso");

            GetAllLessons().then((data) => setLessons(data));
            GetAllModulesWithLessons().then((data) => setModules(data));
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.error("Dados inválidos!");

            console.clear();

            return;
          }

          toast.error("Erro!, tente mais tarde");
        });
    } catch (error) {
      toast.error("Erro!, tente mais tarde");
    }
  }

  async function handleUpdateLesson(event: SyntheticEvent) {
    /// Updata Module

    event.preventDefault();

    try {
      if (!data.name) {
        toast.error("Preencha o campo módulo para registrar!");

        setData({
          id: 0,
          name: "",
          start_date: "",
          module: 0,
        });

        return;
      }

      if (data.id !== 0) {
        await updateLessons(data)
          .then((response) => {
            if (response.id) {
              setData({
                id: 0,
                name: "",
                start_date: "",
                module: 0,
              });

              toast.success("Aula actualizada com sucesso!");

              GetAllLessons().then((data) => setLessons(data));
            }
          })
          .catch((error) => {
            if (error.response.status === 400) {
              toast.error("Dados inválidos!");

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

  function handlerDeleteLesson(id: number) {
    /// Delete Module
    // eslint-disable-next-line no-restricted-globals
    const message = confirm("Desejas deletar este módulo?");
    if (message) {
      deleteLessons(Number(id))
        .then((_) => {
          toast.success("Módulo eliminado com sucesso!");

          GetAllLessons().then((data) => setLessons(data));
        })
        .catch((_) => {
          console.clear();
          toast.error("Erro!, tente mais tarde");
        });
    }
  }

  function handleChangeCurrentModuleByLesson(id: number) {
    setModules(modules.filter((data) => data?.id === id));

    const selectElement = document.getElementById("select-module");

    if (selectElement?.firstChild?.textContent === "Selecione o módulo") {
      selectElement?.removeChild<HTMLSelectElement>(
        selectElement.firstChild as any
      );
    }

    GetAllModulesWithLessons().then((data) => setModules(data));
  }

  return (
    <Container>
      <Content>
        <header>
          <div className="content">
            <h2>Nossas aulas</h2>
            <span>Total de aulas ({lessons.length})</span>
          </div>

          <Form autoComplete="off" onSubmit={handleCreateLesson}>
            <Input
              name="name"
              value={data.name}
              onChange={handleInputChange}
              placeholder="Nome da aula"
              type="text"
            />
            <Select
              name="modulo"
              onChange={handleSelectChange}
              id="select-module"
            >
              <option>Selecione o módulo</option>
              {modules.map((module) => (
                <option value={module.id} key={module.id}>
                  {module.name}
                </option>
              ))}
            </Select>

            <Input
              name="start_date"
              value={data.start_date}
              onChange={handleInputChange}
              placeholder="Data de início"
              type="date"
            />

            <div className="buttons">
              <button type="submit">Cadastrar</button>
              <button type="button" onClick={handleUpdateLesson}>
                Actualizar
              </button>
            </div>
          </Form>
        </header>

        <table>
          <thead>
            <tr>
              <th>Aula</th>
              <th>Data de início</th>

              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!!lessons.length ? (
              lessons.map((lesson) => (
                <tr key={lesson.id}>
                  <td>{lesson.name}</td>
                  <td>{lesson.start_date}</td>
                  <td
                    onClick={() => {
                      handleChangeCurrentModuleByLesson(Number(lesson.module));

                      setData({
                        id: lesson.id,
                        name: lesson.name,
                        start_date: lesson.start_date,
                        module: lesson.module,
                      });
                    }}
                  >
                    Editar
                  </td>
                  <td onClick={() => handlerDeleteLesson(Number(lesson.id))}>
                    Deletar
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Sem aulas</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
