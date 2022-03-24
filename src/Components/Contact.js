import { motion } from 'framer-motion'
import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiOutlineMail } from 'react-icons/ai'
import {AiFillInstagram } from 'react-icons/ai'
import {AiFillLinkedin } from 'react-icons/ai'


const variants = {
    hidden: { opacity: 1, y: "-100vh" },
    visible: { opacity: 1, transition: { duration: 1, delay: 0 }, y: 0 },
  };

const Contact = () => {
    return (
        <motion.div >
        <div className='contactMain'>
        <motion.h1
        className="smallName"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{y:'-105vh', transition:{ duration: 1}}}
      >
        CONTACT WILL
      </motion.h1>
        <motion.h1
        className="showNameContact"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{y:'-105vh', transition:{ duration: 1}}}
      >
        CONTACT
      </motion.h1>
      <motion.h1
        className="showNameLast"
        initial={{ opacity: 1, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1}}
        exit={{x:'105vw', transition:{ duration: 1}}}
      >
        WILL
      </motion.h1>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}} className='aboutBox'>
        <FaGithub size='50px' className='githubLogo' />
        <BsFacebook size='50px' className='facebookLogo' />
        <AiFillTwitterCircle size= '50px' className='twitterLogo' />
        <AiOutlineMail size='50px' className='mailLogo' />
        <AiFillInstagram size='50px' className='instagramLogo' />
        <AiFillLinkedin size='50px' className='linkedInLogo' />
        
        <div className="contactTitle">
          <h1>Talk to me.</h1>
          
        </div>
      </motion.div>
        </div>
        </motion.div>
    )
}

export default Contact
