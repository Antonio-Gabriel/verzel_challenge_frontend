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
    gap: 2.2rem;
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

    .lesson-item {
      // background: var(--primary-color);

      border-radius: 6px;
      cursor: pointer;
      border: 2px solid var(--primary-color);

      header {
        position: relative;

        video {
          width: 100%;
          border-radius: 6px;
        }

        svg {
          position: absolute;
          transform: translate(100px, 50px);
          width: 40px;
          height: 40px;

          top: 0;
          left: 0;

          fill: #fff;

          cursor: pointer;
        }
      }

      .description {
        padding: 1rem 1rem;

        display: flex;
        flex-direction: column;

        h3 {
          margin-bottom: 0.5rem;
        }

        ul {
          margin-bottom: 0.5rem;
          li {
            display: inline-flex;
            align-items: center;

            span {
              margin-left: 0.3rem;
            }
          }
        }

        button {
          font-family: "Roboto", sans-serif;
          font-weight: 700;

          height: 40px;

          border: none;
          border-radius: 4px;
          background: var(--primary-color);

          color: var(--body-color);
          cursor: pointer;

          transition: 0.2s;

          :hover {
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`;
