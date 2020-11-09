import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,withRouter,
  useHistory ,useLocation ,browserHistory 
} from 'react-router-dom'
import About from './About'
import Intro from './Intro'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './App.css';
import HumansAsMachines from './HumansAsMachines'
import HumansAutomatingMachines from './humansAutomatingMachines'
import MachinesAsHumans from './machinesAsHumans'

Modal.setAppElement('#root')

class App extends React.Component {


  
  constructor() {
    super();
    this.state = {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal4 = this.handleOpenModal4.bind(this);
    this.handleCloseModal4 = this.handleCloseModal4.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);
  }

  handleOpenModal() {
    console.log("LOCATION")
   console.log( window.location.pathname)


    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleOpenModal2() {
    this.setState({ showModal2: true });
  }

  handleCloseModal2() {
    this.setState({ showModal2: false });
  }

  handleOpenModal3() {
    this.setState({ showModal3: true });
  }

  handleCloseModal3() {
    this.setState({ showModal3: false });
  }

  handleOpenModal4() {
    this.setState({ showModal4: true });
  }

  handleCloseModal4() {
    this.setState({ showModal4: false });
  }

  // this.enableStationModal = this.enableStationModal.bind(this);


  enableStationModal() {
    this.handleCloseModal();

  }
  modalSelect = {
    "/humansasmachines": () => this.handleOpenModal2(),
    "/humansautomatingmachines": () => this.handleOpenModal3(),
    "/machinesashumans": () => this.handleOpenModal4()
  }
  loadModal(pathKey) {

    if (pathKey in this.modalSelect) {

      this.modalSelect[pathKey]()
    }
    console.log("MY LOCATION ISSSS " + window.location.pathname)
    
  }



  componentWillMount() {
    // this.handleOpenModal2()
    this.loadModal(window.location.pathname)
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");
      console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
      console.log(`The last navigation action was ${action}`)

      this.loadModal(window.location.pathname)
    });
  }

  render() {
    return (
      <div className=''>
        <nav className='no-shadows'>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">

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
                  <li class="item"><Link to="/" onClick={this.handleCloseModal} className="nav-link"><a href="#">Warping The Future</a> </Link><div onClick={this.handleCloseModal} class="menu-button"><i class="material-icons">clear</i></div></li>
                  <li class="item"><Link to="/about" onClick={this.handleCloseModal} className="nav-link"><a href="#">About</a></Link></li>
                  <li class="item"><a href="#">Schedule Visit<i class="material-icons">send</i></a></li>
                  <li class="item"><Link onClick={() => this.enableStationModal()} to="/humansasmachines" className="nav-link">
                    Humans As Machines
              </Link></li>
                  <li class="item"><Link onClick={this.handleCloseModal} to="/humansautomatingmachines" className="nav-link"><a href="#">Humans Automating Machines</a> </Link></li>
                  <li class="item"><Link onClick={this.handleCloseModal} to="/machinesashumans" className="nav-link"><a href="#">Machines As Humans</a> </Link></li>
                  <li class="item"><a href="#">Saved for Later</a></li>
                  <li class="item"><a href="#">Book Collection<i class="material-icons">send</i></a></li>
                  <li class="item"><a href="#">Credits</a></li>
                </ul>
              </div>
            </div>
          </Modal>


          <Modal
            
            isOpen={this.state.showModal2}
            contentLabel="Minimal Modal Example"
            className="StationModal"
            style={{
              overlay: {
                backgroundColor: null
              },
              content: {
                color: null
              }
            }}
          >
            <div class="stationText">
              <h3 class="center-align">Humans As Machines</h3>
              <p class="center-align">I'm baby normcore disrupt palo santo tacos bicycle rights waistcoat food truck hammock vaporware cred polaroid listicle fam af. Microdosing wolf unicorn, activated charcoal freegan chambray chartreuse cornhole prism. Prism neutra scenester, venmo asymmetrical chillwave messenger bag photo booth kinfolk cornhole 3 wolf moon. Copper mug umami chia seitan freegan meditation adaptogen blog microdosing readymade. Vexillologist austin glossier helvetica, lo-fi keffiyeh seitan humblebrag thundercats try-hard whatever. +1 schlitz DIY wayfarers, craft beer blog messenger bag hell of actually.
</p>

<div className="row">
              <div className="col s4 center-align"></div>
              <div className="col s4 center-align" onClick={this.handleCloseModal2}>  <div className="button-nav"><h5>Go To Experience</h5></div></div>
              <div className="col s4 center-align"></div>
            </div>
            </div>
     
          </Modal>
          <Modal
            
            isOpen={this.state.showModal3}
            contentLabel="Minimal Modal Example"
            className="StationModal"
            style={{
              overlay: {
                backgroundColor: null
              },
              content: {
                color: null
              }
            }}
          >
            <div class="stationText">
              <h3 class="center-align">Humans Automating Machines</h3>
              <p class="center-align">I'm baby normcore disrupt palo santo tacos bicycle rights waistcoat food truck hammock vaporware cred polaroid listicle fam af. Microdosing wolf unicorn, activated charcoal freegan chambray chartreuse cornhole prism. Prism neutra scenester, venmo asymmetrical chillwave messenger bag photo booth kinfolk cornhole 3 wolf moon. Copper mug umami chia seitan freegan meditation adaptogen blog microdosing readymade. Vexillologist austin glossier helvetica, lo-fi keffiyeh seitan humblebrag thundercats try-hard whatever. +1 schlitz DIY wayfarers, craft beer blog messenger bag hell of actually.
</p>

<div className="row">
              <div className="col s4 center-align"></div>
              <div className="col s4 center-align" onClick={this.handleCloseModal3}>  <div className="button-nav"><h5>Go To Experience</h5></div></div>
              <div className="col s4 center-align"></div>
            </div>
            </div>
     
          </Modal>
          <Modal
            
            isOpen={this.state.showModal4}
            contentLabel="Minimal Modal Example"
            className="StationModal"
            style={{
              overlay: {
                backgroundColor: null
              },
              content: {
                color: null
              }
            }}
          >
            <div class="stationText">
              <h3 class="center-align">Machines as Humans</h3>
              <p class="center-align">I'm baby normcore disrupt palo santo tacos bicycle rights waistcoat food truck hammock vaporware cred polaroid listicle fam af. Microdosing wolf unicorn, activated charcoal freegan chambray chartreuse cornhole prism. Prism neutra scenester, venmo asymmetrical chillwave messenger bag photo booth kinfolk cornhole 3 wolf moon. Copper mug umami chia seitan freegan meditation adaptogen blog microdosing readymade. Vexillologist austin glossier helvetica, lo-fi keffiyeh seitan humblebrag thundercats try-hard whatever. +1 schlitz DIY wayfarers, craft beer blog messenger bag hell of actually.
</p>

<div className="row">
              <div className="col s4 center-align"></div>
              <div className="col s4 center-align" onClick={this.handleCloseModal4}>  <div className="button-nav"><h5>Go To Experience</h5></div></div>
              <div className="col s4 center-align"></div>
            </div>
            </div>
     
          </Modal>

        </div>
        <div>




          <Route exact path='/' component={Intro} />
          <Route exact path='/about' component={About} />
          <Route  path='/humansasmachines' component={HumansAsMachines} />
          <Route path='/humansautomatingmachines' component={HumansAutomatingMachines} />
          <Route path='/machinesashumans' component={MachinesAsHumans} />

        </div>
      </div>
    )
  }
}

export default withRouter(App);