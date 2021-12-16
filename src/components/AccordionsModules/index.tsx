import { useEffect, useState } from "react";

import { IModules } from "../../types/IModules";
import { Accordion } from "../Accordion";
import { Container, Content } from "./styles";
import { GetAllModulesWithLessons } from "../../services/modulesService";

export function AccordionsModules() {
  const [modules, setModules] = useState<IModules[]>([]);

  useEffect(() => {
    GetAllModulesWithLessons().then((data) => setModules(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Content>
        <header>
          <h3>Módulos & aulas</h3>
          <p>Aprecie as aulas registradas e seus módulos</p>
        </header>

        <section className="accordions">
          {modules.map(({ id, lessons, name }) => (
            <Accordion name={name} lessons={lessons} key={id} />
          ))}
        </section>
      </Content>
    </Container>
  );
}
