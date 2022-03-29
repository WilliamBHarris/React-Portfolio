import { motion } from 'framer-motion'
import React from 'react'

const Work = () => {
    return (
        <motion.div >
        <div className='workMain'>      
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}} className='aboutBox'>This is the project box.</motion.div>
        </div>
        </motion.div>
    )
}

export default Work
