import { Link } from 'react-scroll';
import styled from 'styled-components';
import { Container } from '../../globalStyle';

export const Nav = styled.nav`
  background-color: #fefaf6;
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
    height: 100vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 1s ease;
    background-color: #fefaf6;
  }
`;

export const NavItem = styled.li`
  height: 60px;

  /*@media screen and (max-width: 960px){

  }*/
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

interface NavMenuProps {
  click: boolean;
}
