import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <motion.nav className="mainNav">
      <motion.ul
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1, delay: 0, bounce: 0.03 }}
        exit={{ opacity: 0 }}
        className="navItems"
      >
        <Link className="links" to="/">
          <motion.li
            className="indLink"
            whileHover={{
              scale: 1.3,
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            Home
          </motion.li>
        </Link>
        <Link className="links" to="/about">
          <motion.li
            className="indLink"
            whileHover={{
              scale: 1.3,
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
        </Link>
        <Link className="links" to="/work">
          <motion.li
            drag
            className="indLink"
            whileHover={{
              scale: 1.3,
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
        </Link>

        <Link className="links" to="/contact">
          <motion.li
            className="indLink"
            whileHover={{
              scale: 1.3,
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
        </Link>
      </motion.ul>
    </motion.nav>
  );
};

export default NavLinks;
