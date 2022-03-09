import { motion } from 'framer-motion'
import React from 'react'

const Work = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>
        <div className='WorkMain'>
            <h1 className="workHead">Work</h1>
        </div>
        </motion.div>
    )
}

export default Work