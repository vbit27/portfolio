import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyle';

export const Nav = styled.nav`
  background-color: #f2f2;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 60px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  justify-self: left;
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 20%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 1s ease;
    background-color: #f2f1f1;
  }
`;

export const NavItem = styled.li`
  height: 60px;

  /*@media screen and (max-width: 960px){

  }*/
`;

interface NavMenuProps {
  click: boolean;
}

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;
