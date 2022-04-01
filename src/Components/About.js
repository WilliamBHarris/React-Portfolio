import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiAdobe } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BsFilePerson } from "react-icons/bs";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { AiOutlineArrowUp } from "react-icons/ai";


const About = () => {
  const [info, setInfo] = useState(false);
  const [lang, setLang] = useState(false);
  const [person, setPerson] = useState(false);
  const [subtitle, setSubtitle] = useState("");

  const handleClickLang = () => {
    setInfo(false);
    setLang(!lang);
    setPerson(false);
  };
  const handleClickInfo = () => {
    setInfo(!info);
    setLang(false);
    setPerson(false);
  };
  const handleClickPerson = () => {
    setInfo(false);
    setLang(false);
    setPerson(!person);
  };

  const handleRover = () => {
    setSubtitle("info.");
  };
  const handleRover1 = () => {
    setSubtitle("pictures.");
  };
  const handleRover2 = () => {
    setSubtitle("code.");
  };
  const handleRoverOut = () => {
    setSubtitle(false);
  };

  const style = {
    active: {
      color: info ? "rgb(0, 0, 0, .3)" : "black",
    },
    active1: {
      color: lang ? "rgb(0, 0, 0, .3)" : "black",
    },
    active2: {
      color: person ? "rgb(0, 0, 0, .3)" : "black",
    },
    active3: {
      display: person || lang || info ? "none" : "block",
    },
    active5: {
      display: subtitle ? "block" : "none",
    },
  };

  return (
    <motion.div>
      <div className="AboutMain">
        <motion.div
          
          initial={{ opacity: 1, scale: 0, y: '100vh' }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .5, delay: 0 }}
          exit={{ opacity: 0, y: '-100vh', transition: { duration: 0.5, delay: 0 } }}
          className="aboutBox"
        >
 
          <div className='titleBox'>
          <h1 className="aboutTitle">Hello</h1>
          <h1 className="connectSpan aboutTitle">WORLD!</h1>
          </div>
          <div className='iconBox'>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
            className="infoIcon"
          >
            <BsFillInfoSquareFill
              className="socialLogo"
              style={style.active}
              onMouseEnter={handleRover}
              onMouseLeave={handleRoverOut}
              onClick={handleClickInfo}
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }}
            className="langIcon"
          >
            {" "}
            <MdOutlineDeveloperMode
              className="socialLogo"
              onMouseEnter={handleRover2}
              onMouseLeave={handleRoverOut}
              style={style.active1}
              onClick={handleClickLang}
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5 } }}
            className="personIcon"
          >
            <BsFilePerson
              className="socialLogo"
              onMouseEnter={handleRover1}
              onMouseLeave={handleRoverOut}
              style={style.active2}
              onClick={handleClickPerson}
            />
          </motion.div>
          <div className='chooseBox'>
            <AnimatePresence exitBeforeEnter>
              {!info && !lang && !person ? (
                <>
                  {!subtitle ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="chooseIcon"
                      exit={{ opacity: 0, transition: { duration: 0.3 } }}
                      style={{
                        visibility: !subtitle ? "visible" : "hidden",
                      }}
                    >
                      <AiOutlineArrowUp
                        style={{ marginRight: "10px", paddingTop: "5px" }}
                      />
                      Choose an icon
                      <AiOutlineArrowUp
                        style={{ marginLeft: "10px", paddingTop: "5px" }}
                      />
                    </motion.p>
                  ) : (
                    <p className="subtitleText" style={style.active5}>
                      {subtitle}
                    </p>
                  )}
                </>
              ) : null}
            </AnimatePresence>
          </div>
          </div>
          
          
          <AnimatePresence exitBeforeEnter>
            {info && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className="infoBox"
              >
                <p className="aboutText">
                  Hello! I am a Tampa, FL based freelance web developer.
                </p>
                <p className="aboutText">
                  Focused on learning more about code everyday.
                </p>
                <p className="aboutText">
                  Working hard to create opportunities.
                </p>
                <p className="aboutText">All in pursuit to land a job.</p>
           
              </motion.div>
            )}
          </AnimatePresence>
              
          <AnimatePresence exitBeforeEnter>
            {lang && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className="langDiv"
              >
                <h1 className="langTitle">
                  Current{" "}
                  <span
                    style={{
                      background: "#17252A",
                      color: "white",
                      padding: 20,
                      borderRadius: 10,
                    }}
                  >
                    FOCUS.
                  </span>
                </h1>
                <div className="techIcons">
                  <SiJavascript className="socialLogo" />
                  <SiHtml5 className="socialLogo" />
                  <SiCss3 className="socialLogo" />
                  <SiReact className="socialLogo" />
                  <SiNodedotjs className="socialLogo" />
                  <SiPostgresql className="socialLogo" />
                  <SiTypescript className="socialLogo" />
                  <SiAdobe className="socialLogo" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            {person && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className="langDiv"
              >
                <div className="aboutImages" scroll>
                  <div className="imgDiv">
                    <img
                      alt="this is me"
                      src="https://picsum.photos/id/200/300"
                    />
                  </div>
                  <div className="imgDiv">
                    <img
                      alt="this is me"
                      src="https://picsum.photos/id/201/300"
                    />
                  </div>
                  <div className="imgDiv">
                    <img
                      alt="this is me"
                      src="https://picsum.photos/id/202/300"
                    />
                  </div>
                  <div className="imgDiv">
                    <img
                      alt="this is me"
                      src="https://picsum.photos/id/203/300"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
