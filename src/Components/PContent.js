import { motion } from 'framer-motion'
import React from 'react'

const PContent = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3}}>
            <h1 className='mainTitle'>Portfolio</h1>
        </motion.div>
    )
}

export default PContent
