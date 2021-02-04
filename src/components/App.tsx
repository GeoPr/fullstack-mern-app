import React from 'react';
import { Header } from './Header/Header';
import { Routes } from './Routes/Routes';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Routes />
      </main>
    </div>
  );
};

export default App;
