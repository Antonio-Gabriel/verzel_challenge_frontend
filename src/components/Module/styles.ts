import styled from "styled-components";

type isActiveModule = {
  isAcvite: boolean;
}

export const Container = styled.div`
  background: #fff;
  padding: 1rem 1rem;

  display: flex;
  align-items: center;

  border-radius: 16px;
  cursor: pointer;

  box-shadow: 0 15px 38px rgba(71, 70, 70, 0.058);

  transition: 0.2s;

  .left {
    margin-right: 0.6rem;

    svg {
      fill: var(--text-color);
    }
  }

  :hover {
    background: var(--primary-color);
    color: var(--body-color);

    svg {
      fill: var(--body-color);
    }
  }

  .right {
    h3 {
      margin-bottom: 0.3rem;
    }

    span {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;
