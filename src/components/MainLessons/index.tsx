import { useEffect, useState } from "react";

import { IModules } from "../../types/IModules";

import { Module } from "../Module";
import { Lesson } from "../Lesson";

import {
  GetAllModulesWithLessons,
  GetLessonsByModule,
} from "../../services/modulesService";

import { Container, Content, Lessons, Modules } from "./styles";

export function Main() {
  const [modules, setModules] = useState<IModules[]>([]);
  const [lessons, setLessons] = useState<IModules>({} as any);

  useEffect(() => {
    GetAllModulesWithLessons().then((data) => setModules(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function subscribeLessonsResponse(idModule: number) {
    GetLessonsByModule(idModule).then((data) => setLessons(data));
  }

  return (
    <Container>
      <Content>
        <Modules>
          <header className="text">
            <h2>Módulos</h2>
            <p>Selecione o módulo para ver as aulas disponíveis:</p>
          </header>
          <div className="modules-list">
            {!!modules?.length ? (
              modules.map(({ id, name, lessons }) => (
                <Module
                  key={id}
                  title={name}
                  totalLessons={lessons.length}
                  handlerGetLessonByModule={() => subscribeLessonsResponse(id)}
                />
              ))
            ) : (
              <h3>Sem Módulos</h3>
            )}
            <div />
            <div />
          </div>
        </Modules>
        <Lessons>
          <header className="text">
            {lessons.name && (
              <>
                <h2>{lessons.name}</h2>
                <p>Todas as aulas disponíveis nesse módulo:</p>
              </>
            )}
          </header>
          <div className="lessons-list">
            {!!lessons.lessons?.length ? (
              lessons.lessons.map(({ id, name, start_date }) => (
                <Lesson key={id} name={name} start_date={start_date} />
              ))
            ) : (
              <h2>Sem aulas</h2>
            )}
          </div>
        </Lessons>
      </Content>
    </Container>
  );
}
