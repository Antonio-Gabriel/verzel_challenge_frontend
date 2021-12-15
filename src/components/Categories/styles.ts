import styled from "styled-components";
import { Grid } from "../../styles/Grid";

export const Container = styled.div`
  padding: 4.5rem 0;
`;

export const Content = styled.section`
  max-width: 1140px;
  margin: 0 auto;

  ${Grid} {
    gap: 2.5rem;
  }

  header {
    //text-align: center;

    ${Grid} {
      gap: 1rem;
    }

    h2 {
      font-size: 2.2rem;
      font-weight: 700;
    }

    p {
      max-width: 500px;
      line-height: 1.6rem;
      opacity: 0.8;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    > div {
      :nth-child(2) {
        background: #fe6073;

        .icon {
          background: #fd7d8d;
        }
      }

      :nth-child(4) {
        background: #fa60fa;

        .icon {
          background: #fc7ffb;
        }
      }

      :nth-child(1) {
        background: #7547ff;

        .icon {
          background: #8b64fe;
        }
      }

      span {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--body-color);
      }

      .icon {
        width: 70px;
        height: 70px;

        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        background: #fbcc61;

        svg {
          fill: var(--body-color);
        }
      }
    }
  }
`;
