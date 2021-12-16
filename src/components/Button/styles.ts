import styled from "styled-components";

interface IbuttonProps {
  width: number;
  height: number;
  unity?: string;
}

export const Container = styled.div<IbuttonProps>`
  margin-top: 0.4rem;
  width: 100%;

  button {
    width: ${({ width, unity = "%" }) => width + unity};
    height: ${({ height, unity = "rem" }) => height + unity};

    border: none;
    outline: none;
    border: 2px solid var(--body-color);
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    color: var(--text-color);
    position: relative;

    transition: 0.2s;

    .circle {
      position: absolute;
      width: 36px;
      height: 36px;
      top: 25%;
      bottom: 30%;
      left: 1rem;
      background-color: var(--primary-color);
      color: var(--body-color);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;

      transform: translate(-0%, -5%);
    }

    :hover {
      filter: brightness(0.9);
    }
  }
`;
