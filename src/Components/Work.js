import { motion } from "framer-motion";
import React, {useState} from "react";
import PortfolioImage from '../assets/projectPortfolio.png'
import choreMeProject from '../assets/choreMeProject.png'
import graffiProject from '../assets/graffiProject.png'
import pokePro from '../assets/pokePro.png'
import gifPro from '../assets/gifPro.png'
import workoutPro from '../assets/workoutPro.png'

const Work = () => {
  const [graffi, setGraffi] = useState('')

  return (
    <motion.div>
      <div className="workMain">
        <motion.div
          initial={{ opacity: 1, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: "-100vh" }}
          className="workBox"
        >
          <div className="projectBox1">
          <button onMouseEnter={()=> setGraffi(true)} style={{ display: graffi ? 'none' : 'flex'}}>Button</button>
          <div style={{display: graffi ? 'flex' : 'none'}} onMouseEnter={() => setGraffi(true)} onMouseLeave={() => setGraffi(false)} class="proCard">
            
            <motion.img whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={graffiProject} />
              <h3>Project 1</h3>
              <p>Short description</p>
              
              <p>onMouseEnter drop down for github source code, and live</p>
              </div>
            <div class="proCard">
            <motion.img  whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={choreMeProject} />
              <h3>Project 2</h3>
              <p>Short description</p>
              <p>onMouseEnter drop down for github source code, and live</p>
              </div>
            <div class="proCard">
              <h3>Project 3</h3>
              <p>Short description</p>
              <motion.img whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={PortfolioImage} />
              <p>onMouseEnter drop down for github source code, and live</p>
              </div>
          </div>
          <h1 className="contactTitle" style={{ color: "#17252A" }}>
            Keep
            <span
              style={{ color: "rgb(234, 233, 233)" }}
              className="connectSpan"
            >
              TRYING.
            </span>
          </h1>
          <div className="projectBox1">
            <div class="proCard">
              <h3>Project 1</h3>
              <p>Short description</p>
              <motion.img whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={workoutPro} />
              <p>onMouseEnter drop down for github source code, and live</p>
              </div>
            <div class="proCard">
              <h3>Project 2</h3>
              <p>Short description</p>
              <motion.img whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={gifPro} />
              <p>onMouseEnter drop down for github source code, and live</p>
              </div>
            <div class="proCard">
              <h3>Project 3</h3>
              <p>Short description</p>
              <motion.img whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={pokePro} />
              <p>onMouseEnter drop down for github source code, and live</p>
              </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
