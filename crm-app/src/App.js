import React from 'react';
import './App.css';
import { Header, Footer, Sidebar } from './Components/Design/Layout';
import Routes from './MainRouting';

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
