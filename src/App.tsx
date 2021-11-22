import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import GlobalStyle, { Container } from './globalStyle';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Container>
          <h1>Hiiiiiii</h1>
          <h2>hooo</h2>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
