import { motion } from 'framer-motion'
import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiOutlineMail } from 'react-icons/ai'
import {AiFillInstagram } from 'react-icons/ai'
import {AiFillLinkedin } from 'react-icons/ai'


const Contact = () => {
    return (
        <motion.div >
        <div  className='contactMain'>      
      <motion.div initial={{opacity: 1, y: '100vh', scale: 0}} animate={{opacity: 1, scale: 1, y: 0}} transition={{duration: .5}} exit={{opacity: 0, y: '-100vh'}} className='aboutBox'>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .5, duration: .5}}} target="_blank" href="www.gitHub.com" className='githubLogo'><FaGithub className="socialLogo"  /></motion.a>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} target='_blank' href="www.Facebook.com" className='facebookLogo' initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1, duration: .5}}}><BsFacebook className="socialLogo"  /></motion.a>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} target='_blank' href="www.Twitter.com" className='twitterLogo' initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.5, duration: .5}}}><AiFillTwitterCircle className="socialLogo" /></motion.a>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} target='email' href="www.email.com" className='mailLogo' initial={{opacity: .3}} animate={{opacity: 1, transition: {delay: .7, duration: .5, repeatType: 'reverse', repeat: Infinity}}} ><AiOutlineMail className="socialLogo" /></motion.a>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} target='_blank' href="www.Instagram.com" className='instagramLogo' initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .8, duration: .5}}}><AiFillInstagram className="socialLogo" /></motion.a>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} target='_blank' href='www.LinkedIn.com' className='linkedInLogo' initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.3, duration: .5}}}><AiFillLinkedin className="socialLogo"  /></motion.a>
        
        
          <h1 className='contactTitle' style={{color: '#17252A'}}>Lets <span style={{color: 'rgb(234, 233, 233)'}} className='connectSpan'>CONNECT.</span></h1>
          
        
      </motion.div>
        </div>
        </motion.div>
    )
}

export default Contact
