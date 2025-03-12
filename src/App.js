import React, { Component }  from 'react';
import Top from "./components/Top";
import Content from "./components/Content";
import LilyLinks from "./components/Links";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
      <Top/>
      <header className="App-header">
      </header>
      <Content/>
      <LilyLinks/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;