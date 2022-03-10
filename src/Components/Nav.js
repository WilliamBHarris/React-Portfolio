import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
    <div>
      <nav className="mainNav">
        
          
        
        <ul className="navItems">
           <Link to='/'><h1 className='logo'>Will Harris</h1> </Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/work'><li>Work</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
          
        </ul>
      </nav>
    </div>
    </motion.div>
  );
};

export default Nav;
