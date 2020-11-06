import React from 'react'
import {Route, Link} from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
import { Button } from 'react-materialize';
import About from './About'

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 100,
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
export default function Home() {
    return (
        <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div>
  
          <br></br>
          <br></br>
          <br></br>
          <h6 className="center-align">The Gottesman Libraries at Teachers College welcomes you to the exhibition</h6>
          <br></br>
          <br></br>
          <br></br>
  
          <div>
            <h3 className="center-align">Warping The Future</h3>
            <h5 className="center-align">How Craft Led To The Digital World As We Know</h5>
            <br></br>
            <br></br>
            <br></br>
            <h6 className="center-align">The interactive exhibition explores the connection between the history of crafting and the history of computing.
                    </h6>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="container">
            <div className="row">
              <div className="col s4 center-align"></div>
              <div className="col s4 center-align">  <p>planning to see the exhibition in person?</p> <div className="button-nav"><h5>SCHEDULE VISIT</h5></div></div>
              <div className="col s4 center-align"></div>
            </div>
            <Link to='/about'>Home</Link>
            <Button>
                <p>Hello</p>
                <Route exact path='/about' component={About} />
            </Button>
  
          </div>
        </div>
      </motion.div>
    );
  }