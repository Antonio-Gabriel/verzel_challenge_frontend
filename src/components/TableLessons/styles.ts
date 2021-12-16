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

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 700;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #fff;
      color: var(--text-body);

      box-shadow: 0 15px 38px rgba(71, 70, 70, 0.021);
      border-radius: 0.3rem;

      &:first-child {
        color: var(--primary-color);
      }
    }
  }

  .accordions {
    ${Grid} {
      gap: 0.6rem;
    }
  }
`;
