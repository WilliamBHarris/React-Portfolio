import { motion } from 'framer-motion'
import React from 'react'


const variants = {
    hidden: { opacity: 1, y: "-100vh" },
    visible: { opacity: 1, transition: { duration: 1, delay: 0 }, y: 0 },
  };

const Contact = () => {
    return (
        <motion.div >
        <div className='contactMain'>
        <motion.h1
        className="smallName"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{y:'-105vh', transition:{ duration: 1}}}
      >
        CONTACT WILL
      </motion.h1>
        <motion.h1
        className="showNameContact"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{y:'-105vh', transition:{ duration: 1}}}
      >
        CONTACT
      </motion.h1>
      <motion.h1
        className="showNameLast"
        initial={{ opacity: 1, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1}}
        exit={{x:'105vw', transition:{ duration: 1}}}
      >
        WILL
      </motion.h1>
        </div>
        </motion.div>
    )
}

export default Contact
