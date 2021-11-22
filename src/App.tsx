import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
      </BrowserRouter>
    </>
  );
}

export default App;
