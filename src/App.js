import "./App.css";
import Main from "./Components/Main";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import { motion } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <motion.main
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mainBox"
    >

        <motion.div
          style={{}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence exitBeforeEnter initial={true}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          
        </motion.div>
      
    
    </motion.main>
  );
}

export default App;
