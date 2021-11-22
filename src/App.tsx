import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import GlobalStyle, { Button, Container } from './globalStyle';

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
          <Button primary big>
            Live
          </Button>
          <Button primary={false} big>
            Code
          </Button>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
