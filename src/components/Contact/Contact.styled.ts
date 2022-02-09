import styled from 'styled-components';
import { Container } from '../../globalStyle';

export const Contact = styled.div`
  display: flex;
  text-align: center;
  margin: 3rem 0rem 10rem 0rem;
`;

export const ContactContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3rem;
  ${Container}
`;

export const Link = styled.a`
  text-decoration: underline;
`;
