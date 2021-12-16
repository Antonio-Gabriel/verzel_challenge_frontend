import styled from "styled-components";

export const Container = styled.section`
  margin-top: -10rem;
`;

export const Content = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  header {
    padding: 2rem 0;

    h2 {
      color: var(--body-color);

      margin-bottom: -1.4rem;
    }

    form {
      display: inline;
      display: grid !important;
      grid-template-columns: 1fr 200px;
      place-items: center;

      .buttons {
        display: flex;

        button {
          font-family: "Roboto", sans-serif;
          font-weight: bold;

          width: 100px;
          height: 60px;

          border: none;
          border-radius: 0.3rem;
          background: var(--body-color);
          color: var(--text-color);

          cursor: pointer;

          + button {
            margin-left: 0.2rem;

            background: var(--text-color);
            color: var(--body-color);
          }

          :hover {
            filter: brightness(0.9);
          }
        }
      }
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

      :nth-child(2) {
        width: 20px;

        font-size: 0.9rem;
        font-weight: 700;

        border-radius: 0;

        color: var(--primary-color);
        cursor: pointer;

        :hover {
          filter: brightness(0.9);
        }
      }
      :nth-child(3) {
        width: 20px;

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
