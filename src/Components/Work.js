import { motion } from 'framer-motion'
import React from 'react'

const variants = {
    hidden: { opacity: 1, y: "-100vh" },
    visible: { opacity: 1, transition: { duration: 1, delay: 0 }, y: 0 },
  };

const Work = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.2}}>
        <div className='WorkMain'>
        <motion.h1
        className="showNameWork"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        WILLS
      </motion.h1>
      <motion.h1
        className="showNameLastWork"
        initial={{ opacity: 1, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1}}
      >
        PROJECTS
      </motion.h1>
        </div>
        </motion.div>
    )
}

export default Work
