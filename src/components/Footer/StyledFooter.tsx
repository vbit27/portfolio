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
  ExternalLink,
} from './StyledFooter.styled';

const StyledFooter: React.FC = () => {
  return (
    <>
      <Footer>
        <FooterContainer>
          <FooterRow>
            <FooterColumn>
              <MenuTittle>
                explore<span style={{ color: 'red' }}>.</span>
              </MenuTittle>
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
              </FooterMenu>
            </FooterColumn>
            <FooterColumn>
              <MenuTittle>
                social<span style={{ color: 'red' }}>.</span>
              </MenuTittle>
              <FooterMenu>
                <FooterItem>
                  <ExternalLink
                    href="https://github.com/vbit27"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>github</p>
                  </ExternalLink>
                </FooterItem>
                <FooterItem>
                  <ExternalLink
                    href="https://www.linkedin.com/in/vasilis-bitounis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>linkedin</p>
                  </ExternalLink>
                </FooterItem>
              </FooterMenu>
            </FooterColumn>
            <FooterColumn>
              <MenuTittle>
                address<span style={{ color: 'red' }}>.</span>
              </MenuTittle>
              <p>10967</p>
              <p>Berlin</p>
            </FooterColumn>
            <FooterColumn>
              <MenuTittle>
                contact<span style={{ color: 'red' }}>.</span>
              </MenuTittle>
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
