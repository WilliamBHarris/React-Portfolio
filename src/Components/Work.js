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
          initial={{scale: 0, opacity: 0, y: "100vh" }}
          animate={{scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ scale: 0,opacity: 0, y: "-100vh" }}
          className="workBox"
        >
          <div className="projectBox1">
          <button onClick={()=> setGraffi(!graffi)} style={{ visibility: graffi ? 'visible' : 'visible', height: '10%', position: 'absolute', top: '45%', left: '3%', transform: 'translate(50%,-50%)'}}>Graffi</button>
          
              <button onClick={()=> setChore(!chore)} style={{ visibility: chore ? 'visible' : 'visible', height: '10%', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%,-50%)'}}>Chore Me</button>
            
              <button onClick={()=> setPort(!port)} style={{ visibility: port ? 'visible' : 'visible', height: '10%', position: 'absolute', top: '45%', left: '90%', transform: 'translate(-50%,-50%)'}}>Portfolio v.1</button>
            
          </div>
          {graffi ?  <div style={{visibility: graffi ? 'visible' : 'hidden', height: '50%', width: '60%', position: 'absolute', bottom: '0', border: '1px solid black', transform: 'translate(0%,-50%)'}}  class="proCard">
            
            <motion.img  whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={graffiProject} />
              <h3>Project 1</h3>
              <p>Short description</p>
              
              <p>onMouseEnter drop down for github source code, and live</p>
              </div> : <h1 className="contactTitle" style={{ color: "#17252A" }}>
            More to
            <span
              style={{ color: "rgb(234, 233, 233)" }}
              className="connectSpan"
            >
              COME...
            </span>
          </h1>}
          {chore ?  <div style={{visibility: chore ? 'visible' : 'hidden', height: '50%', width: '60%', position: 'absolute', bottom: '0', border: '1px solid black', transform: 'translate(0%,-50%)'}} class="proCard">
            
            <motion.img  whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={choreMeProject} />
              <h3>Project 2</h3>
              <p>Short description</p>
              <p>onMouseEnter drop down for github source code, and live</p>
              </div> : null}
          {port ?  <div style={{visibility: port ? 'visible' : 'hidden', height: '50%', width: '60%', position: 'absolute', bottom: '0', border: '1px solid black', transform: 'translate(0%,-50%)'}}  class="proCard">
              <h3>Project 3</h3>
              <p>Short description</p>
              <motion.img whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={PortfolioImage} />
              <p>onMouseEnter drop down for github source code, and live</p>
              </div> : null}
          {work ? <div style={{visibility: work ? 'visible' : 'hidden', height: '50%', width: '60%', position: 'absolute', bottom: '0', border: '1px solid black', transform: 'translate(0%,-50%)'}} class="proCard">
              <h3>Project 1</h3>
              <p>Short description</p>
              <motion.img whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={workoutPro} />
              <p>onMouseEnter drop down for github source code, and live</p>
              </div> : null}

          {gif ? <div style={{visibility: gif ? 'visible' : 'hidden', height: '50%', width: '60%', position: 'absolute', bottom: '0', border: '1px solid black', transform: 'translate(0%,-50%)'}} class="proCard">
              <h3>Project 2</h3>
              <p>Short description</p>
              <motion.img whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={gifPro} />
              <p>onMouseEnter drop down for github source code, and live</p>
              </div> : null}
              {poke ? <div style={{visibility: poke ? 'visible' : 'hidden', height: '50%', width: '60%', position: 'absolute', bottom: '0', border: '1px solid black', transform: 'translate(0%,-50%)'}}  class="proCard">
              <h3>Project 3</h3>
              <p>Short description</p>
              <motion.img whileHover={{scale: 1.2, transition: {duration: .3}}} alt='project' className='portfolioImage' src={pokePro} />
              <p>onMouseEnter drop down for github source code, and live</p>
              </div> : null}
          <div className="projectBox1">
          <button onClick={()=> setWork(!work)} style={{ visibility: work ? 'visible' : 'visible', height: '10%', position: 'absolute', top: '55%', left: '12%', transform: 'translate(-50%,-50%)'}}>Workout Log</button>
            
              <button onClick={()=> setGif(!gif)} style={{ visibility: gif ? 'visible' : 'visible', height: '10%', position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%,-50%)'}}>Gif Finder</button>
            
              <button onClick={()=> setPoke(!poke)} style={{ visibility: poke ? 'visible' : 'visible', height: '10%', position: 'absolute', top: '55%', left: '91%', transform: 'translate(-50%,-50%)'}}>Poke' Catch</button>
            
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
