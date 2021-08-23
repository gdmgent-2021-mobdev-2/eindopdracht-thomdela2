import React from 'react';
import './App.css';
import { Header, Footer } from './Components/Design/Layout';
import Routes from './MainRouting';

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
