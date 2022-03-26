import { motion } from 'framer-motion'
import React from 'react'

const variants = {
    hidden: { opacity: 1, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0 }, y: 0 },
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
        exit={{x: -300, transition:{ duration: 1}}}
      >
        WILLS PROJECTS
      </motion.h1>
      <div className='showNameWork'><motion.h1
        className="showNameText"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{x: -300, transition:{ duration: 1}}}
      >
        WILLS
      </motion.h1></div>
        <div className='showNameLastWork'><motion.h1
        className="showNameText"
        initial={{ opacity: 1, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
        exit={{y: 300, transition:{ duration: 1}}}
      >
        PROJECTS
      </motion.h1></div>
      
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}} className='aboutBox'>This is the project box.</motion.div>
        </div>
        </motion.div>
    )
}

export default Work
