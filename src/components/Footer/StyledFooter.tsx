import React from 'react';
import {
  Footer,
  FooterColumn,
  FooterContainer,
  FooterRow,
  MenuTittle,
  FooterMenu,
  FooterLink,
} from './StyledFooter.styled';

const StyledFooter: React.FC = () => {
  return (
    <>
      <Footer>
        <FooterContainer>
          <FooterRow>
            <FooterColumn>
              <MenuTittle>explore</MenuTittle>
              <FooterMenu>
                <FooterLink to="/"></FooterLink>
              </FooterMenu>
            </FooterColumn>
            <FooterColumn>
              <MenuTittle>social</MenuTittle>
              <FooterMenu>
                <FooterLink to="/"></FooterLink>
              </FooterMenu>
            </FooterColumn>
            <FooterColumn>
              <MenuTittle>contact</MenuTittle>
              <FooterMenu>
                <FooterLink to="/"></FooterLink>
              </FooterMenu>
            </FooterColumn>
            <FooterColumn>
              <MenuTittle>address</MenuTittle>
              <FooterMenu>
                <FooterLink to="/"></FooterLink>
              </FooterMenu>
            </FooterColumn>
          </FooterRow>
        </FooterContainer>
      </Footer>
    </>
  );
};

export default StyledFooter;
