import styled from "styled-components";
import { Grid } from "../../styles/Grid";

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: center;
  align-items: center;

  height: calc(100vh - 4.5rem);

  .text {
    h1 {
      font-size: 3rem;
      font-weight: 700;
      max-width: 31.25rem;

      margin-bottom: 2rem;
    }
  }

  .auth {
    display: flex;
    justify-content: flex-end;

    .card {
      background: var(--primary-color);
      width: 26.5rem;
      height: 28.3125rem;
      border-radius: 8px;

      padding: 0 2.125rem;
    }
  }
`;

export const Header = styled.header`
  margin: 0 !important;
  padding: 0 !important;

  display: flex;
  justify-content: flex-start !important;

  h2 {
    padding-top: 3.125rem;
    font-size: 1.5rem;
    color: var(--body-color);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${Grid} {
    gap: 0.7rem;
  }

  margin-top: 2.75rem;
`;
