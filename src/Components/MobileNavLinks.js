import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MobileNavLinks = (props) => {
    return (
        <div>
            <motion.nav className='mobileLinkBox'>
        <motion.ul
          initial={{ opacity: 1, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .5}}
          className='mobileLink'
        >
          <a className="links" href="#work">
            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()} className='indLink' initial={{opacity: 0, x: 500}} animate={{opacity: 1, x: 0, transition: {duration: .5 ,delay: .05}}}>Projects</motion.li>
          </a>
          <a className="links" href="#about">
            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()} className='indLink' initial={{opacity: 0, x: 500}} animate={{opacity: 1, x: 0, transition: {duration: .5 ,delay: .20}}} >About</motion.li>
          </a>

          <a className="links" href="#contact">
            <motion.li onClick={() => props.isMobile && props.closeMobileMenu()} className='indLink' initial={{opacity: 0, x: 500}} animate={{opacity: 1, x: 0, transition: {duration: .5 ,delay: .40}}}>Contact</motion.li>
          </a>
        </motion.ul>
      </motion.nav>
        </div>
    )
}

export default MobileNavLinks
