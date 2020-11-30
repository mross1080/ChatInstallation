import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route, NavLink, useLocation, Link } from "react-router-dom";
import About from "./About"
import LoomOne from './LoomOne';
import images from './imageStore'
import M from 'materialize-css/dist/js/materialize.min.js';
import $ from 'jquery'; 
import Select from 'react-select'


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
},
, {
    name: 'Loom Three',
    id: 'loom-three',
    description: 'Truly the best Looking loom of them all',
    photo_url: require('./assets/l.jpg'),
    full_description: "Drinking vinegar irony shabby chic art party, taxidermy pour-over listicle sriracha pop-up enamel pin. Ramps locavore drinking vinegar pug, wayfarers venmo waistcoat la croix chartreuse. Crucifix put a bird on it everyday carry hella vegan marfa. Asymmetrical wayfarers copper mug literally jean shorts glossier kombucha woke 8-bit mumblecore leggings XOXO aesthetic. Pabst blue bottle 90's church-key listicle hashtag, leggings live-edge gastropub 3 wolf moon hammock. Tattooed shabby chic chambray mumblecore activated charcoal photo booth banh mi twee pop-up lomo. Prism actually fixie, mixtape intelligentsia salvia activated charcoal retro fanny pack pitchfork paleo."
}



]





function ProjectContent({ match }) {
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


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
 
export default function Looms({ match }) {
    console.log("HELLO Im A MACHINE")

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});

        elems.forEach(function(el) {
            $(elems).on('change', updateAction)
          })
        
          function updateAction() {
            var selection = $(this).val();
          }

    });

    function handleSelection()
     {
        console.log(document.getElementById("CC"))
        console.log("I MADE A NEW CHOICE!!!")
        
        var instance = M.FormSelect.getInstance(document.getElementById("categories"));
        var instance2 = M.FormSelect.getInstance(document.getElementById("action"));

        console.log(instance.getSelectedValues())
        console.log(instance2.getSelectedValues())

        var selected_category = instance.getSelectedValues()[0]
        if (selected_category == "2") {
            console.log("LOOMG")
            document.getElementsByClassName("loomOneLink")[0].click()
        }

        if (selected_category == "4") {
            console.log("LOOMG")
            document.getElementsByTagName("a")[2].click()
        }
      
    }

    function change() {
        console.log("GOT A CHANGEEEE")
    }

    return (
        <div>
            <h3 class="center-align">Machines As Humans</h3>

            
            <div className="row">
                <div className="col s2">
                    <h5>I want to learn About</h5>  </div>
                <div id="CC" class="select-wrapper col s2">
                    <select id="categories" onChange={handleSelection}>
                    <option value="0" ></option>
                        <option value="1" >Textiles</option>
                        <option value="2">Computers</option>
                        <option value="4">Programming Languages</option>
                    </select>
                </div>
                <div className="col s2">
                    <h5>That</h5>  </div>
                <div class="input-field col s2">
                    <select id="action"  onChange={handleSelection}>
                        <option value="" disabled selected></option>
                        <option value="A">Use</option>
                        <option value="B">Change</option>
                        <option value="C">Understand</option>
                    </select>
                </div>
                <div class="input-field col s2">
                <Select onChange={change} options={options} />
                </div>
                <div className="button-nav col s1"><p>Show Me More</p></div>


            </div> <Link className="loomOneLink" to="/machinesashumans/loom-one">LOOM ONE</Link>
            {/* <div class="placeholder">
             

                <h3 class="center-align">PLACEHOLDER CONTENT</h3>

                <ul class="placeholderList">
                    {loom_data.map(({ name, id }) => (


                        <li key={id}>
                            <Link to={`${match.url}/${id}`}>{name}</Link>
                            <Link to={`${match.url}/${id}`}> <img className="responsive-img" src={images[0]["src"]} alt="Logo" ></img>  </Link>
                        </li>



                    ))}
                            <Link to="/machinesashumans/loom-one">LOOM ONE</Link>


                </ul>
            </div> */}

            {/* <Route path="/machinesashumans/loom-one" component={ProjectContent} /> */}
            <Route path={`${match.path}/:topicId`} component={ProjectContent} />
        </div>
    )
}

