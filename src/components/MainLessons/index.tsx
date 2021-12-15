import { Module } from "../Module";
import { Container, Content, Lessons, Modules } from "./styles";

import videoBg from "../../assets/video/meeeting.mp4";

export function Main() {
  return (
    <Container>
      <Content>
        <Modules>
          <header className="text">
            <h2>Módulos</h2>
            <p>Selecione o módulo para ver as aulas disponíveis:</p>
          </header>
          <div className="modules-list">
            <Module title="Conceitos de Sistema e DevOps" totalLessons={1} />
            <Module title="Conceitos de Sistema" totalLessons={1} />
            <Module title="Conceitos de Sistema e DevOps" totalLessons={1} />
            <Module title="Conceitos de Sistema e DevOps" totalLessons={1} />
          </div>
        </Modules>
        <Lessons>
          <header className="text">
            <h2>Projeto Backend</h2>
            <p>Todas as aulas disponíveis nesse módulo:</p>
          </header>
          <div className="lessons-list">
            <div className="lesson-item">
              <header>
                <video src={videoBg} autoPlay loop />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="m9 17 8-5-8-5z"></path>
                </svg>
              </header>

              <div className="description">
                <h3>Introdução ao Curso</h3>
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
                    </svg>
                    <span>02/04/2021</span>
                  </li>
                </ul>

                <button>Assistir Aula</button>
              </div>
            </div>
            <div className="lesson-item">aaa</div>
            <div className="lesson-item">aaa</div>
          </div>
        </Lessons>
      </Content>
    </Container>
  );
}
