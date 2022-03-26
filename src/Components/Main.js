import React from "react";
import { motion } from "framer-motion";
import person from "../assets/person.png";

const variants = {
  hidden: { opacity: 1, x: -300 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0 }, x: 0 },
};
const imgVariants = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: .8 } },
};

const Main = () => {
  return (
    <motion.div    >
      <div className='mainText'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        exit={{opacity: 0, transition: {delay: 0}}}
        className="mainDesc"
      >
        Web Developer.
      </motion.h1>
         <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.3 }}
        exit={{opacity: 0, transition: {delay: 0}}}
        className="mainDesc"
      >
        Designer.
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.6 }}
        exit={{opacity: 0, transition: {delay: 0}}}
        className="mainDesc"
      >
        Dedicated.
      </motion.h1>
   
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 1.9 }}
        exit={{opacity: 0, transition: {delay: 0}}}
        className="mainDesc"
      >
        Enthusiast.
      </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        
        exit={{opacity: 0, transition: {delay: 0}}}
        className="resume"
      >
        Resume
      </motion.div>
      <motion.h1
        className="smallName"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{x:-300, transition:{ duration: 1}}}
      >
        WILL HARRIS
      </motion.h1>
      <div className='showName'><motion.h1
        className="showNameText"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{opacity: 0, x: -300, transition:{ duration: 1, delay: 0}}}
      >
        WILL
      </motion.h1></div>
      <div className='showNameLast'>
      <motion.h1
        className="showNameLastText"
        initial={{ opacity: 1, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
        exit={{opacity: 0, y: 300, transition:{ duration: 1, delay: 0}}}
      >
        HARRIS
      </motion.h1>
      </div>
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
