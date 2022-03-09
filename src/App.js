import './App.css';
import Nav from './Components/Nav';
import { useRef, useState, useEffect } from 'react';
import Main from './Components/Main';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes, Link, Switch, useLocation } from "react-router-dom";
import { RingLoader } from 'react-spinners';
import {AnimatePresence, motion} from 'framer-motion'

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <main className='mainBox'>
       <Nav />
      { loading ? 
      <RingLoader 
      size={110}
      color={'#123abc'}
      loading={loading}
      />
    : 
    <AnimatePresence exitBeforeEnter initial={false}>
 
     
      <Routes location={location} key={location.pathname}>
     <Route path='/' element={ <Main />} />
     <Route path='/about' element={ <About />} />
     <Route path='/work' element={ <Work />} />
     <Route path='/contact' element={ <Contact />} />
      </Routes>
      </AnimatePresence>
    }

    </main>
  );
}

export default App;
