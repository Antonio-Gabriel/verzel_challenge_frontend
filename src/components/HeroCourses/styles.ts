import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(101.14deg, #5130a6 19.87%, #5721de 93.83%);

  padding: 4rem 0;
`;

export const Content = styled.section`
  max-width: 1140px;
  margin: 0 auto;

  p {
    padding-top: 2.4rem;
    color: var(--body-color);
    opacity: 0.8;

    font-weight: 700;
  }
`;

export const TextEffect = styled.div`
  position: relative;

  h1 {
    position: absolute;

    color: transparent;
    transform: translateY(-40%);
    font-size: 2.5rem;

    :nth-child(1) {
      color: transparent;
      -webkit-text-stroke: 1px var(--body-color);
      opacity: 0.7;
    }

    :nth-child(2) {
      //color: #f8bb29;

      //animation: animate 4s ease-in-out infinite;
    }

    /* @keyframes animate {
      0%,
      100% {
        clip-path: polygon(
          0% 45%,
          15% 44%,
          32% 50%,
          54% 60%,
          70% 61%,
          84% 59%,
          100% 52%,
          100% 100%,
          0% 100%
        );
      }
      50% {
        clip-path: polygon(
          0 60%,
          16% 65%,
          34% 66%,
          51% 62%,
          67% 50%,
          84% 45%,
          100% 46%,
          100% 100%,
          0% 100%
        );
      }
    } */
  }
`;
