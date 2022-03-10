import './App.css';
import Nav from './Components/Nav';
import { useState, useEffect } from 'react';
import Main from './Components/Main';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import { Route, Routes, useLocation } from "react-router-dom";
import { ScaleLoader } from 'react-spinners';
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <main className='mainBox'>
       
      { loading ? 
      <div className="loader">
        <p className='loadingText'>Preparing for greatness...</p>
      <ScaleLoader 
      size={310}
      color={'#FFFFFF'}
      loading={loading}
      />
      </div>
    : 
    <>
    <Nav />
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
     <Route path='/' element={ <Main />} />
     <Route path='/about' element={ <About />} />
     <Route path='/work' element={ <Work />} />
     <Route path='/contact' element={ <Contact />} />
      </Routes>
      </AnimatePresence>
      </>
    }

    </main>
  );
}

export default App;
