import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(101.14deg, #5130a6 19.87%, #5721de 93.83%);

  padding: 3rem 0 11rem 0;
`;

export const Content = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    color: var(--body-color);

    .text {
      color: var(--body-color);
      h2 {
        margin-bottom: 0.4rem;
        font-weight: 700;
      }

      p {
        font-size: 0.9rem;
        font-weight: 700;

        color: var(--body-color);
        opacity: 0.9;
      }
    }

    .user {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        margin-right:  .8rem;
        fill: var(--body-color);
      }

      span {
        display: inline-block;
        margin-bottom: 0.2rem;
      }

      p {
        font-size: 0.9rem;
        font-weight: 700;
      }
    }
  }
`;
