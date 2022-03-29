import { motion } from 'framer-motion'
import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiOutlineMail } from 'react-icons/ai'
import {AiFillInstagram } from 'react-icons/ai'
import {AiFillLinkedin } from 'react-icons/ai'

const variants = {
    hidden: { opacity: 1, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0 }, y: 0 },
  };

const Contact = () => {
    return (
        <motion.div >
        <div  className='contactMain'>      
      <motion.div style={{border: 'none'}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}} className='aboutBox'>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .5, duration: .5}}} target="_blank" href="www.gitHub.com" className='githubLogo'><FaGithub className="socialLogo"  /></motion.a>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} target='_blank' href="www.Facebook.com" className='facebookLogo' initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1, duration: .5}}}><BsFacebook className="socialLogo"  /></motion.a>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} target='_blank' href="www.Twitter.com" className='twitterLogo' initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.5, duration: .5}}}><AiFillTwitterCircle className="socialLogo" /></motion.a>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} target='email' href="www.email.com" className='mailLogo' initial={{opacity: .3}} animate={{opacity: 1, transition: {delay: .7, duration: .5, repeatType: 'reverse', repeat: Infinity}}} ><AiOutlineMail className="socialLogo" /></motion.a>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} target='_blank' href="www.Instagram.com" className='instagramLogo' initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .8, duration: .5}}}><AiFillInstagram className="socialLogo" /></motion.a>
        <motion.a whileHover={{scale: 1.5, transition: {duration: .3, ease: 'easeInOut'}}} target='_blank' href='www.LinkedIn.com' className='linkedInLogo' initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.3, duration: .5}}}><AiFillLinkedin className="socialLogo"  /></motion.a>
        
        <div className="contactTitle">
          <h1 style={{color: '#17252A'}}>Lets <span style={{color: 'rgb(234, 233, 233)'}} className='connectSpan'>CONNECT.</span></h1>
          
        </div>
      </motion.div>
        </div>
        </motion.div>
    )
}

export default Contact
