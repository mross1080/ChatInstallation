import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link, withRouter,
    useHistory, useLocation, browserHistory
} from 'react-router-dom'


import Linkify from 'react-linkify';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import TestimonyDB from "./TestimonyDB.json"
import { NavBar } from './Navbar';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './ChatApp.css';



const Testimony = ({ match }) => {


    const [showModal, setShowModal] = useState(false)
    const [modalImgLocation, setModalImgLocation] = useState("")

    function displayImgModal(imgLoc) {
        console.log("Showing modal ", imgLoc)
        setModalImgLocation(imgLoc)
        setShowModal(true)
    }

    function closeModal() {
        setShowModal(false)
    }

    let numberId = (Number(match.params.testimonyId) - 1)
    console.log(match)
    console.log("IN RESOURCEEEEE")
    const testimony = TestimonyDB
        .find(({ id }) => id === match.params.testimonyGroupId)
        .data[numberId]

    const testimoniesForGroup = TestimonyDB
        .find(({ id }) => id === match.params.testimonyGroupId)
        .data.length

    console.log("IN id")
    let testimonyGroup = match.params.testimonyGroupId
    console.log(match.params.testimonyGroupId)


    console.log(testimony)
    numberId = (Number(match.params.testimonyId))

    console.log("NUMBER ID IS ", numberId)
    let previousPage = numberId - 1
    let nextPage = numberId + 1
    if (numberId == 1) {
        previousPage = testimoniesForGroup 
    }

    if (numberId == testimoniesForGroup) {
        nextPage = 1
    }

    function Message(props) {
        let message = props.msg
        let content = ""
        let mediaTypeClass = "message"





        try {
            console.log(props)
            console.log("Current message ",message)
            let msgType = props.msg.msg_file_type
            let position = message.msg_sender == "admin" ? "msgRight " : "msgLeftContent "
            if (msgType == "text") {
                
                
                content = <p>{props.msg.msg_body}</p>
                console.log(props.msg.msg_body)
                if (props.msg.msg_body.includes("https://")) {
                    content = <p><Linkify>{props.msg.msg_body}</Linkify></p>
                }



            } else if (msgType == "image") {
                let c = "/" + message.msg_body.split(" ")[1].trim()
                console.log(c)

                var imgLocation = c.replace(/[\u200B-\u200e\uFEFF]/g, '');
                imgLocation = imgLocation.split(".")[0] + ".jpg"
                console.log("IMG LOC " , imgLocation)

                content = <img onClick={() => displayImgModal(imgLocation)} className="response-img msgImg" src={imgLocation} alt="logo" />

                mediaTypeClass = "msgImage"
            } else if (msgType == "audio") {
                console.log("Processing audio for ", message.msg_body)


                let audioPath = message.msg_body
                console.log(audioPath.split(" "))
                if ((!audioPath.includes("AUDIO-2021")) && (audioPath.split(" ").length === 4 )) {
                    audioPath = message.msg_body.split(" ")[1]
                    console.log("splitting audio paths")


                }

                console.log("Audio path is currently ", audioPath)
                audioPath = "/" + audioPath.replace(/[\u200B-\u200e\uFEFF]/g, '');
                audioPath = audioPath.split(".")[0] + ".mp3"

                if (audioPath.split(" ").length === 2) {
                    audioPath = "/" + audioPath.split(" ")[1]
                }

                console.log("Audio path is now ", audioPath)

                let playerClass = ""
                if (position == "msgRight ") {
                    playerClass = "audioDark"
                }
                
        

                console.log("AUDIO PATH ", audioPath)

                // content = <audio controls><source src={audioPath} type="audio/mp3" /></audio>
                content = <AudioPlayer
                autoplay={false}
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                src={audioPath}
                type="audio/ogg" codecs="opus"
                onPlay={e => console.log("onPlay")}
                layout="horizontal-reverse"
                className={playerClass}

            // other props here
            />
            }
            return <div className={(msgType == "audio" ? "audioMsg " : " ") +  (message.msg_sender == "admin" ? "msgRight " : "msgLeftContent ") + mediaTypeClass}>{content}</div>


        } catch (e) {
            console.log(e)
            console.log(props)
            return <p></p>
        }
    }
    window.scrollTo(0, 0)

    return (
        <div>

            <NavBar testiomnyGroupUrl={testimonyGroup}></NavBar>



            <div class="messagesContainer container">
                <Message msgType="" />
                <ul>
                    {
                        testimony.map((message =>
                            <li class={message.msg_sender == "admin" ? "msgRight messageRow" : "msgLeft messageRow"}>
                                {/* <div class={message.msg_sender == "admin" ? "msgRight message" : "msgLeftContent message"}>{message.msg_body}</div> */}
                                {/* <img className="response-img" src={process.env.PUBLIC_URL + '/Testimonio001/IMG-20201001-WA0000.jpg'} alt="logo" /> */}
                                <Message msg={message}> </Message>

                            </li>

                        ))
                    }
                </ul>

            </div>
            <hr></hr>
            <div>
                <div class="bottomNav">
                    <Link to={`${previousPage}`}>
                        <div className="navArrowLeft"><i class="large material-icons col s1">        chevron_left</i>


                        </div>

                    </Link>
                    <Link className="centerText" to={`${previousPage}`}>
                        <p>Anterior</p>

                    </Link>
                    <Link className="modalExit centerText" to={`${nextPage}`}>
                        <p>Siguiente</p>

                    </Link>
                    <Link className="" to={`${nextPage}`}>
                        <div className=""><i class="large material-icons col s1 offset-s10">        chevron_right</i></div>

                    </Link>


                </div>
            </div>
            <Modal
                style={{
                    overlay: {
                        backgroundColor: 'black'
                    },
                    content: {
                        backgroundColor: 'black',
                        border: "none"
                    }
                }}
                isOpen={showModal}
                contentLabel="Minimal Modal Example"
            >
                <div className="container">
     

                    <div class="modalContent">
                        {/* <button onClick={closeModal}>Close Modal</button> */}
                        <i onClick={closeModal} class="medium material-icons modalExit">clear</i>
                        <img className="modalImg" src={modalImgLocation} alt="logo" />
                    </div>
                </div>
            </Modal>



        </div>
    )
}

