import styled from "styled-components";
import { Grid } from "../../styles/Grid";

export const Container = styled.section`
  margin-top: -9rem;
`;

export const Content = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  ${Grid} {
    gap: 4rem;
  }

  header {
    padding: 2rem 0;

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        color: var(--body-color);
        font-weight: 700;
      }
    }

    h2 {
      color: var(--body-color);
      margin-bottom: -1.4rem;
    }
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    margin-bottom: 4.5rem;

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

      :nth-child(3) {
        width: 40px;

        font-size: 0.9rem;
        font-weight: 700;

        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;

        border-top-left-radius: 0;
        border-bottom-left-radius: 0;

        color: #f40404;

        cursor: pointer;

        :hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
