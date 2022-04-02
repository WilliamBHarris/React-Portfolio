import { motion } from "framer-motion";
import React, {useState} from "react";
import PortfolioImage from '../assets/projectPortfolio.png'
import choreMeProject from '../assets/choreMeProject.png'
import graffiProject from '../assets/graffiProject.png'
import pokePro from '../assets/pokePro.png'
import gifPro from '../assets/gifPro.png'
import workoutPro from '../assets/workoutPro.png'

const Work = () => {
  const [graffi, setGraffi] = useState(false)
  const [chore, setChore] = useState(false)
  const [port, setPort] = useState(false)
  const [work, setWork] = useState(false)
  const [gif, setGif] = useState(false)
  const [poke, setPoke] = useState(false)

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
          <button onMouseEnter={()=> setGraffi(true)} style={{ visibility: graffi ? 'hidden' : 'visible', height: '10%', position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%,-50%)'}}>Graffi</button>
          <div style={{visibility: graffi ? 'visible' : 'hidden'}} onMouseEnter={() => setGraffi(true)} onMouseLeave={() => setGraffi(false)} class="proCard">
            
            <motion.img  whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={graffiProject} />
              <h3>Project 1</h3>
              <p>Short description</p>
              
              <p>onMouseEnter drop down for github source code, and live</p>
              </div>
              <button onMouseEnter={()=> setChore(true)} style={{ visibility: chore ? 'hidden' : 'visible', height: '10%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>choreMe</button>
            <div style={{visibility: chore ? 'visible' : 'hidden'}} onMouseEnter={() => setChore(true)} onMouseLeave={() => setChore(false)} class="proCard">
            
            <motion.img  whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={choreMeProject} />
              <h3>Project 2</h3>
              <p>Short description</p>
              <p>onMouseEnter drop down for github source code, and live</p>
              </div>
              <button onMouseEnter={()=> setPort(true)} style={{ visibility: port ? 'hidden' : 'visible', height: '10%', position: 'absolute', top: '50%', left: '75%', transform: 'translate(-50%,-50%)'}}>Portfolio v.1</button>
            <div style={{visibility: port ? 'visible' : 'hidden'}} onMouseEnter={() => setPort(true)} onMouseLeave={() => setPort(false)} class="proCard">
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
          <button onMouseEnter={()=> setWork(true)} style={{ visibility: work ? 'hidden' : 'visible', height: '10%', position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%,-50%)'}}>Workout Log</button>
            <div style={{visibility: work ? 'visible' : 'hidden'}} onMouseEnter={() => setWork(true)} onMouseLeave={() => setWork(false)} class="proCard">
              <h3>Project 1</h3>
              <p>Short description</p>
              <motion.img whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={workoutPro} />
              <p>onMouseEnter drop down for github source code, and live</p>
              </div>
              <button onMouseEnter={()=> setGif(true)} style={{ visibility: gif ? 'hidden' : 'visible', height: '10%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>Gif Finder</button>
            <div style={{visibility: gif ? 'visible' : 'hidden'}} onMouseEnter={() => setGif(true)} onMouseLeave={() => setGif(false)} class="proCard">
              <h3>Project 2</h3>
              <p>Short description</p>
              <motion.img whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={gifPro} />
              <p>onMouseEnter drop down for github source code, and live</p>
              </div>
              <button onMouseEnter={()=> setPoke(true)} style={{ visibility: poke ? 'hidden' : 'visible', height: '10%', position: 'absolute', top: '50%', left: '75%', transform: 'translate(-50%,-50%)'}}>Pokemon Catch</button>
            <div style={{visibility: poke ? 'visible' : 'hidden'}} onMouseEnter={() => setPoke(true)} onMouseLeave={() => setPoke(false)} class="proCard">
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
