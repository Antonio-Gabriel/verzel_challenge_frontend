import styled from "styled-components";

export const Container = styled.div`
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
`;
