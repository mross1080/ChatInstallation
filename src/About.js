import React from 'react'
import { AnimatePresence, motion } from "framer-motion";


const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "50vw",
    scale: 1
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const pageStyle = {
  position: "absolute"
};
export default function About() {
  return (
    // <motion.div
    //   style={pageStyle}
    //   initial="initial"
    //   animate="in"
    //   exit="out"
    //   variants={pageVariants}
    //   transition={pageTransition}
    // >
      <div>

        <br></br>
        <br></br>

        <div>
          <h5 className="center-align">The interactive exhibition explores the connection between the history of crafting and the history of computing. 
</h5>
          <br></br>
          <br></br>
          <br></br>
          <h6 className="center-align">Some of this exhibition’s content is available through Augmented Reality. You can activate it through your phone or tablet.

                  </h6>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col s4 center-align"></div>
            <div className="col s4 center-align">  <div className="button-nav"><h5>Start Exhibition</h5></div></div>
            <div className="col s4 center-align"></div>
          </div>


        </div>
      </div>
    // </motion.div>
  );
}