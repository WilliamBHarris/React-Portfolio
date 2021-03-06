import React from "react";
import RegNav from "./RegNav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <motion.div>
      <a href='#home' ><motion.img src={logo} initial={{y: -300}} animate={{y: 0}} transition={{duration: .5}} className='logo' /></a>
      <RegNav />
      <MobileNav />
    </motion.div>
  );
};

export default Nav;
