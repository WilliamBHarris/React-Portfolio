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
    }, 2)
  }, [])

  return (
    <motion.main       initial={{ opacity: 1 }}
    animate={{ opacity: 1, background: 'rgb(181, 172, 172)' }}
    transition={{ duration: 1 }} className='mainBox'>
       
      { loading ? 
      <div className="loader">
        <motion.div initial={{opacity: 1}} animate={{opacity: 1}} transition={{duration: 1.5}} className='loadingText'>
          <motion.p initial={{x: -25}} animate={{x: 0}} transition={{duration: .5, repeat: Infinity, repeatType: 'reverse', ease:'easeInOut'}} className="loadW">w</motion.p>
          <motion.p initial={{x: 25}} animate={{x: 0, fontWeight: 'bold'}} transition={{duration: .5, repeat: Infinity, repeatType: 'reverse', ease:'easeInOut'}} className="loadH">H</motion.p>
          </motion.div>
      <ScaleLoader 
      size={500}
      color={'#17252A'}
      loading={loading}
      />
      </div>
    : 
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .3}}>
    
    <motion.div initial={{opacity: 0.8,y: 20, x: 30}} animate={{opacity: 1 ,x:0, y:-10}} transition={{duration: 2, repeatType: 'reverse', repeat: Infinity, ease: 'easeInOut'}} className='backCircle'></motion.div>
      <motion.div initial={{opacity: 0.8,y: 10, x: 30}} animate={{x:0, y: 0, opacity: 1}} transition={{duration: 3, repeatType: 'reverse', repeat: Infinity, ease: 'easeInOut'}} className='backCircle2'></motion.div>
      <motion.div initial={{opacity: 0.8, y: -30, x: 30}} animate={{x:0, y: 0, opacity: 1}} transition={{duration: 5, repeatType: 'reverse', repeat: Infinity, ease: 'easeInOut'}} className='backCircle3'></motion.div>
      <motion.h1 initial={{opacity: 0, x: 300, rotate: -90}} animate={{opacity: .3, x: 0}} transition={{duration: 2}} className='main-right-border'>Web Developer</motion.h1>
      <motion.h1 initial={{x: -10, opacity: .2}}
        animate={{opacity: .5, x: 10}}
        transition={{duration: 3, delay: 1, repeatType:'reverse', repeat: Infinity}}
        exit={{opacity: 0, transition:{delay: 0}}} className='main-firstName-border'>Will</motion.h1>
      <motion.h1 initial={{opacity: .2, x: -10}}
        animate={{opacity: .5, x: 13}}
        transition={{duration: 5, delay: 1, repeatType:'reverse', repeat: Infinity}}
        exit={{opacity: 0, transition:{delay: 0}}} className='main-lastName-border'>Harris</motion.h1>
    <Nav />
    <AnimatePresence exitBeforeEnter initial={true}>
      <Routes location={location} key={location.pathname}>
     <Route path='/' element={ <Main />} />
     <Route path='/about' element={ <About />} />
     <Route path='/work' element={ <Work />} />
     <Route path='/contact' element={ <Contact />} />   
      </Routes>
      </AnimatePresence>
      </motion.div>
    }

    </motion.main>
  );
}

export default App;
