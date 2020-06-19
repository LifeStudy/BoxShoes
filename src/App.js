import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './Styles/global';
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
