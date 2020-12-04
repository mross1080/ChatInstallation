import React, { useState } from 'react'

import { Switch, Route, NavLink, useLocation, Link } from "react-router-dom";


export function NavBar(props) {

    const [menuState, setMenuState] = useState(false)

    function updateMenuState() {
        console.log("I am in the super cool new state function")
        let newMenuState = !menuState;
        setMenuState(newMenuState)
    }

    return (<div><nav className={'no-shadows '}>
        <div className="nav-wrapper">

        <div class="row">
      <div class="col s5 center-align siteTitle">¡SE BUSCAN TESTIGOS!</div>
      <div class="col s2  center-align navElement"><Link to="/video">Video </Link></div>

      <div class="col s2 center-align navElement"> <Link to="/chats">Preguntas</Link> </div>

      <div class="col s2 center-align navElement">Testimonios </div>

    </div>


        
        </div>
    
     

    </nav></div>)

}