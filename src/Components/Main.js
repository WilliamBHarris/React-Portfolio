import React from "react";
import { motion } from "framer-motion";
import person from "../assets/person.png";


const imgVariants = {
  hidden: { opacity: 1, x: 0 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Main = () => {
  return (
    <motion.div    >
      
      <motion.h1 initial={{opacity: 0, x: -700}} animate={{opacity: 1, x: 0}} transition={{duration: .5, ease: 'easeInOut'}} className='main-name-text'>Will Harris</motion.h1>
      <motion.h1 initial={{opacity: 0, x: 0}} animate={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0, ease: 'easeInOut'}} className='main-desc-text'>Freelance web developer,<br/> based in Tampa, FL.</motion.h1>
       <motion.img
        drag
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        exit={{opacity: 0, transition:{delay: 0}}}
        className="personImg"
        src={person}
      />      
    </motion.div>
  );
};

export default Main;
