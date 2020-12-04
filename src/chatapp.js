import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link, withRouter,
    useHistory, useLocation, browserHistory
} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './ChatApp.css';
import TestimonyDB from "./TestimonyDB.json"
import { NavBar } from './Navbar';

const Testimony = ({ match }) => {
    let numberId = Number(match.params.testimonyId)
    console.log(match)
    console.log("IN RESOURCEEEEE")
    const testimony = TestimonyDB
        .find(({ id }) => id === match.params.testimonyGroupId)
        .data[numberId]

    const testimoniesForGroup = TestimonyDB
        .find(({ id }) => id === match.params.testimonyGroupId)
        .data.length

    console.log("IN RESOURCE")
    console.log(match)


    console.log(testimony)
    console.log(match)
    let previousPage = numberId - 1
    let nextPage = numberId + 1

    if (numberId == 0) {
        previousPage = testimoniesForGroup - 1
    }

    if (nextPage == testimoniesForGroup) {
        nextPage = 0
    }

    function Message(props) {
        console.log("rendering message")
        // console.log(props)
        // console.log(props.msg)
        let message = props.msg
        let content = ""
        let mediaTypeClass = "message"
        try {

            let msgType = props.msg.msg_file_type
            if (msgType == "text") {
                content = <p>{props.msg.msg_body}</p>
            } else if (msgType == "image") {
                let c = "/" + message.msg_body.split(" ")[1].trim()
                console.log(c)

                var imgLocation = c.replace(/[\u200B-\u200e\uFEFF]/g, '');

                content = <img className="response-img" src={imgLocation} alt="logo" />

                mediaTypeClass = "msgImage"
            } else if (msgType == "audio") {
                // console.log("AUDIOOOO", process.env.PUBLIC_URL + '/Testimonio002/PTT-20201001-WA0001.opus')
                console.log("AUDIO PATH", message.msg_body.split(" ")[1])
                let audioPath = message.msg_body.split(" ")[1]
                audioPath = "/" + audioPath.replace(/[\u200B-\u200e\uFEFF]/g, '');
                console.log(audioPath)
                // audioPath = "PTT-20201001-WA0012.opus"
                // audioPath = "/PTT-20201001-WA0001.opus"
                content = <audio controls><source src={audioPath} /></audio>
                //public\Testimonio002\00000033-AUDIO-2020-11-21-18-49-47.opus
                // public\Testimonio002\PTT-20201001-WA0001.opus
            }
            return <div className={(message.msg_sender == "admin" ? "msgRight " : "msgLeftContent ") + mediaTypeClass}>{content}</div>

            // // return <p className="message">Oh Hello!!!</p>
            // return <p>props.msg.msg_body</p>

        } catch (e) {
            console.log(e)
            console.log(props)
            return <p></p>
        }
    }


    return (
        <div>

            <NavBar></NavBar>



            <div class="messagesContainer">
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
                <div class="row">


                    <Link to={`${previousPage}`}>
                        <div className="navArrowLeft"><i class="large material-icons col s1">        chevron_left</i>
                            {/* <p>Anterior</p> */}

                        </div>
                    </Link>
                    <Link to={`${nextPage}`}>
                        <div className="navArrowRight"><i class="large material-icons col s1 offset-s10">        chevron_right</i></div>
                        {/* <p>Siguiente</p> */}

                    </Link>


                </div>
            </div>
        </div>
    )
}

const TestimonyGroup = ({ match }) => {


    const testimonies = TestimonyDB.find(function (t) {
        return match.params.testimonyGroupId === t.id;
    })
    console.log("topic")
    console.log(testimonies)
    console.log(match)
    console.log(match.params.testimonyGroupId)

    return (

        <div class="wrapper">
            {/* <nav>
                <div class="row">
                    <div className="navArrowLeft"><Link to="/chats"><i class="large material-icons col s1">chevron_left</i></Link></div>
                    <h4>Todas los testimonios</h4>
                </div>
            </nav> */}

            <NavBar></NavBar>
            <div>
                <p class="question">¿Volveria usted a vivir en una isla
sin frontera y por qué?</p>
            </div>
            <div class="testimonyCategorites">

                <ul >
                    {
                        testimonies.data.map((value, index) =>
                            <li className="testimonyLink" key={index}>

                                <div class="row">
                                    <Link to={`${match.params.testimonyGroupId}/${index}`}>
                                        <p className="col s10 optionText"><strong>Testimonio </strong> {index} </p>
                                        <i class="large material-icons arrow col s2">        chevron_right</i>
                                    </Link>

                                </div>
                            </li>
                        )

                    }
                </ul>
            </div>
        </div>

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
            <div>
                <p class="question">Video will go here</p>
            </div>
          
        </div>

    )
}



class Chats extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log("topics constructor")
        console.log(TestimonyDB)
    }

    render() {
        const { match } = this.props;
        return (

            <div>

                <NavBar></NavBar>
                <div class="testimonyCategorites">


                    <ul >
                        {


                            TestimonyDB.map(({ name, id }) => (
                                <li className="testimonyLink" key={name}>

                                    <div class="row">
                                        <Link to={`chats/${id}`}>
                                            <p className="col s10 optionText"><strong>Testimonios: </strong> {name} </p>
                                            <i class="large material-icons arrow col s2">        chevron_right</i>
                                        </Link>

                                    </div>
                                </li>
                            ))

                        }
                    </ul>


                </div></div>
        )
    }
}




const App = () => (
    <Router>
        <div id="container">




            <Switch>
                <Route exact path="/" component={Chats} />
                <Route exact path="/chats" component={Chats} />
                <Route exact path="/video" component={Video} />

                <Route exact path="/chats/:testimonyGroupId" component={TestimonyGroup} />
                <Route exact path="/chats/:testimonyGroupId/:testimonyId" component={Testimony} />
            </Switch>
        </div>
    </Router>
)


export default withRouter(App);