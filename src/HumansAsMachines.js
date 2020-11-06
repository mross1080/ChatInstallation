import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route, NavLink, useLocation, Link } from "react-router-dom";
import About from "./About"
import LoomOne from './LoomOne';
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

const Dashboard= () => <h2>You are in the Dashboard</h2>
const Profile= () => <h2>You are in the Profile</h2>
const User = ({ match }) => (
  <div>
    <h3>This is the profile of {match.params.userId}</h3>
  </div>
)

const Users = ({ match }) => (
  <div>
    <h2>You are in the Users</h2>
    <ul>
      <li>
        <Link to={`${match.url}/nicole`}>
          Nicole Larssen
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/mike`}>
          Mike James
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/mia`}>
          Mia Barnes
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:userId`} component={User}/>
    <Route exact path={match.url} render={() => (
      <h5>Please select a user.</h5>
    )}/>
  </div>
)

export default function HumansAsMachines() {


    
    return (

            <div>

                <br></br>
                <br></br>
                <br></br>
                <h3 className="center-align">Humans As Machines</h3>
                <br></br>
                <br></br>
                <br></br>

                <ul role="nav">
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><NavLink to="/loomone">Loom One</NavLink></li>
                </ul>

                <Switch>
                <div>
                    <Route path='/about' component={About} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/loomone' component={LoomOne} />
                </div>
                </Switch>
    
            </div>
    
    );
}