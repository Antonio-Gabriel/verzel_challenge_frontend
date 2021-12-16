import styled from "styled-components";

export const Container = styled.section`
  .accordion-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: var(--primary-color);

    border-radius: 4px;

    color: var(--body-color);

    span {
      font-size: 1.4rem;
    }
  }

  .accordion-title:hover {
    filter: brightness(0.9);
  }

  .accordion-title,
  .accordion-content {
    padding: 1rem;
  }

  .accordion-content {
    background-color: #fff;

    transition: 0.2s;

    ul {
      li {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;

        strong {
          opacity: 0.8;
        }

        span {
          color: #bebebe;
        }

        + li {
          border-top: 1px solid #f0f0ef;
        }
      }
    }
  }
`;
