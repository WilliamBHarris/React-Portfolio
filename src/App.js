import "./App.css";
import Nav from "./Components/Nav";
import { useState, useEffect } from "react";
import Main from "./Components/Main";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { AnimatePresence } from "framer-motion";
import Footer from "./Components/Footer";
import Group6 from './assets/Group6.png'
import Bg from './assets/bg.png'

import { motion } from "framer-motion";

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mainBox"
    >
      {loading ? (
        <div className="loader">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="loadingText"
          >
            <motion.p
              initial={{ x: -25 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="loadW"
            >
              w
            </motion.p>
            <motion.p
              
              initial={{ x: 25 }}
              animate={{ x: 0}}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="loadH"
            >
              H
            </motion.p>
          </motion.div>
          <ScaleLoader size={500} color={"#17252A"} loading={loading} />
        </div>
      ) : (
        <motion.div
          style={{}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >


          <motion.div
            initial={{ opacity: 0.8, y: 20, x: 303 }}
            animate={{ opacity: 1, x: 370, y: -10 }}
            transition={{
              duration: 4,
              repeatType: "reverse",
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="backCircle"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0.8, y: 10, x: 303 }}
            animate={{ x: 360, y: 0, opacity: 1 }}
            transition={{
              duration: 3,
              repeatType: "reverse",
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="backCircle2"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0.8, y: -30, x: 303 }}
            animate={{ x: 380, y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              repeatType: "reverse",
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="backCircle3"
          ></motion.div>         

{/* <img src={Group6} alt='background' className='group6' /> */}
{/* <img src={Bg} alt='background' className='bg' /> */}

          <Nav />
          <Footer />
          <AnimatePresence exitBeforeEnter initial={true}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          
        </motion.div>
      )}
    </motion.main>
  );
}

export default App;
