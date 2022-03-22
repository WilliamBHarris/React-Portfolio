import './App.css';
import Nav from './Components/Nav';
import { useState, useEffect } from 'react';
import Main from './Components/Main';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import { Route, Routes, useLocation } from "react-router-dom";
import { ScaleLoader } from 'react-spinners';
import {AnimatePresence} from 'framer-motion';

import {motion} from 'framer-motion'

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <motion.main       initial={{ opacity: 0, background: 'black' }}
    animate={{ opacity: 1, background: 'yellow' }}
    transition={{ duration: 1 }} className='mainBox'>
       
      { loading ? 
      <div className="loader">
        <p className='loadingText'>Always learning...</p>
      <ScaleLoader 
      size={310}
      color={'black'}
      loading={loading}
      />
      </div>
    : 
    <>
    
    
    <Nav />
    <AnimatePresence exitBeforeEnter initial={true}>
      <Routes location={location} key={location.pathname}>
     <Route path='/' element={ <Main />} />
     <Route path='/about' element={ <About />} />
     <Route path='/work' element={ <Work />} />
     <Route path='/contact' element={ <Contact />} />   
      </Routes>
      </AnimatePresence>
      </>
    }

    </motion.main>
  );
}

export default App;
