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
  margin-bottom: 50px;
  width: 100%;

  p {
    font-size: 16px;
    letter-spacing: 1.1px;
  }
`;

export const FooterColumn = styled.div`
  margin-top: 60px;
  margin-bottom: 10px;
  padding-right: 15px;
  flex: 1;
  max-width: 25%;
  flex-basis: 25%;
  word-break: break-all;

  @media screen and (max-width: 768px) {
    max-width: 50%;
    flex-basis: 50%;
  }
`;

export const MenuTittle = styled.h3`
  font-size: 28px;
  margin-bottom: 15px;
`;

export const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
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
  width: fit-content;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 16px;
    letter-spacing: 1.1px;
    color: grey;
  }
`;
