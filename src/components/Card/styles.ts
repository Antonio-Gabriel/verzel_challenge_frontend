import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 2rem 2.6rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  svg {
    position: absolute;
    top: 2rem;
    right: 2rem;

    width: 40px;

    fill: var(--primary-color);
  }

  span {
    font-size: 1.6rem;
  }

  strong {
    font-size: 3rem;
  }
`;
