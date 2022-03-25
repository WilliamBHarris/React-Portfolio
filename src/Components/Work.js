import { motion } from 'framer-motion'
import React from 'react'

const variants = {
    hidden: { opacity: 1, y: "-100vh" },
    visible: { opacity: 1, transition: { duration: 1, delay: 0 }, y: 0 },
  };

const Work = () => {
    return (
        <motion.div >
        <div className='WorkMain'>
        <motion.h1
        className="smallName"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{y:'-105vh', transition:{ duration: 1}}}
      >
        WILLS PROJECTS
      </motion.h1>
        <motion.h1
        className="showNameWork"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{y:'-105vh', transition:{ duration: 1, delay: .5}}}
      >
        WILLS
      </motion.h1>
      <motion.h1
        className="showNameLastWork"
        initial={{ opacity: 1, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1}}
        exit={{x:'105vw', transition:{ duration: 1, delay: .5}}}
      >
        PROJECTS
      </motion.h1>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}} className='aboutBox'>This is the project box.</motion.div>
        </div>
        </motion.div>
    )
}

export default Work
