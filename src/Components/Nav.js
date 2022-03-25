import React from "react";
import RegNav from "./RegNav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.div

    >
      <RegNav />
      <MobileNav />
    </motion.div>
  );
};

export default Nav;
