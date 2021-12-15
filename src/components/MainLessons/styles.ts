import styled from "styled-components";
import { Grid } from "../../styles/Grid";

export const Container = styled.div`
  padding: 4.5rem 0;
`;

export const Content = styled.main`
  max-width: 1140px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1rem;
`;

export const Modules = styled.div`
  padding: 2rem 1.4rem;

  ${Grid} {
    gap: 1rem;
  }

  .text {
    h2 {
      margin-bottom: 0.6rem;
      font-size: 2rem;
    }

    p {
      line-height: 1.2rem;
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }

  .modules-list {
    ${Grid} {
      gap: 0.5rem;
    }
  }
`;

export const Lessons = styled.div`
  background-color: #fff;
  border-radius: 8px;

  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;

  .text {
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 0.6rem;
      font-size: 2rem;
    }

    p {
      line-height: 1.2rem;
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }

  .lessons-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(280px, auto);
    gap: 1rem;
  }
`;
