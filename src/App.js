import React from 'react';
import { AppProvider } from './context/AppProvider'
import Index from './navigation/index'


function App() {

  return (
    <AppProvider>
      <Index />
    </AppProvider>
  );
}

export default App;
