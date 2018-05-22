import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Marketplace from './Components/Marketplace';
import TreeProgress from './Components/TreeProgress';
import TreeMap from './Components/TreeMap';
import Profile from './Components/Profile';
import './stylesheets/App.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

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
    AOS.init({
      once: true
    });
    
    const { sidebar } = this.state;
    const sidebarClass = sidebar ? `visible` : `hidden`;

    return (
      <div>

        <div className={`sidebar sidebar-${sidebarClass}`}>
          <Link to="/" onClick={this.handleSidebar}><i className="fas fa-tree fa-fw fa-3x" onClick={this.handleSidebar}></i></Link>
          <Link to="/market" onClick={this.handleSidebar}><i className="fas fa-store fa-fw fa-3x" onClick={this.handleSidebar}></i></Link>
          <Link to="/map" onClick={this.handleSidebar}><i className="fas fa-map-marker-alt fa-fw fa-3x" onClick={this.handleSidebar}></i></Link>
          <Link to="/profile" onClick={this.handleSidebar}><i className="fas fa-user fa-fw fa-3x" onClick={this.handleSidebar}></i></Link>
        </div>

        <div className="top">
          <div onClick={this.handleSidebar}>
            <i className="fas fa-bars fa-fw fa-3x"></i>
          </div>
          <img src="./assets/icon.png" alt="Leafbit" id="top-logo" />
        </div>

        <Switch>
          <Route exact path="/" component={TreeProgress} />
          <Route path="/market" component={Marketplace} />
          <Route path="/map" component={TreeMap} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
