import { Container } from "./styles";

interface IModuleProps {
  title: string;
  totalLessons: number;
  activeModule: boolean;
  handlerGetLessonByModule: () => void;
}

export function Module({
  title,
  totalLessons,
  activeModule,
  handlerGetLessonByModule,
}: IModuleProps) {
  return (
    <Container onClick={handlerGetLessonByModule} isAcvite={activeModule}>
      <div className="left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.999 23V7c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v16l6-3.601 6 3.601z"></path>
          <path d="M15.585 3h1.414c1.103 0 2 .897 2 2v10.443l2 2.489V3c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2h6.586z"></path>
        </svg>
      </div>
      <div className="right">
        <h3>{title}</h3>
        <span>
          {totalLessons}/{totalLessons} aulas
        </span>
      </div>
    </Container>
  );
}
