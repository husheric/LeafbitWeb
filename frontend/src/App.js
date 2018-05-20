import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Marketplace from './Components/Marketplace';
import TreeProgress from './Components/TreeProgress';
import './stylesheets/nav.css';
import './stylesheets/App.css';
import TreeMap from './Components/TreeMap'

class App extends Component {
  constructor() {
    super()
    this.state = {
      sidebar: false
    }
  }

  handleSidebar = () => {
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  render() {
    console.log(this.state)
    const sidebarClass = this.state.sidebar ? `hidden` : `visible`

    return (
      <div>
        <nav className="sidebar">
          <div className={`sidebar-${sidebarClass}`}>
            <Link to="/"><i className="fas fa-tree fa-fw fa-3x"></i></Link>
            <Link to="/market"><i className="fas fa-store fa-fw fa-3x"></i></Link>
            <Link to="/map"><i className="fas fa-map-marker-alt fa-fw fa-3x"></i></Link>
            <Link to="/profile"><i className="fas fa-user fa-fw fa-3x"></i></Link>
          </div>
        </nav>
        <div className="top">
          <div onClick={this.handleSidebar}>
            <i className="fas fa-caret-right"></i>
          </div>
          <img src="../assets/icon.png" alt="Leafbit" />
        </div>
        <Switch>
          <Route exact path="/" component={TreeProgress} />
          <Route path="/market" component={Marketplace} />
          <Route path="/map" component={TreeMap} />
          <Route path="/profile" component={Marketplace} />
        </Switch>
      </div>
    );
  }
}

export default App;
