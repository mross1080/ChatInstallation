import React, { useState } from 'react'

import { Switch, Route, NavLink, useLocation, Link } from "react-router-dom";


export function NavBar(props) {

    console.log("Props", props)
    console.log(props["testiomnyGroupUrl"])

    const [menuState, setMenuState] = useState(false)
    let preguntasActive = ""
    let videoActive = ""
    let testimoniesActive = ""
    let testimonyLinkUrl = (props["testiomnyGroupUrl"] == undefined ? "" : props["testiomnyGroupUrl"])

    


    console.log("Location : ", window.location.pathname)
    console.log("/chats/" + props["testiomnyGroupUrl"])
    if (window.location.pathname =="/") {
        preguntasActive = "linkActive"
    } else     if (window.location.pathname =="/video") {
        videoActive = "linkActive"
    } else if(window.location.pathname == "/" + props["testiomnyGroupUrl"]) {
        testimoniesActive = "linkActive"
    } 




    function updateMenuState() {
        console.log("I am in the super cool new state function")
        let newMenuState = !menuState;
        setMenuState(newMenuState)
    }

    return (<div className="container"><nav className={'no-shadows '}>
        <div className="nav-wrapper">

      <div className="siteTitle"> <Link to="/">¡SE BUSCAN TESTIGOS!</Link></div>


    <div className="navElementsContainer">
      <div className={"col s2 center-align navElement "}> <Link to="/" className={preguntasActive} >Preguntas</Link> </div>

      <div className="col s2 center-align navElement"> <Link to={`/${testimonyLinkUrl}`} className={testimoniesActive} ><span className={testimoniesActive} >Testimonios </span> </Link> </div>



                </div>

        </div>
    
     

    </nav></div>)

}