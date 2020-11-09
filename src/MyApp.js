import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import About from './About'
import Intro from './Intro'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './App.css';
import HumansAsMachines from './HumansAsMachines'


const loom_data = [{
  name: 'Loom One',
  id: 'loom-one',
  description: 'Declarative, component based routing for React',
}, {
  name: 'Loom Two',
  id: 'loom-two',
  description: 'A much better Loom',
}]

const topics = [
  {
    name: 'React Router',
    id: 'react-router',
    description: 'Declarative, component based routing for React',
    resources: [
      {
        name: 'URL Parameters',
        id: 'url-parameters',
        description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
        url: 'https://ui.dev/react-router-url-parameters/'
      },
      {
        name: 'Programmatically navigate',
        id: 'programmatically-navigate',
        description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
        url: 'https://ui.dev/react-router-programmatically-navigate/'
      }
    ]
  },
  {
    name: 'React.js',
    id: 'reactjs',
    description: 'A JavaScript library for building user interfaces',
    resources: [
      {
        name: 'React Lifecycle Events',
        id: 'react-lifecycle',
        description: "React Lifecycle events allow you to tie into specific phases of a components lifecycle",
        url: 'https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/'
      },
      {
        name: 'React AHA Moments',
        id: 'react-aha',
        description: "A collection of 'Aha' moments while learning React.",
        url: 'https://ui.dev/react-aha-moments/'
      }
    ]
  },
  {
    name: 'Functional Programming',
    id: 'functional-programming',
    description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
    resources: [
      {
        name: 'Imperative vs Declarative programming',
        id: 'imperative-declarative',
        description: 'A guide to understanding the difference between Imperative and Declarative programming.',
        url: 'https://ui.dev/imperative-vs-declarative-programming/'
      },
      {
        name: 'Building User Interfaces with Pure Functions and Function Composition',
        id: 'fn-composition',
        description: 'A guide to building UI with pure functions and function composition in React',
        url: 'https://ui.dev/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
      }
    ]
  }
]

function Resource({ match }) {
  const topic = topics.find(({ id }) => id === match.params.topicId)
    .resources.find(({ id }) => id === match.params.subId)

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More info.</a>
    </div>
  )
}

function Topic({ match }) {
  const topic = topics.find(({ id }) => id === match.params.topicId)

  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>

      <ul>
        {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
  )
}

function Loom({ match }) {
  const loom = loom_data.find(({ id }) => id === match.params.topicId)

  return (
    <div>
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
      <h2>{loom.name}</h2>
      <p>{loom.description}</p>



      <hr />

    </div>
  )
}


function Topics({ match }) {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  )
}

function Looms({ match }) {
  return (
    <div>
      <h1>Super Cool Looms!</h1>
      <ul>
        {loom_data.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${match.path}/:topicId`} component={Loom} />
    </div>
  )
}


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
        <Link to={`${match.url}/loom1`}>
          Loom 1
          </Link>
      </li>
      <li>
        <Link to={`${match.url}/loom2`}>
          Loom 2
          </Link>
      </li>

    </ul>

    <Route path={`${match.url}/:userId`} component={User} />
    <Route path='users/loom2' component={User} />
    <Route exact path={match.url} render={() => (
      <h5>Please select a user.</h5>
    )} />
  </div>
)



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className=''>
        <nav className='no-shadows'>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li className="nav-item">
                <Link to="/humansasmachines" className="nav-link">
                  Humans As Machines
              </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" exact className="nav-link">
                  About
              </Link>
              </li>
              <li className="nav-item">
                <Link to="/topics" className="nav-link">
                  About
              </Link>
              </li>
              <li class="menu-button"><a onClick={this.handleOpenModal}><i class="material-icons">menu</i></a></li>

            </ul>
          </div>


        </nav>
        <div>
         
          <Modal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            className="MainModal"
            style={{
              overlay: {
                backgroundColor: null
              },
              content: {
                color: null
              }
            }}
          >
            <div class="menu-overlay">
              <div class="full-menu--middle">

                <ul class="main-nav">
                  <li class="item"><Link to="/" onClick={this.handleCloseModal} className="nav-link"><a href="#">Warping The Future</a> </Link><div  onClick={this.handleCloseModal} class="menu-button"><i class="material-icons">clear</i></div></li>
                  <li class="item"><Link to="/about" onClick={this.handleCloseModal} className="nav-link"><a href="#">About</a></Link></li>
                  <li class="item"><a href="#">Schedule Visit<i class="material-icons">send</i></a></li>
                  <li class="item"><Link onClick={this.handleCloseModal} to="/humansasmachines" className="nav-link">
                  Humans As Machines
              </Link></li>
                  <li class="item"><a href="#">Humans Automating Machines</a></li>
                  <li class="item"><a href="#">Machines As Humans</a></li>
                  <li class="item"><a href="#">Saved for Later</a></li>
                  <li class="item"><a href="#">Book Collection<i class="material-icons">send</i></a></li>
                  <li class="item"><a href="#">Credits</a></li>
                </ul>
                </div>
              </div>
        </Modal>
        </div>
        <div>




          <Route exact path='/' component={Intro} />
          <Route exact path='/about' component={About} />
          <Route path='/topics' component={Topics} />
          <Route path='/humansasmachines' component={HumansAsMachines} />
        </div>
      </div>
    )
  }
}

export default App