import { useEffect, useState } from "react";
import { Card } from "../Card";
import { GetAllUsers } from "../../services/userService";
import { GetAllLessons } from "../../services/lessonsService";
import { Container, Content } from "./styles";
import { GetAllModulesWithLessons } from "../../services/modulesService";

export function Cards() {
  const [lesson, setlesson] = useState(0);
  const [module, setmodule] = useState(0);
  const [users, setusers] = useState(0);

  useEffect(() => {
    GetAllLessons().then((response) => {
      setlesson(response.length);
    });

    GetAllModulesWithLessons().then((response) => {
      setmodule(response.length);
    });

    GetAllUsers().then((response) => {
      setusers(response.length);
    });
  }, []);

  return (
    <Container>
      <Content>
        <Card title="Módulos" total={module} />
        <Card title="Aulas" total={lesson} />
        <Card title="Usuários" total={users} />
      </Content>
    </Container>
  );
}
