import React from 'react'
import { motion } from 'framer-motion'
import PContent from './PContent'

const Main = ({children}) => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>

           <PContent />
      
        </motion.div>
    )
}

export default Main
