import React, { Component }  from 'react';
import Border from './components/Border';
import Top from "./components/Top";
import Content from "./components/Content";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Border />
      <main className="App-main">
      <Top/>
      <header className="App-header">
      </header>
      <Content/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;