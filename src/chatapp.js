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

const topics = [
    {
        name: 'Vivir en una isla',
        id: 'vivirenunsaisla',
        description: 'Declarative, component based routing for React',
        resources: [
            {
                name: '0',
                id: 'url-parameters',
                description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
                url: 'https://tylermcginnis.com/react-router-url-parameters'
            },
            {
                name: '1',
                id: 'programmatically-navigate',
                description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
                url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
            }
        ]
    },
    {
        name: 'La virgen de las Mercedes',
        id: 'lavirgen',
        description: 'A JavaScript library for building user interfaces',
        resources: [
            {
                name: 0,
                id: 0,
                description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
                url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
            },
            {
                name: 1,
                id: 1,
                description: "A collection of 'Aha' moments while learning React.",
                url: 'https://tylermcginnis.com/react-aha-moments/'
            }
        ]
    },
    {
        name: 'Colon',
        id: 'functional-programming',
        description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
        resources: [
            {
                name: 'Imperative vs Declarative programming',
                id: 'imperative-declarative',
                description: 'A guide to understanding the difference between Imperative and Declarative programming.',
                url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
            },
            {
                name: 'Building User Interfaces with Pure Functions and Function Composition',
                id: 'fn-composition',
                description: 'A guide to building UI with pure functions and function composition in React',
                url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
            }
        ]
    }
]

const Resource = ({ match }) => {

console.log(match)
    console.log("IN RESOURCEEEEE")
    const resource = TestimonyDB.all()
        .find(({ id }) => id === match.params.topicId)
        .data[Number(match.params.resourceId)]




    console.log("IN RESOURCE")
    console.log(match)
   
    console.log(resource)
    console.log(match)
    // const resource = topics[0]["resources"][0]
    return (
        <div>
            <nav>
                <div class="row">
                    <div className="navArrowLeft"><i class="large material-icons col s1">        chevron_left</i></div>

                    <div className="navArrowRight"><i class="large material-icons col s1 offset-s10">        chevron_right</i></div>
                </div>
            </nav>
            <hr></hr>

            <div >
                <ul>
                {
                    resource.map((message => 
                        
                        <li class={message.msg_sender == "admin" ? "msgRight message": "msgLeft message"}>{message.msg_body}</li>
                        ))
                }
                </ul>
                <p>Some cool stuff here!</p>
                <h3>{resource.name}</h3>
                <p>{resource.description}</p>
                <a href={resource.url}>More info.</a>
            </div>
        </div>
    )
}

const Topic = ({ match }) => {
    const testimonies = TestimonyDB.all().find((function (t) {
        console.log(t.id + " versus " + match.params.topicId)

        if (match.params.topicId === t.id) {
            console.log("Found it ")
            return t
        }


    }))
    console.log("topic")
    console.log(testimonies)
    console.log(match)
    console.log(match.params.topicId)

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
                                           <Link to={`${match.params.topicId}/${index}`}>
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
                <Route exact path="/" component={Home} />
                <Route exact path="/chats" component={Chats} />
                <Route exact path="/chats/:topicId" component={Topic} />
                <Route exact path="/chats/:topicId/:resourceId" component={Resource} />
            </Switch>
        </div>
    </Router>
)


export default withRouter(App);