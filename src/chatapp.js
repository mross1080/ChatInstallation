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
import TestimonyDB from "./TestimonyDB"



const Testimony = ({ match }) => {

    console.log(match)
    console.log("IN RESOURCEEEEE")
    const testimony = TestimonyDB.all()
        .find(({ id }) => id === match.params.testimonyGroupId)
        .data[Number(match.params.testimonyId)]

    console.log("IN RESOURCE")
    console.log(match)

    console.log(testimony)
    console.log(match)
    return (
        <div>
            <nav>
                <div class="row">
                    <div className="navArrowLeft"><i class="large material-icons col s1">        chevron_left</i></div>

                    <div className="navArrowRight"><i class="large material-icons col s1 offset-s10">        chevron_right</i></div>
                </div>
            </nav>
            <hr></hr>

            <div class="messagesContainer">
                <ul>
                    {
                        testimony.map((message =>

                            <li class={message.msg_sender == "admin" ? "msgRight message" : "msgLeft message"}>{message.msg_body}</li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

const TestimonyGroup = ({ match }) => {
    const testimonies = TestimonyDB.all().find((function (t) {
        console.log(t.id + " versus " + match.params.testimonyGroupId)
        // TODO refactor this 
        if (match.params.testimonyGroupId === t.id) {
            return t
        }


    }))
    console.log("topic")
    console.log(testimonies)
    console.log(match)
    console.log(match.params.testimonyGroupId)

    return (

        <div class="wrapper">
            <nav>
                <div class="row">
                    <div className="navArrowLeft"><Link to="/chats"><i class="large material-icons col s1">chevron_left</i></Link></div>
                    <h4>Todas los testimonios</h4>
                </div>
            </nav>
            <hr></hr>
            <div class="testimonyCategorites">
                <ul >
                    {
                        testimonies.data.map((value, index) =>
                            <li className="testimonyLink" key={index}>

                                <div class="row">
                                    <Link to={`${match.params.testimonyGroupId}/${index}`}>
                                        <p className="col s10"><strong>Testimonios: </strong> {index} </p>
                                        <i class="small material-icons col s2">        chevron_right</i>
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


class Chats extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log("topics constructor")
        console.log(TestimonyDB.all())
    }

    render() {
        const { match } = this.props;
        return (
            <div class="testimonyCategorites">


                <ul >
                    {


                        TestimonyDB.all().map(({ name, id }) => (
                            <li className="testimonyLink" key={name}>

                                <div class="row">
                                    <Link to={`chats/${id}`}>
                                        <p className="col s10"><strong>Testimonios: </strong> {name} </p>
                                        <i class="small material-icons col s2">        chevron_right</i>
                                    </Link>

                                </div>
                            </li>
                        ))

                    }
                </ul>


            </div>
        )
    }
}

const Home = () => (
    <h1>HOME</h1>
)

const App = () => (
    <Router>
        <div id="container">




            <Switch>
                <Route exact path="/" component={Chats} />
                <Route exact path="/chats" component={Chats} />
                <Route exact path="/chats/:testimonyGroupId" component={TestimonyGroup} />
                <Route exact path="/chats/:testimonyGroupId/:testimonyId" component={Testimony} />
            </Switch>
        </div>
    </Router>
)


export default withRouter(App);