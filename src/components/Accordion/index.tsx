import { useState } from "react";
import { IModules } from "../../types/IModules";
import { Container } from "./styles";

export function Accordion({ id, name, lessons }: IModules) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container key={id} onClick={() => setIsActive(!isActive)}>
      <div className="accordion-title">
        <strong>{name}</strong>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && (
        <div className="accordion-content">
          <ul>
            {!!lessons.length ? (
              // eslint-disable-next-line array-callback-return
              lessons.map(({ name, start_date, id }) => (
                <li key={id}>
                  <strong>{name}</strong>
                  <span>{start_date}</span>
                </li>
              ))
            ) : (
              <li>
                <strong>Sem aulas</strong>
                <span></span>
              </li>
            )}
          </ul>
        </div>
      )}
    </Container>
  );
}
