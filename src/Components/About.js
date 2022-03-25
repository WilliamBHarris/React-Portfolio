import React from 'react'
import { motion } from 'framer-motion';
import {SiJavascript} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiNodedotjs} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'

const variants = {
    hidden: { opacity: 1, y: "-100vh" },
    visible: { opacity: 1, transition: { duration: 1, delay: 0 }, y: 0 },
  };

const About = () => {
    return (
        <motion.div >
        <div className='AboutMain'>
        <motion.h1
        className="smallName"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{y:'-105vh', transition:{ duration: 1}}}
      >
        ABOUT WILL
      </motion.h1>
           <motion.h1
        className="showNameAbout"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{y:'-105vh', transition:{ duration: 1}}}
      >
        ABOUT
      </motion.h1>
      <motion.h1
        className="showNameLast"
        initial={{ opacity: 1, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        exit={{x:'105vw', transition:{ duration: 1}}}
      >
        WILL
      </motion.h1>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}} className='aboutBox'>
        <p className="aboutText">Hello!  I am a Tampa, FL based freelance <span className='aboutSpan'>web developer.</span></p>
        <p className="aboutText1">Focused on learning more about code <span className='aboutSpan'>everyday.</span></p>
        <p className="aboutText2">Seeking <span className='aboutSpan'>opportunities.</span></p>
        <p className="aboutText3">In hopes to land a <span className='aboutSpan'>job.</span></p>
        
        <div className='langDiv'>
        <SiJavascript size={120} />
        <SiHtml5 size={120} />
        <SiCss3 size={120} />
        <SiReact size={120} />
        <SiNodedotjs size={120} />
        <SiPostgresql size={120} />
        <SiTypescript size={120} />
        </div>
      </motion.div>
        </div>
        </motion.div>
    )
}

export default About
