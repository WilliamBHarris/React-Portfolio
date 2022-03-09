import React from 'react'
import { motion } from 'framer-motion'

const Main = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>
        <div>
            <h1>Portfolio</h1>
        </div>
        </motion.div>
    )
}

export default Main
