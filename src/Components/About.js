import React from 'react'
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 1, y: "-100vh" },
    visible: { opacity: 1, transition: { duration: 1, delay: 0 }, y: 0 },
  };

const About = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.2}}>
        <div className='AboutMain'>
           {/* <Link to='/'> <h1>About</h1></Link> */}
           <motion.h1
        className="showNameAbout"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        ABOUT
      </motion.h1>
      <motion.h1
        className="showNameLast"
        initial={{ opacity: 1, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        WILL
      </motion.h1>
        </div>
        </motion.div>
    )
}

export default About