const TestimonyGroup = ({ match }) => {


    const testimonies = TestimonyDB.find(function (t) {
        return match.params.testimonyGroupId === t.id;
    })
    console.log("Testimony : ", testimonies)
    console.log(testimonies)
    console.log(match)
    console.log(match.params.testimonyGroupId)

    return (

        <div>
            <NavBar testiomnyGroupUrl={match.params.testimonyGroupId}></NavBar>

        <div class="wrapper container">
            {/* <nav>
                <div class="row">
                    <div className="navArrowLeft"><Link to="/chats"><i class="large material-icons col s1">chevron_left</i></Link></div>
                    <h4>Todas los testimonios</h4>
                </div>
            </nav> */}

            <div>
        <p class="question">{testimonies.question}</p>
            </div>
            <div class="testimonyCategorites">

                <ul >
                    {
                        testimonies.data.map((value, index) =>
                        <Link to={`${match.params.testimonyGroupId}/${index + 1 }`}>
                            <li className="testimonyLink" key={index + 1}>
                              
                                   
                                        <p className="col s10 optionText"><strong>Testimonio </strong> {index + 1} </p>


                                   
                           
                                <div className="iconContainer"> <i class="material-icons arrow">        chevron_right</i>
                                </div>
                            </li>       </Link>
                        )

                    }
                </ul>
            </div>
        </div ></div>

    )
}


const Video = () => {



    return (

        <div class="wrapper">
            {/* <nav>
                <div class="row">
                    <div className="navArrowLeft"><Link to="/chats"><i class="large material-icons col s1">chevron_left</i></Link></div>
                    <h4>Todas los testimonios</h4>
                </div>
            </nav> */}

            <NavBar></NavBar>
            <div class="container">
                <div class="modalContent">
                <iframe src="https://player.vimeo.com/video/492567126?color=ffffff&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/492567126">&iexcl;Se buscan testigos!</a> from <a href="https://vimeo.com/user643483">Lizania Cruz</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
            </div></div>

        </div>

    )
}



class Chats extends React.PureComponent {


    constructor(props) {
        super(props);
        console.log("topics constructor")
        console.log(TestimonyDB)
        this.currentLocation = ""

    }

    // onUpdate={window.scrollTo(0, 0)}

componentDidMount() {
  window.scrollTo(0, 0)
}


    componentWillReceiveProps(props) {
        console.log('location: ', props.location.pathname);
        this.currentLocation = props.location
    }



    render() {
        const { match } = this.props;
        return (

            <div>

                <NavBar currentLocation={this.currentLocation}></NavBar>

                <div class="container">
                    <div class="testimonyCategorites">


                        <ul >
                            {


                                TestimonyDB.map(({ name, id }) => (
                                    <Link to={`${id}`}>
                                    <li className="testimonyLink" key={name}>

                                     
                                            <p className="col s10 optionText"><strong>Testimonios: </strong> {name} </p>
                                  


                                        <div className="iconContainer"> <i class="material-icons arrow col offset-s1 s1">        chevron_right</i>
                                        </div>
                                    </li>      </Link>
                                ))

                            }
                        </ul>


                    </div></div></div>
        )
    }
}




const App = () => (
    <Router>
    




            <Switch>
                <Route exact path="/" component={Chats} />
        
                <Route exact path="/video" component={Video} />

                <Route exact path="/:testimonyGroupId" component={TestimonyGroup} />
                <Route exact path="/:testimonyGroupId/:testimonyId" component={Testimony} />
            </Switch>
    </Router>
)


export default withRouter(App);