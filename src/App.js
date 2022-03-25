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
    }, 3000)
  }, [])

  return (
    <motion.main       initial={{ opacity: 0, background: 'black' }}
    animate={{ opacity: 1, background: 'yellow' }}
    transition={{ duration: 1 }} className='mainBox'>
       
      { loading ? 
      <div className="loader">
        <motion.div initial={{opacity: 1}} animate={{opacity: 1}} transition={{duration: 1.5}} className='loadingText'>
          <motion.p initial={{x: -25}} animate={{x: 0}} transition={{duration: .5, repeat: Infinity, repeatType: 'reverse', ease:'easeInOut'}} className="loadW">W</motion.p>
          <motion.p initial={{x: 25}} animate={{x: 0, fontWeight: 'bold'}} transition={{duration: .5, repeat: Infinity, repeatType: 'reverse', ease:'easeInOut'}} className="loadH">H</motion.p>
          </motion.div>
      <ScaleLoader 
      size={500}
      color={'yellow'}
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
