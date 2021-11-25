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
  align-items: flex-start;
  margin: 100px 0;
  width: 100%;
`;

export const FooterColumn = styled.div`
  margin-top: 60px;
  margin-bottom: 10px;
  padding-right: 15px;
  flex: 1;
  max-width: 25%;
  flex-basis: 25%;

  @media screen and (max-width: 768px) {
    max-width: 50%;
    flex-basis: 50%;
  }
`;

export const MenuTittle = styled.h3`
  margin-bottom: 30px;
`;

export const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
`;

export const FooterItem = styled.li`
  height: 40px;

  /*@media screen and (max-width: 960px){

  }*/
`;

export const FooterLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
`;
