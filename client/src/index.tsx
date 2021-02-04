import React from 'react';
import { render } from 'react-dom';
import { ContextProvider } from './context/context';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './index.scss';

render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>,
  document.getElementById('root'),
);
