import {HashRouter} from "react-router-dom";
import Border from './components/Border';
import Content from "./components/Content";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
      <Border />
      <main className="App-main">
      <Content/>
      </main>
      <Footer/>
    </div>
    </HashRouter>
  );
}

export default App;