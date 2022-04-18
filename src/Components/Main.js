import React from "react";
import { motion } from "framer-motion";
import person from "../assets/person.png";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import wave from '../assets/wave.svg'
import wave3 from '../assets/wave3.svg'

const Main = () => {
  return (
    <div id="home">
      {/* <img style={{transform: 'rotate(-10deg)',width: '50%', position: 'absolute', marginTop: '0px', left: '-25%'}} src={wave} />
      <img style={{transform: 'rotate(10deg)',width: '50%', position: 'absolute', marginTop: '0px', right: '-15%', top: '-5%'}} src={wave} /> */}
      <img style={{width: '100%', position: 'absolute', marginTop: '0px', right: '0', bottom: '-0px', zIndex: "2"}} src={wave3} />
      <motion.div
        exit={{ scale: 0, y: "-100vh", transition: { duration: 0.5 } }}
        className="showMain"
      >
        <motion.h1
          initial={{ opacity: 1, scale: 0, y: "100vh" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          exit={{
            opacity: 0,
            y: "-100vh",
            transition: { duration: 0.5, delay: 0 },
          }}
          className="main-name-text"
        >
          Will Harris
        </motion.h1>

        <motion.h1
          initial={{ opacity: 1, scale: 0, y: "100vh" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          exit={{
            opacity: 0,
            y: "-100vh",
            transition: { duration: 0.5, delay: 0 },
          }}
          className="main-desc-text"
        >
          Web developer
          <br /> Based in Tampa, FL.
        </motion.h1>
        <motion.img
          initial={{ opacity: 1, scale: 0, y: "100vh" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          exit={{
            opacity: 0,
            y: "-100vh",
            transition: { duration: 0.5, delay: 0 },
          }}
          className="personImg"
          src={person} />
        
      </motion.div>
      <div>
        <About />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Main;
