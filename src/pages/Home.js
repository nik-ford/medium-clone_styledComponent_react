import React from 'react';
import styled from 'styled-components';

function App() {

// DELETE THIS TAGS WHEN READY TO CREATE REAL BLOCKS

  const Main = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  flex-direction: column;
  `;
  const Header = styled.header`
  width: 100%;
  background-color: pink;
  `;
  const Content1 = styled.div`
  width: 100%;
  background-color: purple;
  `;
  const Content2 = styled.div`
  width: 100%;
  background-color: blue;
  `;
  const Content3 = styled.div`
  width: 100%;
  background-color: green;
  `;
  const Footer = styled.footer`
  width: 100%;
  background-color: yellow;
  `;
  

  return (
    <Main>
      <Header>A</Header>
      <Content1>B</Content1>
      <Content2>C</Content2>
      <Content3>D</Content3>
      <Footer>F</Footer>
    </Main>
  );
}

export default App;