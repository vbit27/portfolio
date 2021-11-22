import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {font-size: 100%;} /*16px*/

body {
  background: #FEFAF6;
  font-family: 'Work Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
}



h1, h2, h3 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  line-height: 1.3;
  text-align: left;
}


h1 {
font-size: 67px;
line-height: 89px;
letter-spacing: 0.02em;


}

h2 {
font-size: 50px;
line-height: 67px;
letter-spacing: 0.02em;

}

h3 {
font-size: 38px;
font-weight: 700;
line-height: 51px;
}

h4 {
font-family: 'Work Sans', sans-serif;
font-size: 24px;
font-weight: 400;
line-height: 34px;


}

h5 {
font-size: 13px;
font-weight: 700;
letter-spacing: 0.04em;
text-transform: uppercase
}



`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 960px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Button = styled.button<ButtonProps>`
  border-radius: 25px;
  background-color: ${({ primary }) => (primary ? '#000' : 'transparent')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 40px' : '12px 30px')};
  color: ${({ primary }) => (primary ? '#fff' : '#000')};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  outline: none;
  border: none;
  cursor: pointer;

  /*&:hover {
    transition: all 0.3s ease-out;

  }*/
`;

interface ButtonProps {
  primary: boolean;
  big: boolean;
}

export default GlobalStyle;
