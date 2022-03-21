import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.2, type: "tween" }}
    >
      <motion.nav className="mainNav">
        <motion.ul
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5, delay: 1, bounce: 0.03 }}
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
    </motion.div>
  );
};

export default Nav;
