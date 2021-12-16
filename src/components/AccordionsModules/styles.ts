import styled from "styled-components";
import { Grid } from "../../styles/Grid";

export const Container = styled.section`
  padding: 3.5rem 0;
`;

export const Content = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  ${Grid} {
    gap: 3rem;
  }

  header {
    ${Grid} {
      gap: 0.7rem;
    }

    h3 {
      font-size: 2rem;
    }
  }

  .accordions {
    ${Grid} {
      gap: 0.3rem;
    }
  }
`;
