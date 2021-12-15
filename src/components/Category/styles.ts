import styled from "styled-components";

export const Container = styled.div`
  background: #f8bb29;

  height: 200px;
  border-radius: 4px;

  padding: 2.8rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  transition: 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;
