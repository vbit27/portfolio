import React, { useEffect, useState } from 'react';
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
import gsap from 'gsap';

export const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    gsap.from('.animation-header', {
      opacity: 0,
      y: -50,
      duration: 1,
      stagger: 0.04,
      delay: 1,
    });
  }, []);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" className="animation-header">
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
                className="animation-header"
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
                className="animation-header"
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
                className="animation-header"
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
