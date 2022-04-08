import React from "react";
import { motion } from "framer-motion";

const NavLinks = () => {
  return (
    <motion.nav initial={{y:-300}} animate={{y: 0}} transition={{duration: .5}} className="mainNav">
      <motion.ul
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: .5, delay: 0, bounce: 0.03 }}
        exit={{ opacity: 0 }}
        className="navItems"
      >
        <a className="links" href="#about" spy={true} smooth={true} >
          <motion.li
            className="indLink"
            whileHover={{
              textDecoration: 'underline',
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            About
          </motion.li>
        </a>
        <a className="links" href="#work" spy={true} smooth={true} offset={-100} duration={500}>
          <motion.li
            drag
            className="indLink"
            whileHover={{
              textDecoration: 'underline',
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            Projects
          </motion.li>
        </a>

        <a className="links" href="#contact" spy={true} smooth={true} offset={-100} duration={500}>
          <motion.li
            className="contactLink"
            whileHover={{
              textDecoration: 'underline',
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            Contact
          </motion.li>
        </a>
      </motion.ul>
    </motion.nav>
  );
};

export default NavLinks;
