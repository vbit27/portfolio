import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyle';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export const FooterContainer = styled(Container)`
  ${Container}
`;

export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export const FooterColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  flex: 1;
  max-width: 25%;
  flex-basis: 25%;

  @media screen and (max-width: 768px) {
    max-width: 50%;
    flex-basis: 50%;
  }
`;

export const MenuTittle = styled.h3``;

export const FooterMenu = styled.ul``;

export const FooterLink = styled(Link)``;
