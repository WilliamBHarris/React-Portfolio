import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import PortfolioImage from "../assets/projectPortfolio.png";
import choreMeProject from "../assets/choreMeProject.png";
import graffiProject from "../assets/graffiProject.png";
import pokePro from "../assets/pokePro.png";
import gifPro from "../assets/gifPro.png";
import workoutPro from "../assets/workoutPro.png";

const Work = () => {
  const [graffi, setGraffi] = useState(true);
  const [chore, setChore] = useState(false);
  const [port, setPort] = useState(false);
  const [work, setWork] = useState(false);
  const [gif, setGif] = useState(false);
  const [poke, setPoke] = useState(false);

  const graffiClick = () => {
    setGraffi(!graffi);
    setChore(false);
    setPort(false);
    setWork(false);
    setGif(false);
    setPoke(false);
  };
  const choreClick = () => {
    setGraffi(false);
    setChore(!chore);
    setPort(false);
    setWork(false);
    setGif(false);
    setPoke(false);
  };
  const portClick = () => {
    setGraffi(false);
    setChore(false);
    setPort(!port);
    setWork(false);
    setGif(false);
    setPoke(false);
  };
  const workClick = () => {
    setGraffi(false);
    setChore(false);
    setPort(false);
    setWork(!work);
    setGif(false);
    setPoke(false);
  };
  const gifClick = () => {
    setGraffi(false);
    setChore(false);
    setPort(false);
    setWork(false);
    setGif(!gif);
    setPoke(false);
  };
  const pokeClick = () => {
    setGraffi(false);
    setChore(false);
    setPort(false);
    setWork(false);
    setGif(false);
    setPoke(!poke);
  };

  return (
    <motion.div>
      <div className="workMain" id='work'>
        <motion.div
          initial={{ scale: 0, opacity: 0, y: "100vh" }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ scale: 0, opacity: 0, y: "-100vh" }}
          className="workBox"
        >
          <div className="projectBox1">
            <button onClick={graffiClick}>Graffi Tees</button>

            <button onClick={choreClick}>Chore Me</button>

            <button onClick={portClick}>Portfolio</button>
          </div>
          <AnimatePresence exitBeforeEnter>
            {graffi ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                style={{
                  visibility: graffi ? "visible" : "hidden",
                }}
                className="proCard"
              >
                <motion.img
                  whileHover={{ scale: 1, transition: { duration: 0.3 } }}
                  alt="project"
                  className="portfolioImage"
                  src={graffiProject}
                />
                <div className='workBg'>
                <h3>Graffi Tees</h3>
                <p>Full stack e-commerce website</p>
                </div>
                <div className="workLinks">
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://github.com/WilliamBHarris/EFA-FINAL-CLIENT">github</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://wbh-final-client.herokuapp.com/">live</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://github.com/WilliamBHarris/EFA-FINAL-CLIENT/blob/main/src/App.tsx">code</a>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className="contactTitle"
                style={{ color: "red" }}
              >
                More to
                <span
                  style={{ color: "white" }}
                  className="connectSpan"
                >
                  COME...
                </span>
              </motion.h1>
            )}
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            {chore ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                style={{
                  visibility: chore ? "visible" : "hidden",
                }}
                className="proCard"
              >
                <motion.img
                  whileHover={{ scale: 1, transition: { duration: 0.3 } }}
                  alt="project"
                  className="portfolioImage"
                  src={choreMeProject}
                />
                <div className='workBg'>
                <h3>Chore Me</h3>
                <p>Full stack chore organizer</p>
                </div>
                <div className="workLinks">
                  <div>
                    <a rel="noreferrer" target='_blank'  href="https://github.com/darahdesigner/Client-ChoreMe">github</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://dls-choreme-client.herokuapp.com/">live</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://github.com/darahdesigner/Client-ChoreMe/blob/master/src/App.js">code</a>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            {port ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                style={{
                  visibility: port ? "visible" : "hidden",
                }}
                className="proCard"
              >
                <div className='workBg'>
                <h3>My First Portfolio</h3>
                <p>Built using HTML and CSS</p>
                </div>
                <motion.img
                  whileHover={{ scale: 1, transition: { duration: 0.3 } }}
                  alt="project"
                  className="portfolioImage"
                  src={PortfolioImage}
                />
                <div className="workLinks">
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://github.com/WilliamBHarris/WilliamBHarris.github.io">github</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://williambharris.github.io/">live</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://github.com/WilliamBHarris/WilliamBHarris.github.io/blob/main/index.html">code</a>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            {work ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                style={{
                  visibility: work ? "visible" : "hidden",
                }}
                className="proCard"
              >
                <div className='workBg'>
                <h3>Workout Log</h3>
                <p>Full stack workout logger.</p>
                </div>
                <motion.img
                  whileHover={{ scale: 1, transition: { duration: 0.3 } }}
                  alt="project"
                  className="portfolioImage"
                  src={workoutPro}
                />
                <div className="workLinks">
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://github.com/WilliamBHarris/WorkoutLogClient">github</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="live">live</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://github.com/WilliamBHarris/WorkoutLogClient/blob/main/src/App.js">code</a>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            {gif ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                style={{
                  visibility: gif ? "visible" : "hidden",
                }}
                className="proCard"
              >
                <div className='workBg'>
                <h3>Gif Finder</h3>
                <p>Gif finder using giffy API</p>
                </div>
                <motion.img
                  whileHover={{ scale: 1, transition: { duration: 0.3 } }}
                  alt="project"
                  className="portfolioImage"
                  src={gifPro}
                />
               <div className="workLinks">
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://github.com/WilliamBHarris/APIProject2">github</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="live">live</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://github.com/WilliamBHarris/APIProject2/blob/main/public/index.html">code</a>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            {poke ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                style={{
                  visibility: poke ? "visible" : "hidden",
                }}
                className="proCard"
              >
                <div className='workBg'>
                <h3>Poke Catch</h3>
                <p>Poke game, using Pokemon API</p>
                </div>
                <motion.img
                  whileHover={{ scale: 1, transition: { duration: 0.3 } }}
                  alt="project"
                  className="portfolioImage"
                  src={pokePro}
                />
                <div className="workLinks">
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://github.com/WilliamBHarris/apiProject1">github</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="live">live</a>
                  </div>
                  <div>
                    <a rel="noreferrer" target='_blank' href="https://github.com/WilliamBHarris/apiProject1/blob/main/index.html">code</a>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
          <div className="projectBox1">
            <button onClick={workClick}>Workout Log</button>

            <button onClick={gifClick}>Gif Finder</button>

            <button onClick={pokeClick}>Poke' Catch</button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
