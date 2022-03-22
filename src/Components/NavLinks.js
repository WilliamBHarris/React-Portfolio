import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NavLinks = () => {
    return (
        <motion.nav className="mainNav">
        <motion.ul
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5, delay: .5, bounce: 0.03 }}
          exit={{opacity: 0}}
          className="navItems"
        >
          <Link className="links" to="/work">
            <motion.li drag className='indLink' whileHover={{scale: 1.2, transition: {duration: .3}}}>Projects</motion.li>
          </Link>
          <Link className="links" to="/about">
            <motion.li className='indLink' whileHover={{scale: 1.2, transition: {duration: .3}}} >About</motion.li>
          </Link>

          <Link className="links" to="/contact">
            <motion.li className='indLink' whileHover={{scale: 1.2, transition: {duration: .3}}}>Contact</motion.li>
          </Link>
          <Link className="links" to="/">
            <motion.li className='indLink' whileHover={{scale: 1.2, transition: {duration: .3}}}>Home</motion.li>
          </Link>
        </motion.ul>
      </motion.nav>
    )
}

export default NavLinks
