import { motion } from 'framer-motion'
import React from 'react'



const Work = () => {
    return (
        <motion.div >
        <div className='workMain'>      
      <motion.div initial={{opacity: 1, y: '100vh'}} animate={{opacity: 1, y: 0}} transition={{duration: .5}} exit={{opacity: 0, y: '-100vh'}} className='aboutBox'>
        <p>Work</p>



      </motion.div>
        </div>
        </motion.div>
    )
}

export default Work
