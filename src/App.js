import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { AppProvider } from './context/AppProvider'
import Index from './navigation/index'

import LoraVariable from './assets/fonts/LoraVariable.ttf'
import PlayfairDisplay from './assets/fonts/PlayfairDisplay.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'LoraVariable';
    src: url(${LoraVariable}) format('truetype');
    src: url(${PlayfairDisplay}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
`;


function App() {

  return (
    <AppProvider>
      <GlobalStyle />
      <Index />
    </AppProvider>
  );
}

export default App;
