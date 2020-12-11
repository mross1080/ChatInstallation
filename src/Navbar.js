import React, { useState } from 'react'

import { Switch, Route, NavLink, useLocation, Link } from "react-router-dom";


export function NavBar(props) {



    const [menuState, setMenuState] = useState(false)
    let preguntasActive = ""
    let videoActive = ""
    let testimoniesActive = ""


    console.log("Location : ", window.location.pathname)
    if (window.location.pathname =="/chats") {
        preguntasActive = "linkActive"
    } else     if (window.location.pathname =="/video") {
        videoActive = "linkActive"
    } else {
        testimoniesActive = "linkActive"
    } 




    function updateMenuState() {
        console.log("I am in the super cool new state function")
        let newMenuState = !menuState;
        setMenuState(newMenuState)
    }

    return (<div className="container"><nav className={'no-shadows '}>
        <div className="nav-wrapper">

      <div className="col s5 center-align siteTitle"> <Link to="/chats">¡SE BUSCAN TESTIGOS!</Link></div>
      <div className="col s2  center-align navElement"><Link className={videoActive} to="/video">Video </Link></div>

      <div className={"col s2 center-align navElement "}> <Link to="/chats" className={preguntasActive} >Preguntas</Link> </div>

      <div className="col s2 center-align navElement"> <span className={testimoniesActive} >Testimonios </span> </div>



        
        </div>
    
     

    </nav></div>)

}