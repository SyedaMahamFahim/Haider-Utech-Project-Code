import "./App.css";
import Config from "./configuration/Config";
import {Header, Footer} from './components/index'


function App() {
  return (
    <>
    <div className="app">
      <Header/>
  <Config/>
    <Footer/>
    </div>
      
    </>
  );
}

export default App;
