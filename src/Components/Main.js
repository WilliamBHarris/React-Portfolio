import React from "react";
import { motion } from "framer-motion";
import person from "../assets/person.png";





const Main = () => {
  return (
 <>
    <motion.div exit={{scale: 0, y: '-100vh', transition: {duration: .5}}} className='AboutMain'>
      <motion.h1 initial={{ opacity: 1, scale: 0, y: '100vh' }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .5, delay: 0 }}
          exit={{ opacity: 0, y: '-100vh', transition: { duration: 0.5, delay: 0 } }} className='main-name-text'>Will Harris</motion.h1>
 
      
      <motion.h1 initial={{ opacity: 1, scale: 0, y: '100vh' }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .5, delay: 0 }}
          exit={{ opacity: 0, y: '-100vh', transition: { duration: 0.5, delay: 0 } }} className='main-desc-text'>Freelance web developer,<br/> based in Tampa, FL.</motion.h1>
       <motion.img
        drag
        initial={{ opacity: 1, scale: 0, y: '100vh' }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .5, delay: 0 }}
          exit={{ opacity: 0, y: '-100vh', transition: { duration: 0.5, delay: 0 } }}
        className="personImg"
        src={person}
      /> 
    </motion.div>
      
    
    </>
  );
};

export default Main;
