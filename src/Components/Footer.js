import React from 'react'
import Resume from '../assets/William_Harris_Update.pdf'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <div className='footer'>
            <p className='copyright'>Designed and developed by Will Harris.<br/> Copyright 2022</p>
            <motion.p initial={{x: -30}} animate={{x: 0}} transition={{duration: 1, repeatType: 'reverse', repeat: Infinity}}><AiOutlineArrowRight size={30}/></motion.p>
        <a className='footerLink' download href={Resume}><h3>Resume</h3></a>     
        </div>
    )
}

export default Footer
