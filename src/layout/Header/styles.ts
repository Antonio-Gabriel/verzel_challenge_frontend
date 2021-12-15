import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { darken } from "polished";

export const Container = styled.div`
  background: #fffeff;

  header {
    max-width: 1140px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem 0;

    nav {
      display: flex;
      align-items: center;
    }

    .buttons {
      display: flex;
      align-items: center;
    }
  }
`;

export const Logo = styled(Link)`
  font-size: 1.4rem;
  font-weight: 700 !important;
  color: var(--primary-color);

  position: relative;
  text-transform: capitalize;
`;

export const NavigationMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-right: 2rem;
`;
export const NavigationItem = styled.li`
  font-size: 1rem;

  + li {
    padding-left: 1.4rem;
  }

  .is_active {
    color: var(--primary-color);
    font-weight: 700;

    :hover {
      color: ${darken(0.1, "#5C36BB")};
    }
  }
`;
export const NavigationLink = styled(NavLink)`
  transition: 0.2s;

  :hover {
    color: ${darken(0.4, "#3B3B3B")};
  }
`;

export const Button = styled(Link)`
  opacity: 0.6s;
  width: 100px;
  height: 40px;

  transition: 0.2s;

  border: 2px solid #5c36bb;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--primary-color);

  font-size: 0.9rem;

  :hover {
    color: ${darken(0.1, "#5C36BB")};
  }

  + a {
    margin-left: 1rem;

    width: 80px;
    height: 40px;
    color: var(--body-color);
    background: var(--primary-color);

    transition: 0.2s;

    border-radius: 4px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      color: var(--body-color);
      background: ${darken(0.1, "#5C36BB")};
    }
  }
`;
