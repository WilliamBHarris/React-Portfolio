import "./App.css";
import Nav from "./Components/Nav";
import { useState, useEffect } from "react";
import Main from "./Components/Main";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { AnimatePresence } from "framer-motion";
import Footer from "./Components/Footer";
import Group6 from './assets/Group6.png'
import Bg from './assets/bg.png'

import { motion } from "framer-motion";

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mainBox"
    >
      {loading ? (
        <div className="loader">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="loadingText"
          >
            <motion.p
              initial={{ x: -25 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="loadW"
            >
              w
            </motion.p>
            <motion.p
              initial={{ x: 25 }}
              animate={{ x: 0, fontWeight: "bold" }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="loadH"
            >
              H
            </motion.p>
          </motion.div>
          <ScaleLoader size={500} color={"#17252A"} loading={loading} />
        </div>
      ) : (
        <motion.div
          style={{}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >


          <motion.div
            initial={{ opacity: 0.8, y: 20, x: 303 }}
            animate={{ opacity: 1, x: 370, y: -10 }}
            transition={{
              duration: 4,
              repeatType: "reverse",
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="backCircle"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0.8, y: 10, x: 303 }}
            animate={{ x: 360, y: 0, opacity: 1 }}
            transition={{
              duration: 3,
              repeatType: "reverse",
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="backCircle2"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0.8, y: -30, x: 303 }}
            animate={{ x: 380, y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              repeatType: "reverse",
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="backCircle3"
          ></motion.div>
          {/* <motion.h1
            initial={{ opacity: 0, x: 300, rotate: -90 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 1 }}
            className="main-right-border"
          >
            Web Developer
          </motion.h1> */}

          {/* <svg className="main-firstName-border" width="701" height="317" viewBox="0 0 701 317" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M325.781 0.789062L289.258 317H186.523C177.148 268.432 168.88 213.224 161.719 151.375C158.464 177.807 150.846 233.016 138.867 317H36.7188L0 0.789062H79.8828L88.2812 111.141L96.875 217.586C99.8698 162.508 107.422 90.2422 119.531 0.789062H205.078C206.25 10.0339 209.245 44.7995 214.062 105.086L223.047 225.203C227.604 148.771 235.221 73.9661 245.898 0.789062H325.781Z" fill="none" stroke="white" strokeWidth="5"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M441.094 0.789062V42H359.844V0.789062H441.094ZM441.094 57.8203V317H359.844V57.8203H441.094Z" fill="none" stroke="white" strokeWidth="5"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M570.859 0.789062V317H489.609V0.789062H570.859Z" fill="none" stroke="white" strokeWidth="5"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M700.625 0.789062V317H619.375V0.789062H700.625Z" stroke="white" strokeWidth="5" fill="none"/>
</svg>


<svg className="main-lastName-border" width="1096" height="332" viewBox="0 0 1096 332" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1_2_19" maskUnits="userSpaceOnUse" x="0.40625" y="0.789062" width="1096" height="331" fill="black">
<rect fill="white" x="0.40625" y="0.789062" width="1096" height="331"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M194.469 5.78906V322H112.242V189.188H87.6328V322H5.40625V5.78906H87.6328V118.875H112.242V5.78906H194.469Z"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M315.836 163.211H241.812V145.828C241.812 125.776 244.091 110.346 248.648 99.5391C253.336 88.6016 262.646 78.9661 276.578 70.6328C290.51 62.2995 308.609 58.1328 330.875 58.1328C357.568 58.1328 377.685 62.8854 391.227 72.3906C404.768 81.7656 412.906 93.3542 415.641 107.156C418.375 120.828 419.742 149.083 419.742 191.922V322H342.984V298.953C338.167 308.198 331.917 315.164 324.234 319.852C316.682 324.409 307.633 326.688 297.086 326.688C283.284 326.688 270.589 322.846 259 315.164C247.542 307.352 241.812 290.359 241.812 264.188V242.898C241.812 223.497 244.872 210.281 250.992 203.25C257.112 196.219 272.281 188.016 296.5 178.641C322.411 168.484 336.279 161.648 338.102 158.133C339.924 154.617 340.836 147.456 340.836 136.648C340.836 123.107 339.794 114.318 337.711 110.281C335.758 106.115 332.438 104.031 327.75 104.031C322.411 104.031 319.091 105.789 317.789 109.305C316.487 112.69 315.836 121.609 315.836 136.062V163.211ZM340.836 198.758C328.206 208.003 320.849 215.75 318.766 222C316.812 228.25 315.836 237.234 315.836 248.953C315.836 262.365 316.682 271.023 318.375 274.93C320.198 278.836 323.714 280.789 328.922 280.789C333.87 280.789 337.06 279.292 338.492 276.297C340.055 273.172 340.836 265.099 340.836 252.078V198.758Z"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M545.797 62.8203L542.672 96.8047C554.13 72.4557 570.732 59.5651 592.477 58.1328V149.344C578.023 149.344 567.411 151.297 560.641 155.203C553.87 159.109 549.703 164.578 548.141 171.609C546.578 178.51 545.797 194.526 545.797 219.656V322H466.891V62.8203H545.797Z"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M709.156 62.8203L706.031 96.8047C717.49 72.4557 734.091 59.5651 755.836 58.1328V149.344C741.383 149.344 730.771 151.297 724 155.203C717.229 159.109 713.062 164.578 711.5 171.609C709.938 178.51 709.156 194.526 709.156 219.656V322H630.25V62.8203H709.156Z"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M874.859 5.78906V47H793.609V5.78906H874.859ZM874.859 62.8203V322H793.609V62.8203H874.859Z"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M1084.51 145.633H1014.59V131.57C1014.59 119.591 1013.87 112.039 1012.44 108.914C1011.14 105.659 1007.75 104.031 1002.28 104.031C997.854 104.031 994.534 105.529 992.32 108.523C990.107 111.388 989 115.75 989 121.609C989 129.552 989.521 135.411 990.562 139.188C991.734 142.833 995.055 146.87 1000.52 151.297C1006.12 155.724 1017.52 162.169 1034.7 170.633C1057.62 181.831 1072.66 192.378 1079.82 202.273C1086.98 212.169 1090.56 226.557 1090.56 245.438C1090.56 266.531 1087.83 282.482 1082.36 293.289C1076.89 303.966 1067.71 312.234 1054.82 318.094C1042.06 323.823 1026.63 326.688 1008.53 326.688C988.479 326.688 971.292 323.562 956.969 317.312C942.776 311.062 933.01 302.599 927.672 291.922C922.333 281.245 919.664 265.099 919.664 243.484V230.984H989.586V247.391C989.586 261.323 990.432 270.372 992.125 274.539C993.948 278.706 997.464 280.789 1002.67 280.789C1008.27 280.789 1012.18 279.422 1014.39 276.688C1016.6 273.823 1017.71 267.898 1017.71 258.914C1017.71 246.544 1016.28 238.797 1013.41 235.672C1010.42 232.547 995.12 223.302 967.516 207.938C944.339 194.917 930.211 183.133 925.133 172.586C920.055 161.909 917.516 149.279 917.516 134.695C917.516 113.992 920.25 98.7578 925.719 88.9922C931.188 79.0964 940.432 71.4792 953.453 66.1406C966.604 60.8021 981.839 58.1328 999.156 58.1328C1016.34 58.1328 1030.93 60.3464 1042.91 64.7734C1055.02 69.0703 1064.26 74.7995 1070.64 81.9609C1077.15 89.1224 1081.06 95.763 1082.36 101.883C1083.79 108.003 1084.51 117.573 1084.51 130.594V145.633Z"/>
</mask>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M194.469 5.78906V322H112.242V189.188H87.6328V322H5.40625V5.78906H87.6328V118.875H112.242V5.78906H194.469Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1_2_19)"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M315.836 163.211H241.812V145.828C241.812 125.776 244.091 110.346 248.648 99.5391C253.336 88.6016 262.646 78.9661 276.578 70.6328C290.51 62.2995 308.609 58.1328 330.875 58.1328C357.568 58.1328 377.685 62.8854 391.227 72.3906C404.768 81.7656 412.906 93.3542 415.641 107.156C418.375 120.828 419.742 149.083 419.742 191.922V322H342.984V298.953C338.167 308.198 331.917 315.164 324.234 319.852C316.682 324.409 307.633 326.688 297.086 326.688C283.284 326.688 270.589 322.846 259 315.164C247.542 307.352 241.812 290.359 241.812 264.188V242.898C241.812 223.497 244.872 210.281 250.992 203.25C257.112 196.219 272.281 188.016 296.5 178.641C322.411 168.484 336.279 161.648 338.102 158.133C339.924 154.617 340.836 147.456 340.836 136.648C340.836 123.107 339.794 114.318 337.711 110.281C335.758 106.115 332.438 104.031 327.75 104.031C322.411 104.031 319.091 105.789 317.789 109.305C316.487 112.69 315.836 121.609 315.836 136.062V163.211ZM340.836 198.758C328.206 208.003 320.849 215.75 318.766 222C316.812 228.25 315.836 237.234 315.836 248.953C315.836 262.365 316.682 271.023 318.375 274.93C320.198 278.836 323.714 280.789 328.922 280.789C333.87 280.789 337.06 279.292 338.492 276.297C340.055 273.172 340.836 265.099 340.836 252.078V198.758Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1_2_19)"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M545.797 62.8203L542.672 96.8047C554.13 72.4557 570.732 59.5651 592.477 58.1328V149.344C578.023 149.344 567.411 151.297 560.641 155.203C553.87 159.109 549.703 164.578 548.141 171.609C546.578 178.51 545.797 194.526 545.797 219.656V322H466.891V62.8203H545.797Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1_2_19)"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M709.156 62.8203L706.031 96.8047C717.49 72.4557 734.091 59.5651 755.836 58.1328V149.344C741.383 149.344 730.771 151.297 724 155.203C717.229 159.109 713.062 164.578 711.5 171.609C709.938 178.51 709.156 194.526 709.156 219.656V322H630.25V62.8203H709.156Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1_2_19)"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M874.859 5.78906V47H793.609V5.78906H874.859ZM874.859 62.8203V322H793.609V62.8203H874.859Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1_2_19)"/>
<motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}  transition={{duration: 4}} d="M1084.51 145.633H1014.59V131.57C1014.59 119.591 1013.87 112.039 1012.44 108.914C1011.14 105.659 1007.75 104.031 1002.28 104.031C997.854 104.031 994.534 105.529 992.32 108.523C990.107 111.388 989 115.75 989 121.609C989 129.552 989.521 135.411 990.562 139.188C991.734 142.833 995.055 146.87 1000.52 151.297C1006.12 155.724 1017.52 162.169 1034.7 170.633C1057.62 181.831 1072.66 192.378 1079.82 202.273C1086.98 212.169 1090.56 226.557 1090.56 245.438C1090.56 266.531 1087.83 282.482 1082.36 293.289C1076.89 303.966 1067.71 312.234 1054.82 318.094C1042.06 323.823 1026.63 326.688 1008.53 326.688C988.479 326.688 971.292 323.562 956.969 317.312C942.776 311.062 933.01 302.599 927.672 291.922C922.333 281.245 919.664 265.099 919.664 243.484V230.984H989.586V247.391C989.586 261.323 990.432 270.372 992.125 274.539C993.948 278.706 997.464 280.789 1002.67 280.789C1008.27 280.789 1012.18 279.422 1014.39 276.688C1016.6 273.823 1017.71 267.898 1017.71 258.914C1017.71 246.544 1016.28 238.797 1013.41 235.672C1010.42 232.547 995.12 223.302 967.516 207.938C944.339 194.917 930.211 183.133 925.133 172.586C920.055 161.909 917.516 149.279 917.516 134.695C917.516 113.992 920.25 98.7578 925.719 88.9922C931.188 79.0964 940.432 71.4792 953.453 66.1406C966.604 60.8021 981.839 58.1328 999.156 58.1328C1016.34 58.1328 1030.93 60.3464 1042.91 64.7734C1055.02 69.0703 1064.26 74.7995 1070.64 81.9609C1077.15 89.1224 1081.06 95.763 1082.36 101.883C1083.79 108.003 1084.51 117.573 1084.51 130.594V145.633Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1_2_19)"/>
</svg> */}

<img src={Group6} alt='background' className='group6' />
<img src={Bg} alt='background' className='bg' />

          <Nav />
          <Footer />
          <AnimatePresence exitBeforeEnter initial={true}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          
        </motion.div>
      )}
    </motion.main>
  );
}

export default App;
