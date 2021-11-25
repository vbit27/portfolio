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
            <h3>vB</h3>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <AiOutlineClose /> : <AiOutlineMenu />}
          </MobileIcon>
          <NavMenu click={click}>
            <NavItem>
              <NavLinks
                to={'projects'}
                smooth={true}
                duration={1300}
                offset={-100}
              >
                <p>projects</p>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to={'about'}
                smooth={true}
                duration={1300}
                offset={-100}
              >
                <p>about</p>
              </NavLinks>
            </NavItem>{' '}
            <NavItem>
              <NavLinks
                to={'contact'}
                smooth={true}
                duration={1300}
                offset={-100}
              >
                <p>contact</p>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};
