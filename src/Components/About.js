import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>
        <div className='AboutMain'>
            <h1>About</h1>
        </div>
        </motion.div>
    )
}

export default About
