import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import About from './About'
import Introduction from './Intro'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import HumansAsMachines from "./HumansAsMachines";


function App() {
  const location = useLocation();

  return (

    <div className="container" >
      <nav >
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="nav-item">
            <NavLink to="/humansasmachines" className="nav-link">
              Humans As Machines
              </NavLink>
          </li>
     
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">
              Home
              </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
              </NavLink>
          </li>
     
          </ul>
        </div>

     
      </nav>
      <div className="row">
       
        <main
          className=""

        >
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/about" component={About} />
              <Route path="/humansasmachines" component={HumansAsMachines} />

              <Route path="/" component={Introduction} />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 220,
    scale: 1
  },
  out: {
    opacity: 0,
    y: "100vw",
    scale: 1.2
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



// function Settings() {
//   return (
//     <motion.div
//       style={pageStyle}
//       className="row"
//       initial="initial"
//       animate="in"
//       exit="out"
//       variants={pageVariants}
//       transition={pageTransition}
//     >
//       <div className="col-md-8">
//         <h1>Settings</h1>
//         <form>
//           <fieldset>
//             <legend>Details</legend>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="name">Name</label>
//                 <input type="text" id="name" className="form-control" />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="email">Email</label>
//                 <input type="email" id="email" className="form-control" />
//               </div>
//             </div>
//           </fieldset>

//           <fieldset>
//             <legend>Preferences</legend>
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 id="large-labels"
//                 className="custom-control-input"
//               />
//               <label htmlFor="large-labels" className="custom-control-label">
//                 Use Larger Labels
//               </label>
//             </div>
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 id="email-opt-in"
//                 className="custom-control-input"
//               />
//               <label htmlFor="email-opt-in" className="custom-control-label">
//                 Receive Notifications by Email
//               </label>
//             </div>
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 id="hide-profile-pic"
//                 className="custom-control-input"
//               />
//               <label
//                 htmlFor="hide-profile-pic"
//                 className="custom-control-label"
//               >
//                 Show Profile Image
//               </label>
//             </div>
//           </fieldset>
//         </form>
//       </div>
//     </motion.div>
//   );
// }

// function Home() {
//   return (
//     <motion.div
//       style={pageStyle}
//       initial="initial"
//       animate="in"
//       exit="out"
//       variants={pageVariants}
//       transition={pageTransition}
//     >
//       <h1>Home</h1>
//       <p>
//         Let's animate transitions between React Router routes with Framer Motion
//       </p>
//     </motion.div>
//   );
// }

export default App;
