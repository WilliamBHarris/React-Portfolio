import React from "react";
import { motion } from "framer-motion";
import person from "../assets/person.png";

const variants = {
  hidden: { opacity: 1, y: "-100vh" },
  visible: { opacity: 1, transition: { duration: 1, delay: 0 }, y: 0 },
};
const imgVariants = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 1 } },
};

const Main = () => {
  return (
    <motion.div    >
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
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.6 }}
        exit={{opacity: 0, transition: {delay: 0}}}
        className="mainDesc2"
      >
        Dedicated.
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.3 }}
        exit={{opacity: 0, transition: {delay: 0}}}
        className="mainDesc1"
      >
        Designer.
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 1.9 }}
        exit={{opacity: 0, transition: {delay: 0}}}
        className="mainDesc3"
      >
        Enthusiast.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        
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
        exit={{y:'-105vh', transition:{ duration: 1}}}
      >
        WILL HARRIS
      </motion.h1>
      <motion.h1
        className="showName"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{y:'-105vh', transition:{ duration: 1}}}
      >
        WILL
      </motion.h1>
      <motion.h1
        className="showNameLast"
        initial={{ opacity: 1, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1}}
        exit={{x:'105vw', transition:{ duration: 1}}}
      >
        HARRIS
      </motion.h1>
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
