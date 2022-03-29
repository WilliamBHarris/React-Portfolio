import React from "react";
import RegNav from "./RegNav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <motion.div>
      <Link to= '/'><motion.h1 initial={{y: -300}} animate={{y: 0}} transition={{duration: .5}} className='logo'><span style={{color: "#17252A"}}>w</span>H.</motion.h1></Link>
      <RegNav />
      <MobileNav />
    </motion.div>
  );
};

export default Nav;
