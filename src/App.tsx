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
          <h1>
            Hi. Vasil here.
            <br /> I build things for the web.
          </h1>
          <h2>hooo</h2>
          <h3>I am h3</h3>
          <h4>I am h4</h4>
          <h5>react js axiosAPI router</h5>
          <a href="/">ia m a link</a>
          <p>hello there</p>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
