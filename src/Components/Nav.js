import React from "react";
import RegNav from "./RegNav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0, type: "tween" }}
    >
      <RegNav />
      <MobileNav />
    </motion.div>
  );
};

export default Nav;
