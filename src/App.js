import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
     <Route path='/' element={ <Main />} />
     <Route path='/about' element={ <About />} />
     <Route path='/work' element={ <Work />} />
     <Route path='/contact' element={ <Contact />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
