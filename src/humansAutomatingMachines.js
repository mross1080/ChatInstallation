import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route, NavLink, useLocation, Link } from "react-router-dom";
import About from "./About"
import LoomOne from './LoomOne';
import images from './imageStore'
import machinesAsHumans from './machinesAsHumans'
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


const loom_data = [{
    name: 'Loom One',
    id: 'loom-one',
    description: 'This is a detailed description of loom one ',
    photo_url: require('./assets/l2.jpg'),
    full_description: "You probably haven't heard of them 3 wolf moon listicle poutine, raw denim retro butcher brunch authentic kale chips. Tumblr kickstarter four dollar toast trust fund, blue bottle hexagon everyday carry food truck health goth jianbing ramps umami air plant. Aesthetic venmo celiac, cloud bread church-key pinterest flannel heirloom lyft. Af craft beer crucifix skateboard hoodie, pug microdosing meggings knausgaard marfa messenger bag YOLO trust fund. Portland waistcoat pabst typewriter chambray edison bulb."
}, {
    name: 'Loom Two',
    id: 'loom-two',
    description: 'A much better Loom',
    photo_url: require('./assets/l.jpg'),
    full_description: "Drinking vinegar irony shabby chic art party, taxidermy pour-over listicle sriracha pop-up enamel pin. Ramps locavore drinking vinegar pug, wayfarers venmo waistcoat la croix chartreuse. Crucifix put a bird on it everyday carry hella vegan marfa. Asymmetrical wayfarers copper mug literally jean shorts glossier kombucha woke 8-bit mumblecore leggings XOXO aesthetic. Pabst blue bottle 90's church-key listicle hashtag, leggings live-edge gastropub 3 wolf moon hammock. Tattooed shabby chic chambray mumblecore activated charcoal photo booth banh mi twee pop-up lomo. Prism actually fixie, mixtape intelligentsia salvia activated charcoal retro fanny pack pitchfork paleo."
}]





function Loom({ match }) {
    const loom = loom_data.find(({ id }) => id === match.params.topicId)

    return (


        <div class="loomContent">
            <div class="">
                <div class="row">
                    <h2>{loom.name}</h2>
                    <p>{loom.description}</p>

                </div>
                <div class="row">
                    <div class="col s6"> <img className="responsive-img" src={loom.photo_url} alt="Logo" ></img> </div>
                    <div class="col s6"><p><span className="">{loom.full_description}</span></p></div>


                </div>

            </div>

        </div>
    )
}


export default function Looms({ match }) {
    return (
        <div>
            <div class="stationText">
                <h3 class="center-align">Humans Automating Machines</h3>
                <p class="center-align">I'm baby normcore disrupt palo santo tacos bicycle rights waistcoat food truck hammock vaporware cred polaroid listicle fam af. Microdosing wolf unicorn, activated charcoal freegan chambray chartreuse cornhole prism. Prism neutra scenester, venmo asymmetrical chillwave messenger bag photo booth kinfolk cornhole 3 wolf moon. Copper mug umami chia seitan freegan meditation adaptogen blog microdosing readymade. Vexillologist austin glossier helvetica, lo-fi keffiyeh seitan humblebrag thundercats try-hard whatever. +1 schlitz DIY wayfarers, craft beer blog messenger bag hell of actually.</p>
            </div>
            <div class="placeholder">
                {/* <img src={loom1} alt="Logo" />; */}

                <h3 class="center-align">PLACEHOLDER CONTENT</h3>

                {/* <ul class="placeholderList">
                    {loom_data.map(({ name, id }) => (


                        <li key={id}>
                            <Link to={`${match.url}/${id}`}>{name}</Link>
                            <Link to={`${match.url}/${id}`}> <img className="responsive-img" src={images[0]["src"]} alt="Logo" ></img>  </Link>
                        </li>



                    ))}
                </ul> */}
            </div>


            <Route path={`${match.path}/:topicId`} component={Loom} />
            <div class="center-align"><NavLink to='/machinesAsHumans'>Next Station</NavLink></div>
      
      <Route exact path='/machinesAsHumans' component={machinesAsHumans} />
            
        </div>
    )
}

