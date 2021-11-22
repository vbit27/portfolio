import React, { useState } from 'react';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navbar.styled';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <h5>Vasil Bituni</h5>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <AiOutlineClose /> : <AiOutlineMenu />}
          </MobileIcon>
          <NavMenu click={click}>
            <NavItem>
              <NavLinks to={'/'}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={'/'}>About</NavLinks>
            </NavItem>{' '}
            <NavItem>
              <NavLinks to={'/'}>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};
