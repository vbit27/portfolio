import React from 'react';
import {
  Footer,
  FooterColumn,
  FooterContainer,
  FooterRow,
  MenuTittle,
  FooterMenu,
  FooterLink,
  FooterItem,
  TextWrapper,
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
                <FooterItem>
                  <FooterLink to="/">
                    <p>home</p>
                  </FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink to="/">
                    <p>projects</p>
                  </FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink to="/">
                    <p>about</p>
                  </FooterLink>
                </FooterItem>
              </FooterMenu>
            </FooterColumn>
            <FooterColumn>
              <MenuTittle>social</MenuTittle>
              <FooterMenu>
                <FooterItem>
                  <FooterLink to="/">
                    <p>github</p>
                  </FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink to="/">
                    <p>linkedin</p>
                  </FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink to="/">
                    <p>website</p>
                  </FooterLink>
                </FooterItem>
              </FooterMenu>
            </FooterColumn>
            <FooterColumn>
              <MenuTittle>address</MenuTittle>
              <p>10967</p>
              <p>Berlin</p>
            </FooterColumn>
            <FooterColumn>
              <MenuTittle>contact</MenuTittle>
              <p>vasil.bituni@gmail.com</p>
              <p>+4915782116855</p>
            </FooterColumn>
          </FooterRow>
          <TextWrapper>
            <p>© vasil bituni 2022</p>
          </TextWrapper>
        </FooterContainer>
      </Footer>
    </>
  );
};

export default StyledFooter;
