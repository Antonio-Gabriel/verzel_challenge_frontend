import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem 0;
`;

export const Content = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(200px, auto);

  gap: 1rem;

  margin-top: -8rem;

  > div {
    background: var(--body-color);
    border-radius: 6px;

    box-shadow: 0 15px 38px rgba(71, 70, 70, 0.058);
  }
`;
