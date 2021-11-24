import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StyledFooter from './components/Footer/StyledFooter';
import { Navbar } from './components/Navbar/Navbar';
import GlobalStyle, { Container } from './globalStyle';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Container>
          <Home />
        </Container>
        <StyledFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
