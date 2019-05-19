import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* COMPONENTS */
import Sidebar from './components/shared/Sidebar/index';

/* ROUTES */
import Routes from './routes';


const App = () => {
  return (
    <BrowserRouter basename="/">
      <Sidebar />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
