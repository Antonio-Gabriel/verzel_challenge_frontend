import { darken } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(101.14deg, #5130a6 19.87%, #5721de 93.83%);

  padding: 4.5rem 0;
`;

export const Content = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .hero-text {
    display: flex;
    flex-direction: column;

    span {
      color: #fead1d;
    }

    h1 {
      font-weight: 700;
      color: var(--body-color);

      max-width: 440px;
      margin-bottom: 1.5rem;
    }

    p {
      max-width: 400px;
      font-size: 0.9rem;

      line-height: 1.2rem;
      color: #bebebe;

      margin-bottom: 1rem;
    }

    div {
      padding: 25px 0;
    }
  }
`;

export const Button = styled(Link)`
  background-color: #753bea;
  border-radius: 4px;

  padding: 20px 50px;
  color: var(--body-color);

  font-weight: 700;

  transition: 0.2s;

  :hover {
    background: ${darken(0.1, "#5C36BB")};
  }
`;

export const HeroDescription = styled.ul`
  display: flex;
  align-items: center;

  li {
    display: flex;
    align-items: center;

    .circle {
      width: 80px;
      height: 80px;
      background-color: #753bea;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: #fead1d;
      }
    }

    article {
      display: flex;
      flex-direction: column;

      margin-left: 1rem;

      strong {
        font-size: 2rem;
        color: var(--body-color);

        margin-bottom: .2rem;
      }

      span {
        font-size: 1rem;
        color: #bebebe;
        font-weight: bold;
      }
    }

    + li {
      margin-left: 2rem;
    }
  }
`;
